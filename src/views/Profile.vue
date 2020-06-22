<template>
    <div>
      <ProfileView />
    </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import RouteMap from '../components/RouteMap'
  import ProfileView from '../components/ProfileView'

  export default {
    name: 'Profile',
    computed : {
      isLoggedIn (){ return this.$store.getters.isLoggedIn},
      user () {
        return this.$store.state.user;
      }
    },
    components: {
      ProfileView,
      NavBar,
      RouteMap,
    }
  }
</script>

<style scoped>

</style>
