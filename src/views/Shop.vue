<template>
    <main :class="$style.wrapper">
        <header :class="$style.header">
            <div :class="$style.image">
                <img :src="shopInfo ? shopInfo.background : ''" alt=""/>
                <div :class="$style.small_image">
                    <img :src="shopInfo ? shopInfo.image : ''" alt=""/>
                    <fa v-if="shopInfo && shopInfo.isTick === 0 ? false : true" :class="$style.check" icon="circle-check"/>
                </div>
            </div>
            <article :class="$style.text">
                <h1>{{ shopInfo ? shopInfo.name : '' }}</h1>
                <small>{{ shopInfo ? shopInfo.quantity : '' }} products for sale</small>
                <p>{{ shopInfo ? shopInfo.place : '' }}</p>
            </article>
        </header>
        <div :class="$style.sort">
            <section>
                <label for="sort">Sort by: </label>
                <select id="sort">
                    <option>Popular</option>
                    <option>Price</option>
                </select>
            </section>
            <section>
                <Button onlyIcon>
                    <SVGIcon icon="filter"/>
                </Button>
            </section>
        </div>
        <div :class="$style.food_list">
            <li v-for="item in foodList" :key="item.id">
                <FoodItem @click-item="handleClickFoodItem" :class="$style.food_item" :title="item.name" :desc="item.description" :num-of-ratings="item.price" :is-like="item.liked === 0 ? false : true" :image="item.image" shortFood noPlace/>
            </li>
        </div>
    </main>
</template>

<script>
    import jsCookie from 'js-cookie';
    import * as shopService from '@/services/shopService.js';
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import Overlay from '@/components/Overlay/Overlay.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';
    import axiosJWT from '@/utils/refreshToken';

    export default {
        name: "Shop",
        components: {
            Overlay,
            Button,
            SVGIcon,
            FoodItem
        },
        methods: {
            async getInfo () {
                const response = await shopService.getInfo({
                    params: {
                        shopName: this.formatPath
                    }
                })
                if (response.code === 'shop/getInfo.success') {
                    this.shopInfo = response.data
                } else {
                    console.log(response);
                }
            },

            getFood () {
                axiosJWT.get('http://localhost:3000/v1/api/shop/getFood', {
                    headers: {
                        token: `Bearer ${jsCookie.get('accessToken')}`
                    },
                    params: {
                        shopName: this.formatPath
                    }
                })    
                .then(response => this.foodList = response.data.data.foodList)
                .catch(err => console.log(err))
            },

            handleClickFoodItem (foodName) {
                const currentPath = window.location.pathname;
                this.$router.push(currentPath + `/${foodName.replaceAll(' ', '-')}`)
            }
        },
        mounted() {
            this.getInfo();

            this.getFood();

        },
        data() {
            const originPath = window.location.pathname;

            const formatPath = originPath.replace('@', '').replaceAll('/', '').split('-').join(' ');

            return {
                formatPath,
                foodList: [],
                shopInfo: null,
            }
        },
    }
</script>

<style lang="scss" module>
    @import './scss/Shop.module.scss';
</style>