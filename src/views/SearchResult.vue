<template>
    <main :class="$style.wrapper">
        <Search @enter-input="handleInputEnter" filter :class="$style.search" autofocus/>
        <DoubleButton :class="$style.button"/>
        <article :class="$style.title" v-if="!noResult">
            <h3><span style="color: var(--primary-color);">{{ length }}</span> results</h3>
        </article>

        <div :class="$style.list" v-if="listFood.length && !noResult">
            <div v-for="item in listFood" :key="item.id" :class="$style.item">
                <FoodItem @click-item="handleClickFood" @click-like="handleClickLike" short-food :class="$style.child" :id="item.id" :shop-name="item.shopName" :image="item.image" :title="item.name" :desc="item.description" :place="item.place" :numOfRatings="item.price" :isLike="item.liked === 0 ? false : true"/>
            </div>
        </div>
        <div v-if="noResult">
            <h3>We dont found the result</h3>
        </div>
        <Loader v-if="isLoading"/>
    </main>
</template>

<script>
import searchResult from '@/composables/searchResult.js';

export default {
    name: "SearchResult",
    mixins: [searchResult],
}
</script>

<style lang="scss" module>
    @import "./scss/SearchResult.module.scss"
</style>