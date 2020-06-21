<template>
  <div class="mgl-map-wrapper">
    <MglMap
      id="map"
      container = "map"
      :zoom="13"
      :center="routeinfo.waypoints[1].location"
      :map-style.sync="mapStyle"
      :access-token="accessToken">
        <MglNavigationControl position="top-right"/>
        <!-- <MglGeojsonLayer :source="routeinfo.routes" :layer="geojsonlayer"/> -->
        <MglMarker v-for="waypoint in routeinfo.waypoints" :coordinates="waypoint.location" :color="424874"/>
    </MglMap>
  </div>
</template>

<script>
  import {MglMap, MglGeojsonLayer, MglMarker, MglAttributionControl, MglNavigationControl, MglGeolocateControl} from 'vue-mapbox'
  import axios from 'axios'
  import { API_URL } from '../main'

  export default {
    name: 'RouteMap',
    components: {
      MglMap,
      MglGeolocateControl,
      MglNavigationControl,
      MglGeojsonLayer,
      MglMarker
    },
    data () {
      return {
        accessToken: 'pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw',
        mapStyle: 'mapbox://styles/kornilovd/ckblkalnx0ivc1iqrnv52cl2u',
        routeinfo: null,


      }
    },
    mounted () {
      axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/30.28933%2C59.929787%3B30.306233%2C59.934137%3B30.329537%2C59.937509?alternatives=true&geometries=geojson&steps=true&language=ru&access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw`, {
        headers: {
          "Content-Type": "application/json"
        }}
      )
        .then( response => {
          this.routeinfo = response.data
        })

    },
    created() {
            this.id = this.$route.params.id;
        },
  }
</script>

<style>
  #map{
    margin-top: 0.8em;
    height: 87vh;
    width: 100%;
    border-radius: 8px;
  }
  .mgl-map-wrapper {
    height: 100%;
    position: relative;
    width: 100%;
  }
  .mgl-map-wrapper .mapboxgl-map {
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
</style>
