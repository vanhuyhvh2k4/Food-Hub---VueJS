<template>
  <div :class="$style.wrapper">
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
  </div>
</template>

<script>
  import Button from '@/components/Button/Button.vue';
  import {facebook, google} from '@/assets/icons/index.js';

  export default {
    components: {
      Button,
      facebook,
      google
    }
  };
</script>

<style module lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url('@/assets/images/intro.jpg');
    background-size: cover;
    background-position: center;
    flex-shrink: 0;
  }

  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(to bottom, #494d6300, #191B2F);
  }

  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 32px;
  }

  .header {
    position: absolute;
    top: 15%;

    & > article {
      & > h1 {
      font-size: 5.3rem;
      line-height: 6.8rem;
      font-weight: 700;
      }

      & > h1:nth-child(2) {
        color: var(--primary-color);
      }

      & > p {
        font-size: 1.8rem;
        line-height: 2.7rem;
        font-weight: 400;
        color: #30384F;
      }
    }
  }

  .footer {
    position: absolute;
    bottom: 5%;
    padding: 0px 32px;
    width: 100%;
    left: 0;
  }

  .line {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    & > span:nth-child(1) ,& > span:nth-child(3) {
      height: 1px;
      flex: 1;
      background-color: var(--light-color);
    }
    
    & > span:nth-child(2) {
      color: var(--light-color);
    }
  }

  .button__group {
    margin-top: 18px;
  }

  .left {
    width: 100%;
    display: flex;
    gap: 20px;
    justify-content: space-between;
  }
  
  .button {
    height: 54px;
    flex: 1;
    padding: 13px 12px;
    &.button_outline {
      width: 100%;
      margin-top: 24px;
      border: 1px solid var(--light-color);
      color: var(--light-color);
      background-color: rgba(255, 255, 255,.21);
      & > h3 {
        font-size: 1.7rem;
        line-height: 1.7rem;
        font-weight: 500;
      }
    }
  }

  .navigation {
    color: var(--light-color);
    width: 100%;
    text-align: center;
    margin-top: 24px;
    & > span {
      font-weight: 300;
    }
  }

  .link {
    font-weight: 400;
    text-decoration: underline;
    margin-left: 10px;
  }
</style>
