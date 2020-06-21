<template>
  <div>
    <br>
    <h1>{{currentUser.username}}</h1>
    <h1>{{user.email}}</h1>
  </div>

</template>

<script>
  export default {
    name: 'ProfileView',
    computed : {
      isLoggedIn : function(){ 
        return this.$store.getters.isLoggedIn
        },
      currentUser () {
        return this.$store.state.auth.user;
      }
    }
  }
</script>

<style scoped>

</style>
