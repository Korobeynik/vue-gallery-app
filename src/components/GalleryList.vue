<template>
  <div class="gallery-section">
    <div class="gallery-container">
      <a class="photo-item"
         v-for="photo in allPhotos"
         :key="photo.id"
         href="/"
      >
        <div class="img">
          <img
            :src="photo.urls.regular"
            :alt="photo.alt_description">
        </div>
      </a>
    </div>
    <div class="loader-box"><span @click="showMore" class="glyphicon glyphicon-refresh loader "></span></div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "GalleryList",
    data () {
      return {
        page: 1,
        pageCount: 15
      }
    },
    methods: {
      ...mapActions([
        'fetchPhotos'
      ]),

      async showMore () {
        this.page++
        this.pageCount = this.pageCount
        console.log()
        try {
          await this.$store.dispatch("fetchPhotos",[this.page, this.pageCount]);
        } catch (e) {
          console.log(e)
        }
      },

    },
    computed: {
      ...mapGetters([
        'allPhotos'
      ])
    },
    mounted() {
      this.$store.dispatch("fetchPhotos", [this.page, this.pageCount]);
    }
  }
</script>

<style lang="sass" scoped>

.glyphicon
  position: relative
  top: 1px
  display: inline-block
  font-family: 'Glyphicons Halflings'
  font-style: normal
  font-weight: 400
  line-height: 1
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

</style>