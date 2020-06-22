<template>
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
      <b-input-group description="Ищите по ключевым словам, названиям мест и т.д." v-model="searchQuery" @keyup.enter="submit">
        <b-form-input placeholder="Места, ключевые слова, т.д."/>
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

      <b-button block variant="primary"  type="submit">
        Подобрать маршрут
      </b-button>
      </b-collapse>
    </b-card>
  </div>
</template>

<script>
  import axios from 'axios'
  import { API_URL } from '../main'


  export default {
    name: 'Search',
    props: ['searchQuery'],
    data(){
      return{
        isHidden: false,
        types: null,
        selected: [],
        searchQuery: ''
      }
    },
    created ()  {
      axios.get(`${API_URL}/api/types`, {
      headers: {
      "Content-Type": "application/json"
      }}
      )
      .then( response => {
      this.types = response.data
      })


    },
    methods : {
      submit: function() {
        this.$emit("inputData", this.searchQuery);
        this.searchQuery = "";
      }
    }
  }
</script>

<style scoped>
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
</style>
