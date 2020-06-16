<template>
    <div >
        <b-navbar type="light" variant="white" fixed>
          <b-navbar-brand
            router-link to = "/">
              <img class="navbar-logo" src="../assets/logo_b.png">
          </b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-button
              right pill variant="primary"
              router-link to = "/login">
                Войти
            </b-button>
            <div
              class = 'user-info'
              v-if = isAuthenticated>
              <b-list-group-item class="d-flex align-items-center userview" router-link to = "/profile">
                <b-avatar variant="primary" text="ДК" class="mr-3"></b-avatar>
              </b-list-group-item>
            </div>

          </b-navbar-nav>
        </b-navbar>

    </div>
</template>

<script>
import $isAuthenticated from '@/store/index.js'
export default {
  name: 'NavBar'
}
</script>

<style scoped lang = "scss">
  .navbar-logo{
    max-height: 1.8em;
  }
  .userview{
    border-style: none;
    line-height: 1.4em;
    font-weight: 600;
  }
</style>
