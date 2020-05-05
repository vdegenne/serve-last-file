#!/usr/bin/node

const pwd = process.env.PWD;

const Koa = require('koa')
const getPort = require('get-port')
const Router = require('koa-router')
const koaStatic = require('koa-static')
const fs = require('fs')

async function main() {
  // port
  const port = await getPort()

  // app
  const app = new Koa
  app.use(koaStatic('public'))

  // router
  const router = new Router

  router.get('/last-file', function (ctx) {

    ctx.body = 'not implemented'
  })

  app.use(router.routes())

  app.listen(port, function () {
    console.log(`Last file is served from ${pwd}`)
    console.log(`You can now open http://localhost:${port}`);
  })
}


main()