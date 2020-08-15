<template>
  <div class="gallery-section" id="gallery">
    <div class="gallery-container" v-if="!allPhotos.length == 0">
      <router-link class="photo-item"
         v-for="photo in allPhotos"
         :key="photo.id"
         :to="'/card/' + photo.id"
      >
        <div class="img">
          <img
            :src="photo.urls.regular"
            :alt="photo.alt_description">
        </div>
      </router-link>
    </div>
    <p class="error" v-else>
      No photos found (:
    </p>
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
        console.log(this.page)
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
      if(this.allPhotos.length == 0) {
        this.$store.dispatch("fetchPhotos", [this.page, this.pageCount]);
      }
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


.error
  padding: 30px
  color: white
  font-size: 25px
  text-align: center
  padding-top: 50px

</style>