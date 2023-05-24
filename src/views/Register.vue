<template>
  <main :class="$style.wrapper">
    <h1 :class="$style.title">Sign Up</h1>
    <form :class="$style.form" @submit.prevent="handleSubmitForm">
      <Input title="Full Name" isRequired placeholder="Your name" autocomplete="off" @input-enter="handleFullName" />
      <Input title="E-mail" type="email" isRequired placeholder="Your email" autocomplete="off"
        @input-enter="handleEmail" :isFailed="notification === 'Email already exists'" />
      <Input title="Password" type="password" isRequired placeholder="Your password" autocomplete="off"
        @input-enter="handlePassword" :minLength="6" />
      <Button type="submit" :class="$style.button" name="Register" />
    </form>
    <b :class="$style.notification">{{ notification }}</b>
    <Loader v-if="isLoading" :key="isLoading" />
  </main>
</template>

<script>
  import Input from '@/components/Input/Input.vue';
  import Button from '@/components/Button/Button.vue';
  import Loader from '@/components/Loader/Loader.vue';
  import register from '@/composables/register.js';

  export default {
    name: 'Register',
    components: {
      Input,
      Button,
      Loader
    },
    mixins: [register]
  }
</script>
<style lang="scss" module>
  @import "./scss/Register.module.scss"
</style>