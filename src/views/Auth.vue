<template>
  <main :class="$style.wrapper">
    <div :class="$style.overlay">
      <main :class="$style.content">
        <header :class="$style.header">
          <article>
            <h1>Welcome to</h1>
            <h1>FoodHub</h1>
            <p>Your favourite foods delivered <br> fast at your door</p>
          </article>
        </header>
        <footer :class="$style.footer">
          <section :class="$style.line">
            <span></span>
            <span>sign up with</span>
            <span></span>
          </section>
          <section :class="$style.button__group">
            <div :class="$style.left">
              <Button name="FACEBOOK" :class="$style.button">
                <facebook/> 
              </Button>
              <Button name="GOOGLE" :class="$style.button">
                <google/> 
              </Button>
            </div>
            <router-link to="/signup"><Button name="Start with email or phone" :class="[$style.button_outline, $style.button]"/></router-link>
          </section>
          <section :class="$style.navigation">
            <span>Already have an account?</span>
            <router-link to="/login" :class="$style.link">Sign In</router-link>
          </section>
        </footer>
      </main>
    </div>
  </main>
</template>

<script>
  import Button from '@/components/Button/Button.vue';
  import {facebook, google} from '@/assets/icons/index.js';

  export default {
    name: 'Auth',
    components: {
      Button,
      facebook,
      google
    }
  };
</script>

<style module lang="scss">
  @import "./scss/Auth.module.scss"
</style>
