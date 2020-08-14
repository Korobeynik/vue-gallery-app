import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    randomPhoto: null,
    accessKey: 'F4EbR86lTYlL5qtuNP4wBKA0mOOGbTZs4gQ4YJKPunE'
  },
  mutations: {
    setRandomPhoto(state, content) {
      state.randomPhoto = content
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
  },
  getters: {
    randomPhoto: s => s.randomPhoto,
  }
})
