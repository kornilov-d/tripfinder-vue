<template>
  <div class="mt-3">
    <b-card-group columns >
      <b-card
      v-for="item in tourroutes" :item = "item" >
<!--      :img-src="'https://api.mapbox.com/styles/v1'+mapStyle+'/static/'+tourroute.points[0].longitude+','+tourroute.points[0].latitude+',12.95,0/300x150@2x?access_token='+accessToken"-->

        <b-card-title style="text-color: white">
          <router-link :to="{name: 'Route', params: {id: item.id}}" >
            {{item.route_name}}<br>
          </router-link>
        </b-card-title>
        <b-card-text>{{item.route_desc}}</b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>


  import axios from 'axios'
  import { API_URL, MAPBOX_URL } from '../main'
  import {searchQuery} from '../components/Search.vue'

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
        return item.route_name.toLowerCase().includes(this.searchQuery.toLowerCase())
      })
    }
    }
  }
</script>

<style scoped>

</style>
