<style lang="css">



</style>

<template lang="html">

<div class="">
    <mu-raised-button icon="brightness_medium" label="主题" ref="button" @click="togglepop" />
    <mu-popover :trigger="trigger" :open="open" @close="handleClose">
        <mu-menu :value="theme" @change="changeTheme">
            <mu-menu-item title="LIGHT (DEFAULT)" value="light" />
            <mu-menu-item title="DARK" value="dark" />
            <mu-menu-item title="CARBON" value="carbon" />
            <mu-menu-item title="TEAL" value="teal" />
        </mu-menu>
    </mu-popover>
    <!-- <mu-icon-menu icon="brightness_medium" :value="theme" @change="changeTheme">
        <mu-menu-item title="LIGHT (DEFAULT)" value="light" />
        <mu-menu-item title="DARK" value="dark" />
        <mu-menu-item title="CARBON" value="carbon" />
        <mu-menu-item title="TEAL" value="teal" />
    </mu-icon-menu> -->
</div>

</template>

<script>

import light from '!raw-loader!muse-ui/dist/theme-default.css'
import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
export default {
    name: 'appbar',
    props: ['show'],
    data() {
        return {
            theme: 'light',
            themes: {
                light,
                dark,
                carbon,
                teal
            },
            value: '1',
            open: false,
            trigger: null
        }
    },
    mounted() {
        this.trigger = this.$refs.button.$el
    },
    components: {

    },
    methods: {
        changeTheme(theme) {
                this.theme = theme
                const styleEl = this.getThemeStyle()
                styleEl.innerHTML = this.themes[theme] || ''

            },
            getThemeStyle() {
                const themeId = 'muse-theme'
                let styleEl = document.getElementById(themeId)
                if (styleEl) return styleEl
                styleEl = document.createElement('style')
                styleEl.id = themeId
                console.log(styleEl);
                document.body.appendChild(styleEl)
                return styleEl
            }, toggle() {
                this.$emit('changeState', '参数')
            }, togglepop() {
                this.open = !this.open
            },
            handleClose(e) {
                this.open = false
            }
    }
}

</script>
