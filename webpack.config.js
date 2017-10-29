const NODE_ENV = process.env.NODE_ENV;

const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const isDev  = NODE_ENV === 'development';

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  isDev: isDev,
  in: join(src, 'App.js'),
  out: dest,
  html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'Single Page App',
        publicPath: isDev ? 'http://localhost:3000/' : '',
        meta: {
          'name': 'Single Page App learn project',
          'description': ''
        }
      })
    }
  }
});


module.exports = config;
