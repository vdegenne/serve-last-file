// import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/serve-last-file.js',
  output: { file: 'builds/serve-last-file.js', format: 'iife' },
  plugins: []
}