<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="4"></b-col>
        <b-col cols="8"></b-col>
      </b-row>
    </b-container>
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
