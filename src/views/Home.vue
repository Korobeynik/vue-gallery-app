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

export default {
    name: 'home',
    components: {
        Header,
        Banner,
        GalleryList
    }
}
</script>

<style lang="sass">

</style>
