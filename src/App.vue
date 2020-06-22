<template>
  <div id="app">
    <NavBar :key="isLoggedIn"/>
    <router-view/>
  </div>
</template>

<script>

  import NavBar from './components/NavBar'
  import Footer from './components/Footer'

  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    },
    components : {
      NavBar
    }
  }

</script>

<style lang="scss">
  @import 'assets/scss/custom-vars';

  body{
    background-color: #f5f5f5;
  }
</style>
