<template>
  <b-container>
    <br>

        <div class = "login-window">
          <b-form @submit.prevent="setLogin">
            <b-input-group prepend="@" >
              <b-input id="input-username" placeholder="Логин" v-model="username"></b-input>
            </b-input-group>
            <br>
            <b-input-group type="password" prepend="**">
              <b-input id="input-password" type="password" placeholder="Пароль" v-model="password"></b-input>
            </b-input-group>
            <br>
            <b-button block variant="primary" @click.prevent="authenticate" type="submit" >
              Войти
            </b-button>
            <br>

          </b-form>
        </div>

  </b-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    setLogin(){
      this.$store.dispatch('retrieveToken',{
        username: this.username,
        password: this.password
      })
    }
  }
}

</script>

<style>
</style>
