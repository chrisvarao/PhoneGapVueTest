export const STORAGE_KEY = 'todos-vuejs'

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear()
}

export const state = {
  list: {
    items: [{id: null, name: 'Loading...'}]
  }
}

export const mutations = {
  list_fetch (state) {
    setTimeout(() => {
      state.list = {
        items: [
          {id: 1, name: 'Item1'},
          {id: 2, name: 'Item2'},
          {id: 79, name: 'Huh?'},
        ]
      }
      console.log('derp')
    }, 1000)
  }
}

// export const actions = {
//   list_fetch(context) {
//     context.commit('list_fetch')
//   }
// }
