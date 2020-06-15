<template>
  <div>
    <NavBar />
    <RouteMap />
    <b-container>
      <b-row>
        <b-col cols="4">
          <RouteDetails />
        </b-col>
        <b-col cols="8">

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import RouteMap from '../components/RouteMap.vue'
  import NavBar from '../components/NavBar.vue'
  import RouteDetails from '../components/RouteDetails.vue'

  export default {
    name: 'RouteInfo',
    components: {
      NavBar,
      RouteDetails,
      RouteMap,
    }
  }
</script>

<style scoped>

</style>
