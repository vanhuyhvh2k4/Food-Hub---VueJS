<template>
  <div :class="$style.wrapper">
    <h1 :class="$style.title">Login</h1>
    <form :class="$style.form">
      <Input title="E-mail" type="email" isRequired placeholder="Your email"/>
      <Input title="Password" type="password" isRequired placeholder="Your password"/>
      <router-link :class="$style.link" to="/">Forgot password?</router-link>
      <Button :class="$style.button" name="Sign In"/>
    </form>
  </div>
</template>

<script>
  import Input from '@/components/Input/Input.vue';
  import Button from '@/components/Button/Button.vue';
  
  export default {
    components: {
      Input,
      Button
    }
}
</script>

<style lang="scss" module>
  .wrapper {
    position: absolute;
    bottom: 28%;
    width: 100%;
    left: 0;
    padding: 25px;
  }
 
  .title {
      font-size: 3.6rem;
      font-weight: 600;
      line-height: 4.4rem;
      margin-bottom: 30px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button {
    height: 60px;
    width: 248px;
    background-color: var(--primary-color);
    color: var(--light-color);
    margin-top: 32px;
    
    & > h3 {
      font-size: 1.5rem;
      text-transform: uppercase;
      font-weight: 600;
      line-height: 1.5rem;
    }
  }

  .link {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.4rem;
    color: var(--primary-color);
    margin-top: 32px;
    display: block;
  }
</style>