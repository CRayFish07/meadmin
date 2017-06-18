<style lang="scss">
  .me_top{ position: fixed; top: 0; left: 256px; width: calc(100% - 256px); transition: all .45s cubic-bezier(.23,1,.32,1);
    &.on{ left: 0; width: 100%;}
  }
</style>

<template>

<div>
    <mu-drawer left :open="open" @close="toggle()">
        <mu-appbar title="Muse UI" />
        <mu-list>
            <mu-list-item title="系统设置" />
            <mu-list-item title="栏目设置" />
            <mu-list-item title="媒体库" />
        </mu-list>
    </mu-drawer>
    <mu-appbar title="MeAdmin" class="me_top" :class="toggleClass">
        <mu-icon-button icon="menu" label="toggle drawer" @click="toggle()" slot="left" />
        <!-- <mu-avatar src="./assets/logo.png" slot="rightAvatar" /> -->
        <mu-avatar src="../static/avatar1.jpg" slot="right"/>
        <mu-raised-button label="点这里" ref="button" @click="togglepop"/>
        <mu-popover :trigger="trigger" :open="openpop" @close="handleClose">
          <mu-menu>
            <mu-menu-item title="LIGHT (DEFAULT)" value="light" />
            <mu-menu-item title="DARK" value="dark" />
            <mu-menu-item title="CARBON" value="carbon" />
            <mu-menu-item title="TEAL" value="teal" />
          </mu-menu>
        </mu-popover>
        <mu-icon-menu icon="brightness_medium" slot="right" :value="theme" @change="changeTheme">
            <mu-menu-item title="LIGHT (DEFAULT)" value="light" />
            <mu-menu-item title="DARK" value="dark" />
            <mu-menu-item title="CARBON" value="carbon" />
            <mu-menu-item title="TEAL" value="teal" />
        </mu-icon-menu>
    </mu-appbar>

</div>

</template>

<script>

import light from '!raw-loader!muse-ui/dist/theme-default.css'
import dark from '!raw-loader!muse-ui/dist/theme-dark.css'
import carbon from '!raw-loader!muse-ui/dist/theme-carbon.css'
import teal from '!raw-loader!muse-ui/dist/theme-teal.css'
export default {
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
                open: true,
                openpop: false,
                toggleClass:'',
                trigger: null,
                img:'../assets/avatar1.jpg'
            }
        },
        mounted () {
          this.trigger = this.$refs.button.$el
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
                },
                handleChange(value) {
                    this.value = value
                },
                toggle() {
                    this.open = !this.open
                    if(this.open){
                      this.toggleClass='';
                    }else{
                      this.toggleClass='on';
                    }
                },
                togglepop(){
                  this.openpop = !this.openpop
                }
        }
}

</script>
