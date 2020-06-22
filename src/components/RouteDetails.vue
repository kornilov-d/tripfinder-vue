<template>
  <div>
    <br>
    <b-card :title="routeinfo.route_name" text-variant="dark" >
      <p>
        {{routeinfo.route_desc}}
      </p>
      <hr>
      <b-list-group :key="index" v-for="(point, index) in routeinfo.points" role="tablist">
        <b-list-group-item  class="route-point" >
          <h6 class="point-name" block v-b-toggle="'accordion-'+index" role="tab">{{point.point_name}}</h6>
          <b-collapse :id="'accordion-'+index" role="tabpanel">
            <span></span>{{point.time_visiting}} мин.
          </b-collapse>

        </b-list-group-item>
      </b-list-group>
    </b-card>
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
      routeinfo: null,
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
      this.routeinfo= response.data
      })
    },

  }
</script>

<style scoped lang="scss">

  @import '../assets/scss/custom-vars.scss';

  .route-point{
    border: none;
    padding-left: 0;
    padding-right: 0;
  }

  .point-name{
    color: $primary;
  }
  .point-name:hover{
    color: $info;
  }
</style>
