<template>
  <div>
    <!--注意这里使用的标签-->
    <nav-menu></nav-menu>
    <router-view/>
  </div>
</template>

<script>
  //导入 common里的 NavMenu
  import NavMenu from './common/NavMenu'

  export default {
    name: 'Home',
    components: {NavMenu}
  }
</script>

<style scoped>

</style>
