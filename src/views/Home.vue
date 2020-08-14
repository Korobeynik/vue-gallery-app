<template>
    <div class="home">
        <Header/>
        <Banner />
    </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/Banner";
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'home',
    components: {
        Header,
        Banner
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
