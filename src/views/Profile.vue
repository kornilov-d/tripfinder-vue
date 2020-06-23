<template>
    <div>
      <b-container>
        <b-row>
          <b-col cols="3">
            <b-list-group-item class="d-flex align-items-center av" >
              <b-avatar class="mr-3"></b-avatar>
              <span class="mr-auto">@kornilov</span>
            </b-list-group-item>
          </b-col>
          <b-col cols = 9>
            <b-card no-body id="topmarg">
              <b-tabs card >
                <b-tab title="Посетить в июле">
                  <b-card-group deck>
                    <b-card deck
                            img-src='https://api.mapbox.com/styles/v1/mapbox/light-v10/static/30.2401,59.9542,9.53,0/300x200@2x?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw'
                    >
                      <b-card-title
                        style="text-color: white">
                        <router-link :to="{name: 'Route', params: {id: 3}}" >
                          Только без топора<br>
                        </router-link>
                      </b-card-title>
                      <b-card-text>Хотите пережить "Преступление и наказание"? Попробовать понять Раскольникова, пройдя по его стопам? Мы, с нашим маршрутом, можем вам с этим помочь.</b-card-text>
                    </b-card>
                    <b-card deck
                            img-src='https://api.mapbox.com/styles/v1/mapbox/light-v10/static/30.2881,59.9303,11.13,0/300x200@2x?access_token=pk.eyJ1Ijoia29ybmlsb3ZkIiwiYSI6ImNrOTJuZG9hcjAxbTczbG8yNDhlZGZpOWEifQ.EMvlWY1YaawgAIHcY9n5Cw'
                    >
                      <b-card-title
                        style="text-color: white">
                        <router-link :to="{name: 'Route', params: {id: 4}}" >
                          Вся жизнь – театр!<br>
                        </router-link>
                      </b-card-title>
                      <b-card-text>А мы построили вам маршрут с самыми красивыми театрами города. Большинство из них стоят в городе уже сотню лет, а некоторые только начали свою деятельность. Возможно, вы даже найдете что-то себе по душе, что заставит вас купить билет на спектакль?</b-card-text>
                    </b-card>
                  </b-card-group>
                </b-tab>
                <b-tab v-for="i in tabs" :key="'dyn-tab-' + i" :title="'Коллекция ' + (i+1)">

                  <br>
                  <b-button size="sm" variant="danger" class="float-right" @click="closeTab(i)">
                    Удалить
                  </b-button>
                  <br>
                </b-tab>

                <!-- New Tab Button (Using tabs-end slot) -->
                <template v-slot:tabs-end>
                  <b-nav-item role="presentation" @click.prevent="newTab" href="#"><b>+</b></b-nav-item>
                </template>

                <!-- Render this if no tabs -->
                <template v-slot:empty>
                  <div class="text-center text-muted">
                    Нет созданных коллекций<br>
                    Для создания нажмите <b>+</b> выше.
                  </div>
                </template>
              </b-tabs>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
  import NavBar from '../components/NavBar'
  import RouteMap from '../components/RouteMap'
  import ProfileView from '../components/ProfileView'

  export default {
    name: 'Profile',
    data () {
      return {
        tabs: [],
        tabCounter: 0
      }
    },
    computed : {
      isLoggedIn (){ return this.$store.getters.isLoggedIn},
      user () {
        return this.$store.state.user;
      }
    },
    methods: {
        closeTab(x) {
          for (let i = 0; i < this.tabs.length; i++) {
            if (this.tabs[i] === x) {
              this.tabs.splice(i, 1)
            }
          }
        },
        newTab() {
          this.tabs.push(this.tabCounter++)
        }
    },

    components: {
      ProfileView,
      RouteMap,
    }
  }
</script>

<style scoped>
  #topmarg{
    margin-top: 2em;
  }

  .av{
    margin-top: 2em;
  }
</style>
