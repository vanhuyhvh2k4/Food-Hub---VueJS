<template>
    <main :class="$style.wrapper">
        <DoubleButton :click="click === 'right' ? 'right': 'left'" @click-left="handleClickLeft"
            @click-right="handleClickRight" />
        <div v-if="click === 'left' && foods.length" :key="click" :class="$style.food_list">
            <li v-for="item in foods" :key="item.id">
                <FoodItem @click-like="handleClickLikeFood" @click-item="handleClickFood" :class="$style.food_item" :id="item.id" :shopName="item.shopName"
                    :title="item.name" :desc="item.description" :numOfRatings="item.price" :image="item.image" isLike
                    shortFood noPlace />
            </li>
        </div>
        <div v-if="click === 'right' && shops.length" :key="click" :class="$style.restaurant_list">
            <li v-for="item in shops" :key="item.id">
                <FoodItem @click-like="handleClickLikeShop" @click-item="handleClickShop" :class="[$style.food_item, $style.restaurant_item]" :id="item.id" :title="item.name" :image="item.image" :isTick="item.isTick === 1 ? true : false" isLike :shipping="item.shipFee === 0 ? 'Free delivery' : '$' + item.shipFee" :time="item.timeShipping"/>
            </li>
        </div>
        <div v-if="click === 'left' && !foods.length" :class="$style.not_found">
            <img :src="food" alt="">
            <h3>You do not like any food</h3>
            <small>Let buy something ^-^</small>
        </div>

        <div v-if="click === 'right' && !shops.length" :class="$style.not_found">
            <img :src="restaurant" alt="">
            <h3>You do not like any shops</h3>
            <small>Let discover a shop ^-^</small>
        </div>
    </main>
</template>

<script>
    import favoriteComposable from '@/composables/favorite.js';
    export default {
        name: "Favorite",
        mixins: [favoriteComposable]
    }
</script>

<style lang="scss" module>
    @import './scss/Favorite.module.scss'
</style>