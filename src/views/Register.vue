<template>
  <main :class="$style.wrapper">
    <h1 :class="$style.title">Sign Up</h1>
    <form :class="$style.form" @submit.prevent="handleSubmitForm">
      <Input title="Full Name" isRequired placeholder="Your name" autocomplete="off" @input-change="handleFullName" />
      <Input title="E-mail" type="email" isRequired placeholder="Your email" autocomplete="off"
        @input-change="handleEmail" :isFailed="notification === 'Email already exists'" />
      <Input title="Password" type="password" isRequired placeholder="Your password" autocomplete="off"
        @input-change="handlePassword" />
      <Button :class="$style.button" name="Register" />
    </form>
    <b :class="$style.notification">{{ notification }}</b>
  </main>
</template>

<script>
  import registerComposable from '@/composables/register.js';

  export default {
    name: 'Register',
    mixins: [registerComposable]
  }
</script>
<style lang="scss" module>
  @import "./scss/Register.module.scss"
</style>