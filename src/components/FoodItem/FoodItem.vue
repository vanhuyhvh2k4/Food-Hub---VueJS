<template>
    <div :class="[$style.wrapper, shortFood ? $style.wrapper_short_food : null]" @click="handleClick">
        <section :class="[$style.header, shortFood ? $style.header_short_food : null]">
            <img :src="image" alt="food">
            <Star :rate="star" :number="numOfRatings" :class-name="$style.star" :price="!!shortFood"/>
            <div :class="$style.like" @click="hanldeClickLike">
                <fa icon="heart"/>
                <span v-if="isLike" :key="isLike"></span>
            </div>
        </section>
        <section :class="[$style.info, shortFood ? $style.info_short_food : null]">
            <article :class="$style.title">
                <h1>{{ title }}</h1>
                <fa v-if="isTick && !shortFood" icon="circle-check"/>
            </article>
            <div v-if="!shortFood" :class="$style.details">
                <article>
                    <SVGIcon icon="driver" width="1.2rem" height="1.4rem"/>
                    <h3>{{ shipping }}</h3>
                </article>
                <article>
                    <SVGIcon icon="clock" width="1.2rem" height="1.4rem"/>
                    <h3>{{ time }}</h3>
                </article>
            </div>
            <div v-if="!shortFood" :class="$style.tags">
                <Button v-for="(item) in limitTags" :key="item.id" :class="$style.tag_item " muted onlyTitle :name="item.name"/>
            </div>
            <article v-if="shortFood" :class="$style.desc">
                <h2>{{ desc }}</h2>
            </article>
            <article v-if="shortFood && !noPlace" :class="$style.place">
                <span>{{ place }}</span>
                <div>
                    <h3>{{ time >= 1000  ? parseFloat(time/1000).toFixed(1) + 'k' : parseInt(time) }}</h3>
                    <h3>Sold</h3>
                </div>
            </article>
        </section>
    </div>
</template>

<script>
    import Button from '../Button/Button.vue';
    import SVGIcon from '../SVGIcon/SVGIcon.vue';
    import Star from '../Star/Star.vue';

    export default {
        name: "FoodItem",
        components: { SVGIcon, Button, Star },
        props: {
            shortFood: {
                type: Boolean,
                default: false
            },
            id: Number,
            shopName: String,
            noPlace: {
                type: Boolean,
                default: false
            },
            image: {
                type: String,
                default: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            },
            desc: {
                type: String,
                default: 'Baked salmon fish'
            },
            isLike: Boolean,
            star: {
                type: String,
                default: '4.5'
            },
            numOfRatings: {
                type: Number,
                default: 25
            },
            title: {
                type: String,
                default: "Shop Name",
            },
            isTick: {
                type: Boolean,
                default: false,
            },
            shipping: {
                type: String,
                default: "Free delivery",
            },
            place: {
                type: String,
                default: 'Da Nang'
            },
            time: {
                type: Number,
                default: 0
            },
            tags: {
                type: Array,
                default: [
                    {
                        id: 1,
                        name: "Burger"
                    },
                    {
                        id: 2,
                        name: "Chicken"
                    },
                    {
                        id: 3,
                        name: "Fast food"
                    },
                ]
            }
        },
        data() {
            const limitTags = this.tags.slice(0, 3);
            return {
                limitTags
            }
        },
        methods: {
            handleClick () {
                this.$emit('click-item', this.title, this.shopName)
            },

            hanldeClickLike (e) {
                e.stopPropagation();
                this.$emit('click-like', this.id, this.isLike);
            },
        },
    }
</script>

<style lang="scss" module>
    @import "./FoodItem.module.scss"
</style>