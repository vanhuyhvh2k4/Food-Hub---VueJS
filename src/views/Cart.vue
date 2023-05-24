<template>
    <main :class="$style.wrapper">
        <header v-if="!cartEmpty">
            <article>
                <h3>My Cart:</h3>
                <h3 style="color: var(--primary-color);">{{ numberOfCart ? numberOfCart : ''}} Items</h3>
            </article>
            <article>
                <h3>Total:</h3>
                <h3 style="color: var(--primary-color);">${{ total ? total : '' }}</h3>
            </article>
        </header>
        <div v-if="!cartEmpty">
            <li v-for="item in listCart" :key="item.id">
                <CartItem @click-info="handleClickInfo" @click-close="handleClickClose"
                    @click-checkout="handleClickCheckout" :id="item.id" :shopName="item.shopName" :image="item.image"
                    :name="item.name" :quantity="item.quantity" :price="item.price" />
            </li>
        </div>
        <div :class="$style.cart_empty" v-if="cartEmpty">
            <img :src="cart" alt="">
            <h2>Not found any food</h2>
            <small>Let add a food to cart</small>
        </div>
    </main>
</template>

<script>
    import CartItem from '@/components/CartItem/CartItem.vue';
    import cart from '@/composables/cart';

    export default {
        name: "Cart",
        components: {
            CartItem
        },
        mixins: [cart],
    }
</script>

<style lang="scss" module>
    @import "./scss/Cart.module.scss"
</style>