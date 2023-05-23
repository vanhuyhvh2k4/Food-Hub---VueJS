<template>
    <div :class="$style.wrapper">
        <section :class="$style.group">
            <div>
                <img src="https://plus.unsplash.com/premium_photo-1684746338578-4a8f89c62a91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" alt="">
                <article>
                    <small>3 Items</small>
                    <h3>Tomato Pizza Tomato Pizza</h3>
                </article>
            </div>
            <h3>$17.10</h3>
        </section>
        <section :class="$style.group">
            <article>
                <span>Shop</span>
                <p>
                    <h3>Shop Van Huy</h3>
                    <fa icon="circle-check"/>
                </p>
            </article>
            <article>
                <span>Now</span>
                <h3>Food on the way</h3>
            </article>
        </section>
        <section :class="$style.group">
            <Button name="Cancel"/>
            <Button name="Detail order" primary/>
        </section>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';

export default {
    name: "OrderItem",
    components: { Button }
}
</script>

<style lang="scss" module>
    @import "./OrderItem.module.scss"
</style>