<template>
    <div class = "welcome">
      <br>
        <b-container fluid>
          <b-row>
            <b-col sm="12" md="12" lg="3" xl="3">
              <div class="search-bar">
                <b-card bg-variant="light">
                  <b-card-title v-b-toggle.collapse-query >
                    Поиск
                    <span>
          <fa-icon icon="chevron-up" class="aligned-to-right"></fa-icon>
        </span>
                  </b-card-title>
                  <b-collapse id="collapse-query" visible class="mt-2">
                    <hr>
                    <b-input-group description="Ищите по ключевым словам, названиям мест и т.д." v-model="searchString" >
                      <b-form-input placeholder="Места, ключевые слова, т.д." v-model="searchString"/>
                    </b-input-group>
                    <br>
                    <b-form-group label="Посещаемые места">
                      <b-form-checkbox-group
                        v-model="selected"
                        :options="types"
                        class="mb-3"
                        value-field="type_name"
                        text-field="type_name"
                      ></b-form-checkbox-group>
                    </b-form-group>

                    <label style="margin-right: 1em"> Количество мест </label>
                    <b-form inline >
                      <b-input-group prepend="от " size="sm" id="range-selector">
                        <b-input id="inline-form-input-username" type="number"></b-input>
                      </b-input-group>
                      <b-input-group prepend="до " size="sm" id="range-selector">
                        <b-input id="inline-form-input-username" type="number" ></b-input>
                      </b-input-group>
                    </b-form>
                    <br>

                  </b-collapse>
                </b-card>
              </div>
            </b-col>
            <b-col sm="12" md="12" lg="9" xl="9">
              <div class="mt-3">
                <h3 v-if="filteredData.length===0">
                  По вашему запросу ничего не найдено.
                </h3>
                <b-card-group columns >
                  <b-card
                    v-if="filteredData"
                    v-for="item in filteredData" :item = "item" >
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
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Search from '../components/Search.vue'
import Routes from '../components/Routes.vue'
import Footer from '../components/Footer'
import axios from 'axios'
import { API_URL } from '../main'

export default {
  name: 'Welcome',
  components: {
    Search,
    Routes,
  },
  data () {
    return{
      searchString: '',
      tourroutes: null,
      types: null,
    }
  },
  computed : {
    filteredData: function () {
      var search_array = this.tourroutes,
        searchString = this.searchString;

      if(!searchString){
        return search_array;
      }

      searchString = searchString.trim().toLowerCase();

      search_array = search_array.filter(item => {
        if((item.route_desc.toLowerCase().indexOf(searchString) || item.route_name.toLowerCase().indexOf(searchString)) !== -1){
          return item;
        }
      })

      // Return an array with the filtered data.
      return search_array;
    }
  },
  created () {
    axios.all([
        axios.get(`${API_URL}/api/routes/`, {
          headers: { 'Content-Type': 'application/json' }
        }),
        axios.get(`${API_URL}/api/types/`, {
          headers: { 'Content-Type': 'application/json' },
          params: {'route' : this.id}
        })
      ]
    ).then(axios.spread((first_resp, second_resp)=> {
      this.tourroutes = first_resp.data;
      this.types = second_resp.data}))
  }

}

</script>

<style scoped lang="scss">
  body,html{
    .search-bar{
      margin-top: 1em;
    }

    .aligned-to-right{
      float: right;
    }

    #range-selector{
      width: 7em;
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
    background-color: black;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
