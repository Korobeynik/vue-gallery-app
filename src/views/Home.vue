<template>
    <div class="home">
        <Header />
        <Banner />
        <GalleryList />
    </div>
</template>

<script>
import Header from "../components/Header"
import Banner from "../components/Banner"
import GalleryList from "../components/GalleryList"

import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'home',
    components: {
        Header,
        Banner,
        GalleryList
    },
    methods: {
        ...mapActions([

        ])
    },
    computed: {
        ...mapGetters([

        ])
    },
    mounted() {

    }
}
</script>

<style lang="sass">

</style>
