<template>
  <div>
    <br>
    <b-card :title="routeinfo.route_name" text-variant="dark" >
      <p>
        {{routeinfo.route_desc}}
      </p>
      <hr>
      <b-list-group :key="index" v-for="(point, index) in routeinfo.points" role="tablist">
        <b-list-group-item  class="route-point" style="max-width: 500px;">
          <div class="point-name d-flex align-items-center" v-b-toggle="'accordion-'+index" role="tab">
            <b-avatar :text='index+1' class="point-pos" size="2em" variant="primary"/>
            <div class="mr-auto">
              <small>{{pointsinfo[index].obj_type.type_name}}</small>
              <h6>{{point.point_name}}<span><fa-icon icon="bookmark" /> </span></h6>
            </div>
          </div>
          <b-collapse :id="'accordion-'+index" role="tabpanel" class="add-info">
            <p>{{point.obj_desc}}</p><small><fa-icon icon="clock" /> {{point.time_visiting}} мин.</small>
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
        pointsinfo: null
      }
    },

    created: function () {

      this.id = this.$route.params.id

      axios.all([
          axios.get(`${API_URL}/api/routes/${this.id}/`, {
            headers: { 'Content-Type': 'application/json' }
          }),
          axios.get(`${API_URL}/api/points/`, {
            headers: { 'Content-Type': 'application/json' },
            params: {'route' : this.id}
          })
        ]
      ).then(axios.spread((first_resp, second_resp)=> {
        this.routeinfo = first_resp.data;
        this.pointsinfo = second_resp.data}))
    }
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
  .b-avatar{
    margin-right: 1em;
  }

  .add-info{
    padding-left: 3em;
  }

</style>
