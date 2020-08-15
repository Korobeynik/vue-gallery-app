<template>
  <header class="header">
    <router-link aria-current="page" class="logo active" to="/">
      <img src="@/assets/media/logo.a277d5f5.png">
    </router-link>
    <nav class="menu">
      <a @click.prevent="queryCategory('All')" class="item" to="/All/">All</a>
      <a @click.prevent="queryCategory('Animals')" class="item" to="/Animals">Animals</a>
      <a @click.prevent="queryCategory('Films')" class="item" to="/Films">Films</a>
      <a @click.prevent="queryCategory('Food&amp;Drink')" class="item" to="/Food">Food&amp;Drink</a>
      <a @click.prevent="queryCategory('Nature')" class="item" to="/Nature">Nature</a>
    </nav>
    <a class="item" href="/login/">Login</a>
  </header>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "Header",
    data () {
      return {
        page: 1,
        pageCount: 15,
        query: ''
      }
    },
    computed: {
      ...mapGetters([
        'allPhotos'
      ])
    },
    methods: {
      async queryCategory(query) {
        await this.$store.dispatch("clearAllPhotos");
        await this.$store.dispatch("categoryRequest", query);
        await this.$store.dispatch("fetchPhotos", [this.page, this.pageCount]);
      }
    }
  }
</script>

<style lang="sass" scoped>

  nav
    a
      text-decoration: none

</style>