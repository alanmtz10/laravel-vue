<template>
    <NavBar/>
    <router-view/>
</template>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>

<script>


import {csrf} from "@/api/api";
import {authenticatedUser} from "@/api/auth";
import {mapActions} from "vuex";
import NavBar from "@/components/Navbar";

export default {
    components: {NavBar},
    methods: {
        ...mapActions(['setAuthUserAction'])
    },
    async mounted() {
        await csrf();
        const response = await authenticatedUser();

        if (response != null && response.status === 200 && Object.keys(response.data).length !== 0) {
            this.setAuthUserAction(response.data);
        }
    }
}
</script>
