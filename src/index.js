// External Libraries
var Vue = require('vue')
var VueRouter = require('vue-router')
var VueMaterial = require('vue-material')

var App = require('./components/app')
var List = require('./components/list')
var store = require('./store')

Vue.use(VueRouter)
Vue.use(VueMaterial)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/list', component: List },
  ]
})

new Vue({
  router,
  store,
  data: () => {
    return {
      title: 'Home',
    }
  },
  render: h => h(App),
}).$mount('#app')
