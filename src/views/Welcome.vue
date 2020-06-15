<template>
    <div class = "welcome">
      <NavBar />
      <br>
        <b-container fluid>
          <b-row>
            <b-col sm="12" md="6" lg="4" xl="3">
              <Search />
            </b-col>
            <b-col sm="12" md="6" lg="8" xl="9">
              <Routes />
            </b-col>
          </b-row>
        </b-container>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Search from '../components/Search.vue'
import Routes from '../components/Routes.vue'

export default {
  name: 'Welcome',
  components: {
    NavBar,
    Search,
    Routes,
  }
}

</script>

<style scoped lang="scss">
  body,html{
    background-color: black;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
