<template>
  <div>
    <h1>{{user.username}}</h1>
  </div>

</template>

<script>
  export default {
    name: 'ProfileView',
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      user () {
        return this.$store.state.user;
      }
    }
  }
</script>

<style scoped>

</style>
