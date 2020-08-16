<template>
  <header class="header">
    <router-link aria-current="page" class="logo active" to="/">
      <img src="@/assets/media/logo.a277d5f5.png">
    </router-link>
    <nav class="menu">
      <a @click.prevent="queryCategory('All')" :class="[categoryRequest == 'All' ? 'active': '', 'item']" to="/All/">All</a>
      <a @click.prevent="queryCategory('Animals')" :class="[categoryRequest == 'Animals' ? 'active': '', 'item']">Animals</a>
      <a @click.prevent="queryCategory('Films')" :class="[categoryRequest == 'Films' ? 'active': '', 'item']" to="/Films">Films</a>
      <a @click.prevent="queryCategory('Food&amp;Drink')" :class="[categoryRequest == 'Food&amp;Drink' ? 'active': '', 'item']" to="/Food">Food&amp;Drink</a>
      <a @click.prevent="queryCategory('Nature')" :class="[categoryRequest == 'Nature' ? 'active': '', 'item']" to="/Nature">Nature</a>
    </nav>
    <div class="item form-wrap">
      <form class="item-form" @submit.prevent="submitSearch">
        <input type="text" placeholder="Photo search..." v-model="searchQuery" required>
        <button type="submit" class="btn btn-primary">Search</button>
      </form>
    </div>
  </header>
</template>

<script>
  import {mapGetters} from 'vuex'
  export default {
    name: "Header",
    data () {
      return {
        page: 1,
        pageCount: 15,
        query: '',
        searchQuery: ''
      }
    },
    computed: {
      ...mapGetters([
        'categoryRequest'
      ])
    },
    methods: {
      async submitSearch() {
        await this.$store.dispatch("clearAllPhotos");
        await this.$store.dispatch("categoryRequest", this.searchQuery);
        await this.$store.dispatch("fetchPhotos", [this.page, this.pageCount]);
      },
      async queryCategory(query) {
        this.searchQuery = ''
        await this.$store.dispatch("clearAllPhotos");
        await this.$store.dispatch("categoryRequest", query);
        await this.$store.dispatch("fetchPhotos", [this.page, this.pageCount]);
      }
    }
  }
</script>

<style lang="sass" scoped>

  .form-wrap
    &:hover
      text-decoration: none !important
  .item-form
    opacity: 1
    display: flex
    align-items: center
    button
      border-radius: 0
      background-color: #262626
      outline-color: black
      border: 1px solid #fff
      &:hover
        text-decoration: none
    input
      height: 30px
      color: #000
      padding-left: 10px

  nav
    a
      text-decoration: none

</style>