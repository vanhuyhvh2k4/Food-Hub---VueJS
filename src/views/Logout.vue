<template>
    <main :class="$style.wrapper">
        <div>
            <img :src="logo" alt="">
        </div>
    </main>
</template>

<script>
    import Cookies from 'js-cookie';
    import logo from '@/assets/images/logo.png';

    export default {
        name: "Logout",
        methods: {
            logout () {
                Cookies.remove('accessToken');
                sessionStorage.removeItem('refreshToken');
                localStorage.removeItem('currentUser');
                this.$store.dispatch('logout');
                this.$router.push({
                    name: 'auth',
                    params: ''
                })
            }
        },
        data() {
            return {
                logo
            }
        },
        mounted() {
            setTimeout(() => {
                this.logout();
            }, 1000);
        },
    }
</script> 

<style lang="scss" module>
    .wrapper {
        width: 100%;
        height: 100%;
        background-color: var(--primary-color);
        display: grid;
        place-items: center;
    }
</style>