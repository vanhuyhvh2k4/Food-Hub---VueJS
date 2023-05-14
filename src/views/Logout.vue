<template>
    <h1>Logout page</h1>
</template>

<script>
    import Cookies from 'js-cookie';

    export default {
        name: "Logout",
        methods: {
            logout () {
                Cookies.remove('accessToken');
                sessionStorage.removeItem('refreshToken');
                localStorage.removeItem('currentUser');
                this.$router.push({
                    name: 'auth',
                    params: ''
                })
            }
        },
        mounted() {
            setTimeout(() => {
                this.logout();
            }, 1000);
        },
    }
</script> 