<style lang="scss">

.example-content {
    padding-top: 64px;
    position: relative;
    left: 256px;
    transition: all .45s cubic-bezier(.23, 1, .32, 1);
    &.on {
        left: 0px;
    }
}

</style>

<template>

<div id="app">
    <appbar :show="open" v-on:changeState="toggle" :class="{'on': !open}">
    </appbar>
    <sidebar :show="open" v-on:changeState="toggle"></sidebar>
    <div class="example-content" :class="{'on': !open}">
        <mu-content-block>
            <img src="./assets/logo.png">
            <hello></hello>
        </mu-content-block>
    </div>

</div>

</template>

<script>

import Hello from './components/Hello'
import Sidebar from './components/Sidebar'
import Appbar from './components/appbar/Appbar'
export default {
    name: 'app',
    data() {
        return {
            open: true
        }
    },
    components: {
        Appbar, Sidebar, Hello
    },
    methods: {
        toggle(msg) {
            this.open = !this.open
        }
    }
}

</script>
