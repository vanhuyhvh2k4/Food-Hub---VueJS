<template>
  <main :class="$style.wrapper">
    <h1 :class="$style.title">Login</h1>
    <form :class="$style.form" @submit.prevent="submitForm">
      <Input title="E-mail" type="email" isRequired placeholder="Your email" autocomplete="email" @input-change="handleEmail"/>
      <Input title="Password" type="password" isRequired placeholder="Your password" autocomplete="current-password" @input-change="handlePassword"/>
      <router-link :class="$style.link" to="/">Forgot password?</router-link>
      <Button :class="$style.button" name="Sign In"/>
    </form>
    <b v-if="isError" :class="$style.notification">Wrong email or password</b>
  </main>
</template>

<script>
import {useRouter} from 'vue-router'
import Cookies from 'js-cookie';
import axios from 'axios';

import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import router from '@/router';
import routesConfig from '@/config/routes.js';

export default {
  name: 'Login',
  components: {
    Input,
    Button
  },
  setup () {
    const router = useRouter()
    return {
      router
    }
  },
  data() {
    let email;
    let password;
    let isError = false;
    return {
      email,
      password,
      isError
    }
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:3000/v1/api/auth/login', {email: this.email, password: this.password})
        .then((response) => { 
          if (response.status === 200) {
            Cookies.set('accessToken', response.data.accessToken);
            sessionStorage.setItem('refreshToken', response.data.refreshToken);
            router.push(routesConfig.home);
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error.message);
            this.isError = true;
          }
        });
    },
    handleEmail (value) {
      this.email = value;
      this.isError = false;
    },
    handlePassword (value) {
      this.password = value;
      this.isError = false;
    }
  }
}
</script>

<style lang="scss" module>
  @import "./scss/Login.module.scss"
</style>