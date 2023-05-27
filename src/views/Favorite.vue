<template>
    <main :class="$style.wrapper">
        <DoubleButton :click="click === 'right' ? 'right': 'left'" @click-left="handleClickLeft"
            @click-right="handleClickRight" />
        <div v-if="click === 'left' && foods.length" :key="click" :class="$style.food_list">
            <li v-for="item in foods" :key="item.id">
                <FoodItem @click-like="handleClickLikeFood" @click-item="handleClickFood" :class="$style.food_item"
                    :id="item.id" :shopName="item.shopName" :title="item.name" :desc="item.description"
                    :numOfRatings="item.price" :image="item.image" isLike shortFood noPlace />
            </li>
        </div>
        <div v-if="click === 'right' && shops.length" :key="click" :class="$style.restaurant_list">
            <li v-for="item in shops" :key="item.id">
                <FoodItem @click-like="handleClickLikeShop" @click-item="handleClickShop"
                    :class="[$style.food_item, $style.restaurant_item]" :id="item.id" :title="item.name"
                    :image="item.image" :isTick="item.isTick === 1 ? true : false" isLike
                    :shipping="item.shipFee === 0 ? 'Free delivery' : '$' + item.shipFee"/>
            </li>
        </div>

        <NotFound v-if="click === 'left' && !foods.length" :image="food" title="You do not like any food"
            small="Let buy something ^-^" />
        <NotFound v-if="click === 'right' && !shops.length" :image="restaurant" title="You do not like any shops"
            small="Let discover a shop ^-^" />
    </main>
</template>

<script>
    import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import NotFound from '@/components/NotFound/NotFound.vue';
    import favorite from '@/composables/favorite.js';

    export default {
        name: "Favorite",
        components: {
            DoubleButton,
            FoodItem,
            NotFound
        },
        mixins: [favorite]
    }
</script>

<style lang="scss" module>
    @import './scss/Favorite.module.scss'
</style>