<template>
  <b-container>
  <div class = "reg-window">
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Проверьте правильность ввёденных данных.</b-alert>
    <b-form @submit.prevent="register">
      <b-input-group  >
        <b-input id="new-email" placeholder="E-mail" v-model="email" :type="isEmailValid" required autofocus></b-input>
      </b-input-group>
      <br>
      <b-input-group prepend="@" >
        <b-input id="new-username" placeholder="Логин" v-model="username" required></b-input>
      </b-input-group>
      <br>
      <b-input-group type="password" prepend="**">
        <b-input id="new-password" type="password" placeholder="Пароль" v-model="password" required></b-input>
        <b-form-text id="pass-help">Пароль должен содержать буквы и цифры. Длина пароля: 8+ символов.</b-form-text>
      </b-input-group>
      <br>

      <br>
      <b-button block variant="primary" type="submit">
        Создать аккаунт
      </b-button>
      <br>

    </b-form>
  </div>
  </b-container>
</template>

<script>

  export default {
    name: 'Registration',
    data(){
      return {
        username : "",
        email : "",
        password : "",
        is_admin : false,
        showDismissibleAlert: false,
        reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      }
    },
    computed : {
      stateUser() {
        return this.username.length >= 6 ? true : false
      },
      invalidFeedbackUser() {
        if (this.username.length > 6) {
          return ''
        } else if (this.username.length > 0) {
          return 'Enter at least 4 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedbackUser() {
        return this.state === true ? 'Thank you' : ''
      }
    },

    methods: {
      isEmailValid: function() {
        return (this.email == "")? "" : (this.reg.test(this.email)) ? 'has-success' : 'has-error';
      },

      register: function () {
        let data = {
          'email': this.email,
          'username': this.username,
          'password': this.password,

        }

        this.$store.dispatch('register', data)
          .then(() => this.$router.push('/'))
          .catch(err => this.showDismissibleAlert=true
          )

        event.target.reset();
      },


    }
  }
</script>

<style scoped>

</style>
