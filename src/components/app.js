// External
require('vue-material/dist/vue-material.css')
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueMaterial = require('vue-material')

// Internal
var template = require('./app.html')

var App = Vue.component('app', {
  data() {
    return {
      title: 'Title',
    }
  },
  template: template
})

module.exports = App
