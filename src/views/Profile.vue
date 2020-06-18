<template>
    <div>
      <NavBar />
      <RouteMap />
    </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import RouteMap from '../components/RouteMap'

  export default {
    name: 'Profile',
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      user () {
        return this.$store.state.user;
      }
    },
    components: {
      NavBar,
      RouteMap,
    }
  }
</script>

<style scoped>

</style>
