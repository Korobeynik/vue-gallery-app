<template>
    <div class="slider" :style='{ backgroundImage: "url(" + randomPhoto.urls.regular + ")", }'></div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: "Banner",
    methods: {
        ...mapActions([
            'getRandomPhoto'
        ])
    },
    computed: {
        ...mapGetters([
            'randomPhoto'
        ])
    },
    mounted() {
        this.getRandomPhoto()
    }
}
</script>

<style scoped>

</style>