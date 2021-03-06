import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomPhoto: null,
    accessKey: 'F4EbR86lTYlL5qtuNP4wBKA0mOOGbTZs4gQ4YJKPunE',
    allPhotos: [],
    user: [],
    query: 'All'
  },
  mutations: {
    setRandomPhoto(state, content) {
      state.randomPhoto = content
    },
    setCategoryRequest(state, content) {
      state.query = content
    },
    clearPhotos(state) {
      state.allPhotos = []
    },
    setPhotos(state, content) {
      state.allPhotos = state.allPhotos.concat(content)
    },
    setUserData(state, content) {
      state.user = []
      state.user.push(content)
    }
  },
  actions: {
    getRandomPhoto: async ({commit,state}) => {
      await axios
        .get(`https://api.unsplash.com/photos/random/?client_id=${state.accessKey}`)
        .then(resp => {
          const content = resp.data;
          commit('setRandomPhoto', content);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchPhotos: async ({commit,state}, [page_payload, pageCount_payload]) => {
      let page = page_payload
      let pageCount = pageCount_payload
      await axios
        .get('https://api.unsplash.com/search/photos', {
          params: {
            query: state.query,
            page: page,
            per_page: pageCount,
            client_id: state.accessKey,
          }
        })
        .then(resp => {
          console.log(resp.data);
          const content = resp.data.results;
          commit('setPhotos', content);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getUserData({commit}, content) {
      commit('setUserData', content)
    },
    categoryRequest({commit}, content) {
      commit('setCategoryRequest', content)
    },
    clearAllPhotos({commit}) {
      commit('clearPhotos')
    }
  },
  getters: {
    randomPhoto: s => s.randomPhoto,
    allPhotos: s => s.allPhotos,
    user: s => s.user,
    categoryRequest: s => s.query,
    cardById: s => id => s.allPhotos.find(t => t.id === id)
  }
})
