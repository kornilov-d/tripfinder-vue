<template>
  <b-container>
  <div class = "reg-window">
    <b-form @submit.prevent="register">
      <b-input-group  >
        <b-input id="input-email" placeholder="E-mail" v-model="email" required autofocus></b-input>
      </b-input-group>
      <br>
      <b-input-group prepend="@" >
        <b-input id="input-username" placeholder="Логин" v-model="username" required></b-input>
      </b-input-group>
      <br>
      <b-input-group type="password" prepend="**">
        <b-input id="input-password" type="password" placeholder="Пароль" v-model="password" required></b-input>
      </b-input-group>
      <br>
      <b-input-group type="password" prepend="**">
        <b-input id="input-password" type="password" placeholder="Подтверждение пароля" v-model="password_confirmation"></b-input>
      </b-input-group>
      <br>
      <b-button block variant="primary" type="submit" >
        Создать аккаунт
      </b-button>
      <br>

    </b-form>
  </div>
  </b-container>
</template>

<script>

  import SIGNUP_URL from '../store/index'
  import axios from 'axios'
  import { API_URL } from '../main'
  export default {
    name: 'Registration',
    data(){
      return {
        username : "",
        email : "",
        password : "",
        password_confirmation : "",
        is_admin : false,
      }
    },
    methods: {
      register: function () {
        let data = {
          email: this.email,
          username: this.username,
          password: this.password,
          is_admin: this.is_admin
        }

        this.$store.dispatch('register', data)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
      },


    }
  }
</script>

<style scoped>

</style>
