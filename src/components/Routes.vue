<template>
  <div class="mt-3">
    <b-card-group columns >
      <b-card v-for="tourroute in tourroutes"

      img-src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-122.4241,37.78,14.25,0/600x200?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw">
        <b-card-title style="text-color: white">
          <router-link :to="{name: 'route', params: {slug: tourroute.id}}" >
            {{tourroute.route_name}}
          </router-link>
        </b-card-title>
        <b-card-text>{{tourroute.route_desc}}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>


  import axios from 'axios'
  import { API_URL, MAPBOX_URL } from '../main'

  export default {
    name: 'Routes',
    props: {
      routeid : {
        type: String,
        default: false
      }
    },
    data () {
      return {
        tourroutes: null,
        accessToken: "sk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrYjUzbXNhNTBsd2Eycm82YzEwZ3VtcHQifQ.APV_H2lhZp-6L4e-9hw5XA", // your access token. Needed if you using Mapbox maps
        mapStyle: "https://api.mapbox.com/styles/v1/kornilovd/ckb3rp2vo0uli1ipf98kzhkaf.html?fresh=true&title=copy&access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw",
      }
    },

    mounted () {

      axios.get(`http://127.0.0.1:8000/api/routes`, {
        headers: {
          "Content-Type": "application/json"
        }}
      )
      .then( response => {
        this.tourroutes = response.data
      })
    },
  }
</script>

<style scoped>

</style>
