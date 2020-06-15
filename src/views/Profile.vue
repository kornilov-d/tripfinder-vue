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
    components: {
      NavBar,
      RouteMap,
    }
  }
</script>

<style scoped>

</style>
