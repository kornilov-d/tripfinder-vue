<template>
    <div >
        <b-navbar type="light" variant="white" fixed="top">
          <b-navbar-brand
            router-link to = "/">
              <img class="navbar-logo" src="../assets/logo_b.png">
          </b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-button
              v-if="!isLoggedIn"
              right pill variant="primary"
              router-link to = "/login">
                Войти
              <span><fa-icon icon="sign-in-alt" /></span>
            </b-button>
            <div
              class = 'user-info'
              v-if = "isLoggedIn" >
              <router-link to="/profile">
                <b-avatar variant="primary" class="mr-3"></b-avatar>
              </router-link>
              <b-button
                v-if="isLoggedIn"
                right pill variant="primary"
                @click="logout">
                <span><fa-icon icon="sign-out-alt" /></span>

              </b-button>
            </div>

          </b-navbar-nav>
        </b-navbar>
      <br><br>

    </div>
</template>

<script>

export default {
  name: 'NavBar',
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
    user () {
      return this.$store.state.user;
    }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/')
        })
    }
  },
}
</script>

<style scoped lang = "scss">


  .navbar-logo{
    max-height: 1.8em;
  }
  .userview{
    border-style: none;
    line-height: 1em;
    font-weight: 600;
  }
</style>
