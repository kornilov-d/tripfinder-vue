<template>
  <div>
    <br>
    <h3>{{route.route_name}}</h3>
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
    },

  }
</script>

<style scoped>

</style>
