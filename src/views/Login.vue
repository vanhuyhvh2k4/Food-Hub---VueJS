<template>
  <main :class="$style.wrapper">
    <h1 :class="$style.title">Login</h1>
    <form :class="$style.form" @submit.prevent="submitForm">
      <Input 
        @input-enter="handleEmail" 
        title="E-mail" 
        type="email" 
        isRequired 
        placeholder="Your email" 
        autocomplete="email"
      />
      <Input 
        @input-enter="handlePassword" 
        title="Password" 
        type="password" 
        isRequired 
        placeholder="Your password" 
        autocomplete="current-password"
      />
      <router-link :class="$style.link" :to="routesConfig.forgot">Forgot password?</router-link>
      <Button type="submit" :class="$style.button" name="Sign In" />
    </form>
    <b v-if="isError" :class="$style.notification">Wrong email or password</b>
    <Loader v-if="isLoading" :key="isLoading" />
  </main>
</template>

<script>
  import Input from '@/components/Input/Input.vue';
  import Button from '@/components/Button/Button.vue';
  import Loader from '@/components/Loader/Loader.vue';
  import login from '@/composables/login.js';

  export default {
    name: "Login",
    name: 'Login',
    components: {
      Input,
      Button,
      Loader
    },
    mixins: [login],
  }
</script>

<style lang="scss" module>
  @import "./scss/Login.module.scss"
</style>