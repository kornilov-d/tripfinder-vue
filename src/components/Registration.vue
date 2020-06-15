<template>
  <b-container>
  <div class = "reg-window">
    <b-form @submit.prevent="setLogin">
      <b-input-group  >
        <b-input id="input-username" placeholder="Имя" v-model="first_name"></b-input>
      </b-input-group>
      <br>
      <b-input-group  >
        <b-input id="input-username" placeholder="Фамилия" v-model="last_name"></b-input>
      </b-input-group>
      <br>
      <b-input-group prepend="@" >
        <b-input id="input-username" placeholder="Логин" v-model="username"></b-input>
      </b-input-group>
      <br>
      <b-input-group type="password" prepend="**">
        <b-input id="input-password" type="password" placeholder="Пароль" v-model="password"></b-input>
      </b-input-group>
      <br>
      <b-button block variant="primary" @click.prevent="createUser" type="submit" >
        Создать аккаунт
      </b-button>
      <br>

    </b-form>
  </div>
  </b-container>
</template>

<script>
  export default {
    name: 'Registration'
  }
</script>

<style scoped>

</style>
