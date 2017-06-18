<template>
  <div class="sidebar">
    <mu-drawer left :open="show" >
        <mu-appbar title="MeAdmin" />
        <mu-list>
            <mu-list-item title="系统设置" />
            <mu-list-item title="栏目设置" />
            <mu-list-item title="媒体库" />
        </mu-list>
    </mu-drawer>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['show'],
  data(){
    return {
      open: true
    }
  },
  components: {

  },
  methods: {
    toggle() {
      this.$emit('changeState','参数')
    }
  }
}
</script>
