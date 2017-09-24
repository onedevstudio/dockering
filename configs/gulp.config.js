const pkg = require('../package.json')
const bourbon = require('node-bourbon')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const themeName = pkg.name
const themePath = path.resolve(__dirname, `../src/themes/${pkg.name}`)
const srcPath = path.resolve(__dirname, `../src/assets`)
const modulesPath = path.resolve(__dirname, '../node_modules')

module.exports = {
  env,
  themeName,
  modulesPath,
  themePath,
  srcPath,
  includeSettings: {
    extensions: 'js',
    includePaths: [
      `${modulesPath}`,
      `${srcPath}/javascripts`
    ]
  },
  sassSettings: {
    sourcemap: true,
    noCache: true,
    style: 'expanded',
    sourceComments: true,
    includePaths: [
      bourbon.includePaths,
      `${modulesPath}`,
      `${srcPath}/sass`
    ]
  }
}
