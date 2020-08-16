<template>
  <div class="user">
    <Header />
    <div class="photo-card-section user-card-section">
      <div @click="$router.go(-1)" class="backTo">back to prev page</div>
      <div class="user-photo">
        <img :src="user[0].image" :alt="user[0].name"></div>
      <div class="user-information">
        <ul class="list-group">
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Name
            <span class="badge badge-primary badge-pill">
              {{user[0].name}}
            </span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total collections
            <span class="badge badge-primary badge-pill">{{user[0].collections}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total likes
            <span class="badge badge-primary badge-pill">{{user[0].totalLikes}}</span>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-center">
            Total photo
            <span class="badge badge-primary badge-pill">{{user[0].totalPhoto}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex"
  import Header from "../components/Header"
  export default {
    name: "user",
    components: {
      Header
    },
    data () {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'user'
      ])
    },
    mounted() {
      console.log(this.user)
    }
  }
</script>

<style lang="sass" scoped>

.user-card-section
  position: relative
  height: 100vh
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  .user-photo
    width: 100%
    max-width: 300px
    margin-bottom: 30px
  .user-information
    width: 100%
    max-width: 600px
  .list-group
    color: #262626
    text-align: left



</style>