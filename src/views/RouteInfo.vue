<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="12" md="5" lg="5" xl="4">
          <RouteDetails />
        </b-col>
        <b-col cols="12" sm="12" md="7" lg="7" xl="8">
          <RouteMap />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import RouteMap from '../components/RouteMap.vue'
  import NavBar from '../components/NavBar.vue'
  import RouteDetails from '../components/RouteDetails.vue'
  import Footer from '../components/Footer'

  export default {
    name: 'RouteInfo',
    components: {
      RouteDetails,
      RouteMap,

    }
  }
</script>

<style scoped>

</style>
