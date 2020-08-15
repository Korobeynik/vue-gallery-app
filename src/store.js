import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomPhoto: null,
    //accessKey: 'F4EbR86lTYlL5qtuNP4wBKA0mOOGbTZs4gQ4YJKPunE',
    accessKey: 'bb5b762fe9143a6445f0a3d30f47c55329c0ddf450c78b884c5026ee78c5bcef',
    allPhotos: []
  },
  mutations: {
    setRandomPhoto(state, content) {
      state.randomPhoto = content
    },
    setPhotos(state, content) {
      state.allPhotos = state.allPhotos.concat(content)
    }
  },
  actions: {
    getRandomPhoto: async ({commit,state}) => {
      await axios
        .get(`https://api.unsplash.com/photos/random/?client_id=${state.accessKey}`)
        .then(resp => {
          console.log(resp.data);
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
        .get('https://api.unsplash.com/photos', {
          params: {
            page: page,
            per_page: pageCount,
            client_id: state.accessKey
          }
        }).then(resp => {
          console.log(resp.data);
          const content = resp.data;
          commit('setPhotos', content);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    randomPhoto: s => s.randomPhoto,
    allPhotos: s => s.allPhotos,
  }
})
