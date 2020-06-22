<template>
  <div class="mgl-map-wrapper">
    <MglMap
      id="map"
      container = "map"
      :zoom="13"
      :center="[points[0].longitude,points[0].latitude]"
      :map-style.sync="mapStyle"
      :access-token="accessToken">
      <MglNavigationControl position="top-right"/>
      <MglMarker v-for="point in points" :coordinates='[point.longitude, point.latitude]' :color="424874"/>
    </MglMap>
  </div>
</template>

<script>
  import axios from 'axios'
  import { API_URL } from '../main'
  import mapboxgl, { Marker } from 'mapbox-gl'
  import {MglMap, MglGeojsonLayer, MglMarker, MglAttributionControl, MglNavigationControl, MglGeolocateControl} from 'vue-mapbox'
  import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
  import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';

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
        mapboxDir: null,
        points: [],
      }
    },
    created () {
      this.id = this.$route.params.id
      axios.get(`${API_URL}/api/points/`, {
        headers: { 'Content-Type': 'application/json' },
        params: { 'route': this.id }
      })
        .then( response => {
          this.points = response.data
        })
    },
    mounted () {
        this.createMap()
        this.points.map((map) =>{
        const LngLat = [points.longitude, points.latitude]
        new mapboxgl.Marker()
          .setLngLat(LngLat)
          .addTo(map)
      })
    },
    methods: {

      createMap: function () {
        mapboxgl.accessToken = this.accessToken
        // init the map
        this.map = new mapboxgl.Map({
          container: 'map',

          style: this.mapStyle,
          country_label: 'ru',
          minzoom: 1.3,
          center: [30.4206030, 59.9943420],
          zoom: 10,
        })


        map.addControl(new MapboxDirections({
          accessToken: this.accessToken,
          language: 'ru',
          interactive: false,
          unit: 'metric',
          steps: true,
          geocoder: {
            language: 'ru'
          },
        }))
      },
    }


  }
</script>

<style>
  #map{
    margin-top: 0em;
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
    height: 80vh;
    left: 0;
    position: absolute;
    top: 1.9em;
    width: 100%;
  }
</style>
