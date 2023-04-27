<template>
    <main :class="$style.wrapper">
        <h1>What would you like to order</h1>
        <section :class="$style.search">
            <Search />
            <Button onlyIcon>
                <SVGIcon icon="filter" />
            </Button>
        </section>
        <section :class="$style.food_types">
            <ul>
                <li v-for="(item) in foodTypes" :key="item.id">
                    <FoodType :name="item.name" :imageUrl="item.imageUrl" :active="item.active ? true : false" />
                </li>
            </ul>
        </section>
        <section :class="$style.restaurants">
            <figure :class="$style.restaurants_header">
                <h2>Featured Restaurants</h2>
                <article :class="$style.header_view">
                    <span>View All</span>
                    <fa icon="chevron-right" />
                </article>
            </figure>
            <ul :class="$style.restaurants_list">
                <li v-for="(item, index) in foodItems" :key="index">
                    <FoodItem @click-like="handleClickLike" :isLike="item.isLike" :id="index" :title="item.shopName"
                        :is-tick="item.isTick" :num-of-ratings="item.numOfRating" :star="item.star" />
                </li>
            </ul>
        </section>
        <section :class="$style.foods">
            <h2>Popular Foods</h2>
            <ul :class="$style.foods_list">
                <li>
                    <FoodItem short-food/>
                </li>
                <li>
                    <FoodItem short-food/>
                </li>
                <li>
                    <FoodItem short-food/>
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import FoodType from '@/components/FoodType/FoodType.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';
    import Search from '@/components/Search/Search.vue';
    import Star from '@/components/Star/Star.vue';
    import foodTypes, {
        foodItems
    } from '@/data/foodTypes';
    // import axios from 'axios';
    // import Cookies from 'js-cookie';
    // import jwt_decode from 'jwt-decode';

    export default {
        name: "Home",
        setup() {
            return {
                foodTypes
            }
        },
        components: {
            Search,
            Search,
            Button,
            SVGIcon,
            SVGIcon,
            FoodType,
            Star,
            FoodItem
        },
        methods: {
            handleClickLike(id) {}
        },
        data() {
            return {
                like: false,
                foodItems
            }
        }
        // setup () {
        //     return {
        //     }
        // },
        // data () {
        //     let res;
        //     return {
        //         res
        //     }
        // },
        // mounted () {
        //     const accessToken = Cookies.get('accessToken');
        //     const refreshToken = sessionStorage.getItem('refreshToken');
        //     const date = new Date();
        //     const decodedToken = jwt_decode(accessToken);
        //     if (decodedToken.exp < date.getTime() / 1000) {
        //         axios.post('http://localhost:3000/v1/api/auth/refreshToken', {refreshToken})   
        //             .then ((res) => {
        //                 Cookies.set('accessToken', res.data.accessToken);
        //                 sessionStorage.setItem('refreshToken', res.data.refreshToken);
        //                     const newAccessToken = Cookies.get('accessToken');
        //                     axios.get('http://localhost:3000/v1/api/auth/home', {
        //                        headers: {'token': `Bearer ${newAccessToken}`}
        //                     })
        //                     .then (res => console.log(res)) 
        //             })
        //             .catch(err => console.log(err))
        //         console.log('call api refresh token');
        //     } else {
        //         axios.get('http://localhost:3000/v1/api/auth/home', {
        //             headers: {'token': `Bearer ${Cookies.get('accessToken')}`}
        //         })
        //             .then (res => console.log(res)) 
        //         console.log('call api home');
        //     }
        // }
        ,
    }
</script>

<style lang="scss" module>
    @import "./scss/Home.module.scss"
</style>