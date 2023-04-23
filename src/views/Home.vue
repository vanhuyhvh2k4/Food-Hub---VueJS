<template>
    <main :class="$style.wrapper">
        <h1>What would you like to order</h1>
    </main>
</template>

<!-- <script>
    import axios from 'axios';
    import Cookies from 'js-cookie';
    import jwt_decode from 'jwt-decode';

    export default {
        setup () {
            return {
                
            }
        },
        data () {
            let res;
            return {
                res
            }
        },
        mounted () {
            const accessToken = Cookies.get('accessToken');
            const refreshToken = sessionStorage.getItem('refreshToken');
            const date = new Date();
            const decodedToken = jwt_decode(accessToken);
            if (decodedToken.exp < date.getTime() / 1000) {
                axios.post('http://localhost:3000/v1/api/auth/refreshToken', {refreshToken})   
                    .then ((res) => {
                        Cookies.set('accessToken', res.data.accessToken);
                        sessionStorage.setItem('refreshToken', res.data.refreshToken);

                            const newAccessToken = Cookies.get('accessToken');

                            axios.get('http://localhost:3000/v1/api/auth/home', {
                               headers: {'token': `Bearer ${newAccessToken}`}
                            })
                            .then (res => console.log(res)) 
                    })
                    .catch(err => console.log(err))
                console.log('call api refresh token');
            } else {
                axios.get('http://localhost:3000/v1/api/auth/home', {
                    headers: {'token': `Bearer ${Cookies.get('accessToken')}`}
                })
                    .then (res => console.log(res)) 
                console.log('call api home');
            }
        }
}
</script> -->

<style lang="scss" module>
    @import "./scss/Home.module.scss"
</style>