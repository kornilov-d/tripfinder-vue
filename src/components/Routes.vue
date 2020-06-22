<template>
  <div class="mt-3">
    <b-card-group columns >
      <b-card 
      v-for="tourroute in tourroutes" 
      img-src="https://api.mapbox.com/styles/v1/kornilovd/ckblkalnx0ivc1iqrnv52cl2u/static/30.3042,59.9558,12.95,0/300x150@2x?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw">
        <b-card-title style="text-color: white">
          <router-link :to="{name: 'Route', params: {id: tourroute.id}}" >
            {{tourroute.route_name}}<br>
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
        search: '',
        accessToken: "pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw", 
        mapStyle: "/kornilovd/ckblkalnx0ivc1iqrnv52cl2u",
      }
    },

    mounted () {

      axios.get(`${API_URL}/api/routes`, {
        headers: {
          "Content-Type": "application/json"
        }}
      )
      .then( response => {
        this.tourroutes = response.data
      })
    },

    computed: {
      tourroutesFiltered() {
      return this.tourroutes.filter(post => {
        return post.route_name.toLowerCase().includes(this.route_desc.toLowerCase())
      })
    }
    }
  }
</script>

<style scoped>

</style>
