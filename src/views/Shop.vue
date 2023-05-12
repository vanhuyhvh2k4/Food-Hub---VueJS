<template>
    <main :class="$style.wrapper">
        <header :class="$style.header">
            <div :class="$style.image">
                <img src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt=""/>
                <div :class="$style.small_image">
                    <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt=""/>
                    <fa :class="$style.check" icon="circle-check"/>
                </div>
            </div>
            <article :class="$style.text">
                <h1>Shop thu ha</h1>
                <small>4012 Pretty View Lanenda</small>
                <p>Order delicious</p>
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
            <li>
                <FoodItem :class="$style.food_item" shortFood isLike noPlace/>
            </li>
        </div>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import FoodItem from '@/components/FoodItem/FoodItem.vue';
    import Overlay from '@/components/Overlay/Overlay.vue';
    import SVGIcon from '@/components/SVGIcon/SVGIcon.vue';

    export default {
        name: "Shop",
        components: {
    Overlay,
    Button,
    SVGIcon,
    FoodItem
}
    }
</script>

<style lang="scss" module>
    @import './scss/Shop.module.scss';
</style>