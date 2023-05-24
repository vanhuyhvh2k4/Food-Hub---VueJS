<template>
    <main :class="$style.wrapper" v-bind:class="addCart === true ? $style.active : ''">
        <section :class="$style.image">
            <img :src="food ? food.image : ''" alt="" />
        </section>
        <section :class="$style.title">
            <h1>{{ food ? food.name : '' }}</h1>
        </section>
        <section :class="$style.rating">
            <div>
                <fa icon="star" />
                <span>4.5</span>
            </div>
            <div>
                <span>30 + Sold</span>
            </div>
            <div>
                <span>See review</span>
            </div>
        </section>
        <section :class="$style.buy">
            <div>
                <h2>${{ food ? food.price : '' }}</h2>
            </div>
            <div :class="$style.quantity">
                <span @click="handleClickMinus">
                    <fa icon="minus" />
                </span>
                <span>{{ number < 10 ? '0' + number : number }}</span>
                <span @click="handleClickPlus">
                    <fa icon="plus" />
                </span>
            </div>
        </section>
        <section :class="$style.desc">
            <p>{{ food ? food.description : '' }}</p>
        </section>
        <section :class="$style.shop">
            <div :class="$style.shop_left">
                <div>
                    <img :src="food ? food.shopImage : ''" alt="">
                </div>
                <article>
                    <p>
                        <h2>{{ food ? food.shopName : '' }}</h2>
                        <fa v-if="food ? food.isTick : ''" icon="circle-check" />
                    </p>
                    <p>{{ food ? food.place : '' }}</p>
                    <p>{{ food ? food.num : '' }} items</p>
                </article>
            </div>
            <div>
                <Button @click-btn="handleClickShop" outline name="See shop" :class="$style.button" />
            </div>
        </section>
        <section :class="$style.add_on">
            <h2>Choice to Add On</h2>
            <ul>
                <li :class="$style.add_on__item">
                    <div>
                        <img src="https://images.unsplash.com/photo-1683659635689-3df761eddb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="">
                        <h3>Pizza Vegetable</h3>
                    </div>
                    <div>
                        <h3>+$2.30</h3>
                    </div>
                    <div>
                        <input type="radio">
                    </div>
                </li>
                <li :class="$style.add_on__item">
                    <div>
                        <img src="https://images.unsplash.com/photo-1683659635689-3df761eddb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="">
                        <h3>Pizza Vegetable</h3>
                    </div>
                    <div>
                        <h3>+$2.30</h3>
                    </div>
                    <div>
                        <input type="radio">
                    </div>
                </li>
                <li :class="$style.add_on__item">
                    <div>
                        <img src="https://images.unsplash.com/photo-1683659635689-3df761eddb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt="">
                        <h3>Pizza Vegetable</h3>
                    </div>
                    <div>
                        <h3>+$2.30</h3>
                    </div>
                    <div>
                        <input type="radio">
                    </div>
                </li>
            </ul>
        </section>
        <section :class="$style.btn">
            <Button @click-btn="handleClickCart" primary name="ADD TO CART">
                <div :class="$style.icon">
                    <fa icon="bag-shopping" />
                </div>
            </Button>
        </section>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import detail from '@/composables/detail.js';

    export default {
        name: "Detail",
        components: {
            Button
        },
        mixins: [detail],
    }
</script>

<style lang="scss" module>
    @import './scss/Detail.module.scss'
</style>