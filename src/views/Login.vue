<template>
  <main :class="$style.wrapper">
    <h1 :class="$style.title">Login</h1>
    <form :class="$style.form" @submit.prevent="submitForm">
      <Input title="E-mail" type="email" isRequired placeholder="Your email" autocomplete="email"
        @input-enter="handleEmail" />
      <Input title="Password" type="password" isRequired placeholder="Your password" autocomplete="current-password"
        @input-enter="handlePassword" />
      <router-link :class="$style.link" to="/">Forgot password?</router-link>
      <Button type="submit" :class="$style.button" name="Sign In" />
    </form>
    <b v-if="isError" :class="$style.notification">Wrong email or password</b>
  </main>
</template>

<script>
  import loginCompsable from '@/composables/login.js';

  export default {
    name: "Login",
    mixins: [loginCompsable],
  }
</script>

<style lang="scss" module>
  @import "./scss/Login.module.scss"
</style>