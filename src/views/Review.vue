<template>
    <main :class="$style.wrapper">
        <ul v-if="listReviews.length" :class="$style.list">
            <li v-for="item in listReviews" :key="item.id">
                <div :class="$style.item">
                    <header>
                        <section>
                            <div :data-rating="item.rating + '.0'">
                                <img :src="item.avatar" alt="">
                            </div>
                            <article>
                                <div>
                                    <h3>{{ item.fullName }}</h3>
                                    <article v-if="item.shopName">
                                        <h3>- {{ item.shopName }}</h3>
                                        <fa v-if="item.isTick" icon="circle-check"/>
                                    </article>
                                </div>
                                <h4>{{ item.time }}</h4>
                            </article>
                        </section>
                        <section>
                            <fa icon="ellipsis-vertical"/>
                        </section>
                    </header>
                    <p>{{ item.comment }}</p>
                </div>
            </li>
        </ul>
        <Loader v-if="isLoading"/>
        <NotFound 
            v-if="!listReviews.length" 
            :image="comment" 
            title="Don't have anyone comment" 
            small="Let the first person comment about this food"
        />
    </main>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import NotFound from '@/components/NotFound/NotFound.vue';
import review from '@/composables/review.js';

export default {
    name: "Review",
    components: {
    Loader,
    NotFound
},
    mixins: [review]
}
</script>

<style lang="scss" module>
    @import "./scss/Review.module.scss"
</style>

