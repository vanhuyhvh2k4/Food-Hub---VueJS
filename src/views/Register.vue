<template>
    <main :class="$style.wrapper">
      <h1 :class="$style.title">Sign Up</h1>
      <form :class="$style.form" @submit.prevent="handleSubmitForm">
        <Input title="Full Name" isRequired placeholder="Your name" autocomplete="off" @input-change="handleFullName"/>
        <Input title="E-mail" type="email" isRequired placeholder="Your email" autocomplete="off" @input-change="handleEmail"/>
        <Input title="Password" type="password" isRequired placeholder="Your password" autocomplete="off" @input-change="handlePassword"/>
        <Button :class="$style.button" name="Register"/>
      </form>
      <b :class="$style.notification">{{ notification }}</b>
    </main>
  </template>
  
  <script>
    import {useRouter} from 'vue-router'
    import axios from 'axios';
    import Input from '@/components/Input/Input.vue';
    import Button from '@/components/Button/Button.vue';
    import routesConfig from '@/config/routes';
    
    export default {
      name: 'Register',
      components: {
        Input,
        Button
      },
      setup () {
        return {

        }
      },
      data () {
        let fullName = "";
        let email = "";
        let password = "";
        let notification = "";
        const router = useRouter();
        return {
          fullName,
          email,
          password,
          notification,
          router,
        }
      },
      methods: {
        handleFullName (value) {
          this.fullName = value;
          this.notification = "";
        },
        handleEmail (value) {
          this.email = value;
          this.notification = "";
        },
        handlePassword (value) {
          this.password = value;
          this.notification = "";
        },
        handleSubmitForm () {
          axios.post('http://localhost:3000/v1/api/auth/register', {
            fullName: this.fullName,
            email: this.email,
            password: this.password,
          })
            .then((response) => {
              this.notification = response.data.message;
              setTimeout(() => {
                this.router.push(routesConfig.login)
              }, 1000)
            })
            .catch((error) =>{
              this.notification = error.response.data.message;
            })
        }
      }
  }
  </script>
  
<style lang="scss" module>
  @import "./scss/Register.module.scss"
</style>