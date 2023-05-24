<template>
    <main :class="$style.wrapper">
        <Search @enter-input="handleInputEnter" filter :class="$style.search" autofocus />
        <DoubleButton :class="$style.button" />
        <article :class="$style.title" v-if="listFood.length">
            <h3><span style="color: var(--primary-color);">{{ length }}</span> results</h3>
        </article>

        <div :class="$style.list" v-if="listFood.length">
            <div v-for="item in listFood" :key="item.id" :class="$style.item">
                <FoodItem @click-item="handleClickFood" @click-like="handleClickLike" short-food :class="$style.child"
                    :id="item.id" :shop-name="item.shopName" :image="item.image" :title="item.name"
                    :desc="item.description" :place="item.place" :numOfRatings="item.price"
                    :isLike="item.liked === 0 ? false : true" />
            </div>
        </div>
        <NotFound v-if="!listFood.length" :image="error404" title="We cannot find the result" small="Please try another food"/>
        <Loader v-if="isLoading" />
    </main>
</template>

<script>
    import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import Loader from '@/components/Loader/Loader.vue';
import NotFound from '@/components/NotFound/NotFound.vue';
    import Search from '@/components/Search/Search.vue';
    import searchResult from '@/composables/searchResult.js';

    export default {
        name: "SearchResult",
        components: {
    FoodItem,
    Search,
    DoubleButton,
    Loader,
    NotFound
},
        mixins: [searchResult],
    }
</script>

<style lang="scss" module>
    @import "./scss/SearchResult.module.scss"
</style>