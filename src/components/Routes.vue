<template>
  <div class="mt-3">
    <b-card-group columns >
      <b-card
        title="Клёвый маршрут"
        img-src="https://api.mapbox.com/styles/v1/kornilovd/ckbh6y4k008bo1iqsx696iwxw/static/30.2833,59.9391,13.13,0/300x150@2x?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw">
        <b-card-text
          router-link to = "/routeinfo">
          Описание первого маршрута
        </b-card-text>
      </b-card>
      {{tourroutes}}
      <b-card title="Понтовые места"
      img-src="https://api.mapbox.com/styles/v1/kornilovd/ckbh6y4k008bo1iqsx696iwxw/static/30.2886,59.9511,13.13,0/300x150@2x?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw">
        <b-card-text>
          Еще один маршрут
        </b-card-text>
      </b-card>
      <b-card v-for="tourroute in tourroutes">
        <b-card-title>
          {{tourroute.route_name}}
        </b-card-title>
        <b-card-text>
          {{tourroute.route_desc}}
        </b-card-text>
      </b-card>

      </b-card-group>
      <br>


  </div>
</template>

<script>


  import axios from 'axios'

  export default {
    name: 'Routes',
    data () {
      return {
        tourroutes: null,
        accessToken: "sk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrYjUzbXNhNTBsd2Eycm82YzEwZ3VtcHQifQ.APV_H2lhZp-6L4e-9hw5XA", // your access token. Needed if you using Mapbox maps
        mapStyle: "https://api.mapbox.com/styles/v1/kornilovd/ckb3rp2vo0uli1ipf98kzhkaf.html?fresh=true&title=copy&access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw",
      }
    },

    mounted () {

      axios.get('http://tripfinder-api.herokuapp.com/api/routes/', {
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
