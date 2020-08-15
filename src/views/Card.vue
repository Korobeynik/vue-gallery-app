<template>
  <div>
    <Header />
    <div class="photo-card-section" v-if="card">
      <div @click="$router.go(-1)" class="backTo">back to prev page</div>
      <div  class="slider" :style='{ backgroundImage: "url(" + card.urls.regular + ")", }'>
        <div class="fullname">
          <router-link
              :to="'/user/' + card.user.id">
            {{card.user.name}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from "vuex"
  import Header from "../components/Header"
  export default {
    name: "card",
    components: {
      Header
    },
    data () {
      return {

      }
    },
    methods: {
      setUserData() {
        const data = {
          name: this.card.user.name,
          image: this.card.user.profile_image.medium,
          collections: this.card.user.total_collections,
          totalPhoto: this.card.user.total_photos,
          totalLikes: this.card.user.total_likes
        }
        this.$store.dispatch("getUserData", data);
      }
    },
    computed: {
      ...mapGetters([
        'allPhotos'
      ]),
      card() {
        return this.$store.getters.cardById(this.$route.params.id)
      }
    },
    mounted() {
      if(this.card) {
        this.setUserData()
      }
    }
  }
</script>

<style scoped>

</style>