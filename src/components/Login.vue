<template>
  <b-container>
    <br>
        <div class = "login-window">
          <b-form @submit.prevent="login">
            <b-input-group prepend="@" >
              <b-input id="input-username" required placeholder="Логин" v-model="username"></b-input>
            </b-input-group>
            <br>
            <b-input-group type="password" prepend="**">
              <b-input id="input-password" required type="password" placeholder="Пароль" v-model="password"></b-input>
            </b-input-group>
            <br>
            <b-button block variant="primary" type="submit" >
              Войти
            </b-button>
            <br>
          </b-form>
        </div>

  </b-container>
</template>

<script>



export default {
  name: 'Login',
  data () {
    return {
        username: '',
        password: ''
    }
  },

  methods: {
    login: function () {
      let username = this.username
      let password = this.password
      this.$store.dispatch('login', { username, password })
          .then(() => this.$router.push('/profile'))
          .catch(err => console.log(err))
    }
  }
}

</script>

<style>
</style>
