#!/usr/bin/node

const pwd = process.env.PWD;

const Koa = require('koa')
const getPort = require('get-port')
const Router = require('koa-router')
const statics = require('koa-static')
const range = require('koa-range')
const fs = require('fs')

async function main() {
  // port
  const port = await getPort()

  // app
  const app = new Koa
  app.use(range)
  app.use(statics(__dirname + '/public'))
  app.use(async function serve(ctx, next) {
    const path = `${pwd}${decodeURIComponent(ctx.URL.pathname).replace(/\s/g, '\ ')}`;
    if (fs.existsSync(path)) {
      const stat = fs.statSync(path)
      ctx.length = stat.size;
      ctx.body = fs.createReadStream(path)
    }
    else {
      await next()
    }
  })

  // router
  const router = new Router

  router.get('/last-file', function (ctx) {
    ctx.body = getLastFile()
  })

  app.use(router.routes())

  app.listen(port, function () {
    console.log(`Last file is served from ${pwd}`)
    console.log(`You can now open http://localhost:${port}`);
  })
}


main()



function getLastFile() {
  const files = fs.readdirSync(pwd).map(function (filename) {
    return {
      filename,
      stat: fs.statSync(`${pwd}/${filename}`)
    }
  }).filter(function filter(file) {
    return file.stat.isDirectory() === false;
  });
  // return the last file
  return files.sort((a, b) => b.stat.mtimeMs - a.stat.mtimeMs)[0].filename;
}