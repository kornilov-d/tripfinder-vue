<template>
  <b-container>
    <br>
        <div class = "login-window">
          <b-form @submit.prevent="login">
            <b-input-group prepend="@" >
              <b-form-input id="input-username" required placeholder="Логин" v-model="username"  :invalid-feedback="invalidFeedbackUser"
                       :valid-feedback="validFeedbackUser"
                       :state="stateUser"></b-form-input>

            </b-input-group>
            <br>
            <b-input-group type="password" prepend="**">
              <b-input id="input-password" required type="password" placeholder="Пароль" v-model="password"></b-input>
            </b-input-group>
            <br>
            <b-button block variant="primary" type="submit" @click="this.$forceUpdate">
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
  computed : {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn;  },
    user () {
      return this.$store.state.user;

    },

    stateUser() {
      return this.username.length >= 4 ? true : false
    },
    invalidFeedbackUser() {
      if (this.username.length > 4) {
        return ''
      } else if (this.username.length > 0) {
        return 'Введите действительное имя пользователя'
      } else {
        return 'Введите имя пользователя'
      }
    },
    validFeedbackUser() {
      return this.state === true ? 'Отлично!' : ''
    }
  },
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
          .then(() => {this.$router.push('Welcome')})
          .catch(err => console.log(err))
    }

  }
}

</script>

<style>
</style>
