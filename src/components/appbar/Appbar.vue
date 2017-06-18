<style lang="scss">
.me_top {
    position: fixed;
    top: 0;
    left: 256px;
    width: calc(100% - 256px);
    transition: all 0.45s cubic-bezier(.23, 1, .32, 1);
    &.on {
        left: 0;
        width: 100%;
    }
}
</style>

<template lang="html">

<mu-appbar title="MeAdmin" class="me_top">
    <mu-icon-button icon="menu" label="toggle drawer" @click="toggle()" slot="left" />
    <mu-avatar src="../static/avatar1.jpg" slot="right" />
    <Toggletheme slot="right"></Toggletheme>
</mu-appbar>

</template>

<script>
import Toggletheme from './Toggletheme'

export default {
  name: 'appbar',
  props: ['show'],
  data() {
    return {}
  },
  components: {
    Toggletheme
  },
  methods: {
    toggle() {
      this.$emit('changeState', 'navtoggle')
    },
  }
}
</script>
