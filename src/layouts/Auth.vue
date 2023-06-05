<template>
    <div :class="$style.wrapper">
        <header :class="$style.header">
            <span></span>
            <span></span>
            <span></span>
        </header>
        <slot></slot>
        <article :class="$style.navigation" v-if="route.meta.path === 'login'">
            <span>Don't have an account?</span>
            <RouterLink :to="routesConfig.signup">Sign Up</RouterLink>
        </article>
        <article :class="$style.navigation" v-if="route.meta.path === 'signup'">
            <span>Already have an account?</span>
            <RouterLink :to="routesConfig.login">Sign In</RouterLink>
        </article>
        <footer :class="$style.footer">
            <section :class="$style.line">
                <span></span>
                <span>{{ route.meta.path === 'login' ? 'Sign in with' : 'Sign up with'}}</span>
                <span></span>
            </section>
            <section :class="$style.button__group">
                <div :class="$style.left">
                    <Button @click-btn="handleSignInFacebook" name="FACEBOOK" :class="$style.button">
                        <facebook />
                    </Button>
                    <Button @click-btn="handleSignInGoogle" name="GOOGLE" :class="$style.button">
                        <google />
                    </Button>
                </div>
            </section>
        </footer>
        <Loader v-if="isLoading"/>
    </div>
</template>

<script>
    import {
        useRoute
    } from 'vue-router';
    import Button from '@/components/Button/Button.vue';
    import {facebook, google} from '@/assets/icons/index.js';
    import routesConfig from '@/config/routes';
    import {GoogleAuthProvider, FacebookAuthProvider, getAuth, signInWithPopup} from 'firebase/auth';
    import axios from 'axios';
    import Cookies from 'js-cookie';
    import Loader from '@/components/Loader/Loader.vue';

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    export default {
        setup() {
            const route = useRoute();
            return {
                route
            }
        },
        components: {
    Button,
    facebook,
    google,
    Loader
},
        data() {
            return {
                routesConfig,
                user: {},
                isLoading: false,
            }
        },
        methods: {
            handleSignInGoogle () {
                this.popup(auth, googleProvider);
            },
            handleSignInFacebook () {
                this.popup(auth, facebookProvider);
            },
            popup (authParams, providerParams) {
                signInWithPopup(authParams, providerParams)
                    .then((result) => {
                        this.user = {
                            fullName: result.user.displayName,
                            email: result.user.email,
                            avatar: result.user.photoURL
                        }
                        this.sendInfoSignIn(this.user);
                    }).catch((error) => {
                        console.log(error);
                    });
            },
            sendInfoSignIn (payload) {
                this.isLoading = true;
                axios.post('http://localhost:3000/v1/api/auth/social', {
                    email: payload.email,
                    fullName: payload.fullName,
                    avatar: payload.avatar
                })
                    .then(res => {
                        Cookies.set('accessToken', res.data.data.accessToken);
                        sessionStorage.setItem('refreshToken', res.data.data.refreshToken);
                        this.isLoading = false;
                        this.$router.push(this.routesConfig.home);
                    })
                    .catch(err => {
                        this.isLoading = false;
                        console.log(err);
                    })
            }
        },
    }
</script>

<style lang="scss" module>

.wrapper {
    padding: var(--global-padding);
    width: 100%;
    height: 100%;
    position: relative;
}

.header {
    $radius-rounded: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: fit-content;

    & > span:first-child {
        position: absolute;
        width: 165px;
        height: 165px;
        background-color: #FFECE7;
        border-radius: $radius-rounded;
        transform: translateY(-99px);
        z-index: 1;
    }

    & > span:nth-child(2) {
        position: absolute;
        width: 96px;
        height: 96px;
        background-color: var(--primary-color);
        border-radius: $radius-rounded;
        transform: translate(-46px, -30px);
    }

    & > span:nth-child(2)::before {
        content: "";
        position: absolute;
        width: 40%;
        height: 40%;
        background-color: var(--light-color);
        top: 50%;
        left: 50%;
        border-radius: $radius-rounded;
        transform: translate(-50%, -50%);
    }

    & > span:last-child {
        position: absolute;
        right: 0;
        width: 181px;
        height: 181px;
        background-color: var(--primary-color);
        border-radius: $radius-rounded;
        transform: translate(104px, -109px);
    }
}

.navigation {
    position: absolute;
    bottom: 20%;
    width: 100%;
    left: 0;
    text-align: center;

    & > span {
        font-size: 1.4rem;
        line-height: 1.4rem;
        font-weight: 400;
        color: #5B5B5E;
    }

    & > a {
        color: var(--primary-color);
        margin-left: 6px;
    }
}

.footer {
    position: absolute;
    bottom: 5%;
    padding: 0px 25px;
    width: 100%;
    left: 0;
    background-image: linear-gradient(to bottom, #fff, #f5f5f5);
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
      background-color: var(--gray-color);
    }
    
    & > span:nth-child(2) {
        font-size: 1.4rem;
        line-height: 1.4rem;
        color: var(--gray-color);
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
    box-shadow: 0 0 50px 1px #eee;
  }
</style>    