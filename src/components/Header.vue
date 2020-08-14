<template>
    <header class="header">
        <router-link aria-current="page" class="logo active" to="/">
            <img src="@/assets/media/logo.a277d5f5.png">
        </router-link>
        <nav class="menu">
            <router-link class="item" to="/all/">All</router-link>
            <router-link class="item" to="/animal/3330452">Animals</router-link>
            <router-link class="item" to="/films/4694315">Films</router-link>
            <router-link class="item" to="/food&amp;drink/3330455">Food&amp;Drink</router-link>
            <router-link class="item" to="/about">Nature</router-link>
        </nav>
        <a class="item" href="/login/">Login</a>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style lang="sass" scoped>

nav
    a
        text-decoration: none

</style>