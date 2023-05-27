<template>
    <main :class="$style.wrapper">
        <h1>What would you like to order</h1>
        <section :class="$style.search">
            <div :class="$style.search_input">
                <Search @enter-input="handleInputEnter" @change-input="handleInputChange"
                    @focus-input="handleInputFocus" @blur-input="handleInputBlur" autofocus
                    placeholder="Search for food name" />
                <Popper :class="$style.popper" v-if="isFocus && (searchResults.length || noResult)"
                    v-bind:class="noResult ? $style.no_result: null">
                    <ul :class="$style.menu_list">
                        <li v-if="!noResult" v-for="(item) in searchResults" :key="item.id">
                            <MenuItem @click-item="handleClickSearchResult" :class="$style.menu_item"
                                :title="item.name">
                            <img :src="item.image" alt="food">
                            </MenuItem>
                        </li>
                        <div v-if="noResult" :class="$style.no_result_message">
                            <img src="@/assets/images/no-results.png" alt="no result">
                            <h3>Sad no result</h3>
                            <p>We cannot find the food you are searching for, maybe a little spelling mistake?</p>
                        </div>
                    </ul>
                </Popper>
            </div>
            <Button onlyIcon>
                <SVGIcon icon="filter" />
            </Button>
        </section>
        <section :class="$style.food_types">
            <ul>
                <li v-for="(item) in foodTypes" :key="item.id">
                    <FoodType :id="item.id" :name="item.name" :imageUrl="item.imageUrl"
                        :active="item.id === this.id ? true : false" @click-item="handleClickFoodType" />
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
                <li v-for="item in shops" :key="item.id">
                    <FoodItem @click-item="handleClickItem" @click-like="handleClickLikeShop"
                        :isLike="item.liked === 0 ? false : true" :id="item.id" :title="item.name" :image="item.image"
                        :time="item.timeShipping" :shipping="item.shipFee === 0 ? 'Free delivery' : '$' + item.shipFee"
                        :is-tick="item.isTick === 0 ? false : true" star="4.5" />
                </li>
            </ul>
        </section>
        <section :class="$style.foods">
            <h2>Popular Foods</h2>
            <ul :class="$style.foods_list">
                <li v-for="item in foods" :key="item.id">
                    <FoodItem @click-like="handleClickLikeFood" @click-item="handleClickFoodItem" short-food
                        :id="item.id" :shopName="item.shopName" :title="item.name" :image="item.image"
                        :desc="item.description" :numOfRatings="item.price" :place="item.place"
                        :isLike="item.liked === 0 ? false : true" :time="item.numOrders >= 1000 ? parseFloat(item.numOrders / 1000).toFixed(1) + 'k' : item.numOrders" />
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import FoodType from '@/components/FoodType/FoodType.vue';
    import Popper from '@/components/Popper/Popper.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';
    import Search from '@/components/Search/Search.vue';
    import Star from '@/components/Star/Star.vue';
    import MenuItem from '@/components/MenuItem/MenuItem.vue';
    import home from '@/composables/home.js';

    export default {
        name: 'Home',
        components: {
            Search,
            Button,
            SVGIcon,
            SVGIcon,
            FoodType,
            Star,
            FoodItem,
            Popper,
            MenuItem
        },
        mixins: [home]
    }
</script>

<style lang="scss" module>
    @import "./scss/Home.module.scss"
</style>