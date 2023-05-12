<template>
    <main :class="$style.wrapper">
        <h1>What would you like to order</h1>
        <section :class="$style.search">
            <div :class="$style.search_input">
                <Search @change-input="handleInputChange" @focus-input="handleInputFocus"
                    @blur-input="handleInputBlur" />
                <Popper :class="$style.popper" v-if="isFocus && (searchResults.length || noResult)" v-bind:class="noResult ? $style.no_result: null">
                    <ul :class="$style.menu_list">
                        <li v-if="!noResult" v-for="(item) in searchResults" :key="item.id">
                            <MenuItem :class="$style.menu_item" :title="item.name">
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
                    <FoodType :id="item.id" :name="item.name" :imageUrl="item.imageUrl" :active="item.id === this.id ? true : false" @click-item="handleClickFoodType"/>
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
                <li v-for="(item, index) in shops" :key="index">
                    <FoodItem @click-like="handleClickLike" :isLike="item.liked === 0 ? false : true" :id="index" :title="item.name" :image="item.image" :time="item.timeShipping" :shipping="item.shipFee === 0 ? 'Free delivery' : '$' + item.shipFee"
                        :is-tick="item.isTick === 0 ? false : true" num-of-ratings="2k" star="4.5" />
                </li>
            </ul>
        </section>
        <section :class="$style.foods">
            <h2>Popular Foods</h2>
            <ul :class="$style.foods_list">
                <li>
                    <FoodItem short-food />
                </li>
                <li>
                    <FoodItem short-food />
                </li>
                <li>
                    <FoodItem short-food />
                </li>
            </ul>
        </section>
    </main>
</template>

<script>
    import homeComposable from '@/composables/home.js';
    
    export default {
        name: 'Home',
        mixins: [homeComposable]
    }
</script>

<style lang="scss" module>
    @import "./scss/Home.module.scss"
</style>