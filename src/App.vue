<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  export default {
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
    }
  }

</script>

<style lang="scss">
  @import 'assets/scss/custom-vars';
  body{
    background-color: #f5f5f5;
  }
</style>
