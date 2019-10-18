import glob from 'glob'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import inject from 'rollup-plugin-inject'
import multiEntry from 'rollup-plugin-multi-entry'
import vue from 'rollup-plugin-vue'
// import es3 from 'rollup-plugin-es3'

const files = glob.sync('src/**/*.js', {
  ignore: [
    'src/constants/**',
    'src/utils/**',
    'src/virtual-scroll/**',
    'src/vue/**'
  ]
})
const external = ['jquery']
const globals = {
  jquery: 'jQuery'
}
const config = []
const plugins = [
  inject({
    include: '**/*.js',
    exclude: 'node_modules/**',
    $: 'jquery'
  }),
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
    presets: [[
      '@babel/preset-env',
      {
        targets: {
          // ie: '>=8',
          // edge: '>=17',
          // firefox: '>=60',
          // chrome: '>=67',
          // safari: '>=11.1'
          browsers: [
            '>= 1%',
            'last 1 major version',
            'not dead',
            'Chrome >= 45',
            'Firefox >= 38',
            'Edge >= 12',
            'IE >= 8',
            'iOS >= 9',
            'Safari >= 9',
            'Android >= 4.4',
            'Opera >= 30'
          ]
        },
        corejs: '3',
        useBuiltIns: 'usage',
        modules: false,
        loose: true
      }
    ]],
    runtimeHelpers: true
  })
  // es3({
  //   remove: ['defineProperty', 'freeze']
  // })
]

if (process.env.NODE_ENV === 'production') {

  plugins.push(terser({
    ie8: true,
    mangle: {
      keep_fnames: true
    },
    output: {
      comments () {
        return false
      }
    }
  }))
}

for (const file of files) {
  let out = `dist/${file.replace('src/', '')}`
  if (process.env.NODE_ENV === 'production') {
    out = out.replace(/.js$/, '.min.js')
  }
  config.push({
    input: file,
    output: {
      name: 'BootstrapTable',
      file: out,
      format: 'umd',
      globals
    },
    external,
    plugins
  })
}

let out = 'dist/bootstrap-table-locale-all.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/locale/**/*.js',
  output: {
    name: 'BootstrapTable',
    file: out,
    format: 'umd',
    globals
  },
  external,
  plugins: [
    multiEntry(),
    ...plugins
  ]
})

out = 'dist/bootstrap-table-vue.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/vue/index.js',
  output: {
    name: 'BootstrapTable',
    file: out,
    format: 'umd'
  },
  plugins: [
    vue(),
    ...plugins
  ]
})

out = 'dist/bootstrap-table-vue.esm.js'
if (process.env.NODE_ENV === 'production') {
  out = out.replace(/.js$/, '.min.js')
}
config.push({
  input: 'src/vue/BootstrapTable.vue',
  output: {
    name: 'BootstrapTable',
    file: out,
    format: 'esm'
  },
  plugins: [
    vue(),
    ...plugins
  ]
})

export default config
