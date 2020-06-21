<template>
  <div>
    <br>
    <b-card :title="route.route_name">
      <b-card-sub-title>
        {{route.route_desc}}
      </b-card-sub-title>
      <hr>

    </b-card>
    {{route_points.point}}
  </div>
</template>

<script>
import axios from 'axios'
import { API_URL } from '../main'

  export default {
    name: 'RouteDetails',
    data () {
      return{
      id: 0,
      route: [],
      route_points: null,
      }
    },

    created() {

      this.id = this.$route.params.id;
      axios.get(`${API_URL}/api/routes/${this.id}/`, {
      headers: {
      "Content-Type": "application/json"
      }}
      )
      .then( response => {
      this.route= response.data
      })

      axios.get(`${API_URL}/api/route-items/?belongs=${this.id}/`, {
      headers: {
      "Content-Type": "application/json"
      }}
      )
      .then( response => {
      this.route_points= response.data
      })

      
    },

  }
</script>

<style scoped>

</style>
