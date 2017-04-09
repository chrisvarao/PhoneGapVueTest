// External Libraries
var Vue = require('vue')
var VueMaterial = require('vue-material')

// template
var template = require('./list.html')

var store = {
  debug: true,
  state: {
    debug: true,
    items: [{id: null, name: 'Loading...'}]
  },
  fetchItems () {
    this.debug && console.log('loading items')
    setTimeout(() => {
      this.debug && console.log('loaded items')
      this.state.items = [
        {id: 1, name: 'Item1'},
        {id: 2, name: 'Item2'},
        {id: 79, name: 'Huh?'},
      ]
    }, 1000)
  },
}

var List = Vue.component('list', {
  data() {
    return {
    }
  },
  computed: {
    items() {
      console.log(this.$store.default.state)
      return this.$store.default.state.list.items
    }
  },
  mounted() {
    this.$store.default.commit('list_fetch', {})
  },
  template: template
})

module.exports = List
