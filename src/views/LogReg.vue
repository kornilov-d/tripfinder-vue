<template>
  <div class = "log-reg">
    <b-container class = "log-view">
      <b-row align-v="center" align-h="center">
        <b-col cols="12" sm="12" md="6" lg="5" xl="4" align-self="center">
        <b-card no-body >
          <b-tabs
            align="center"
            card justified pills>
            <b-tab title="Вход" >
              <Login />
            </b-tab>
            <b-tab title="Регистрация">
              <Registration />
            </b-tab>
          </b-tabs>
        </b-card>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import Login from '../components/Login.vue'
import Registration from '../components/Registration'

export default {
  name: 'LogReg',
  components: {
    Registration,
    Login
  }
}
</script>

<style lang="scss" scoped >
  .log-view{
    margin-top: 6em;
    height: 100%;
  }

  template{
    background-image: url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.radissonhotels.com%2Fru-ru%2Fdestination%2Frussian-federation%2Fst-petersburg&psig=AOvVaw13kB2Ii0rbyJyV4xgUx2ru&ust=1592250172681000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKir1KKIguoCFQAAAAAdAAAAABAU");
  }
</style>
