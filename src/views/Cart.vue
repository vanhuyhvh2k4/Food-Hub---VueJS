<template>
    <main :class="$style.wrapper">
        <header v-if="listCart.length">
            <article>
                <h3>My Cart:</h3>
                <h3 style="color: var(--primary-color);">{{ numberOfCart ? numberOfCart : ''}} Items</h3>
            </article>
            <article>
                <h3>Total:</h3>
                <h3 style="color: var(--primary-color);">${{ total ? total : '' }}</h3>
            </article>
        </header>
        <div v-if="listCart.length">
            <li v-for="item in listCart" :key="item.id">
                <CartItem @click-info="handleClickInfo" @click-close="handleClickClose"
                    @click-checkout="handleClickCheckout" :id="item.id" :shopName="item.shopName" :image="item.image"
                    :name="item.name" :quantity="item.quantity" :price="item.price" />
            </li>
        </div>
        <NotFound v-if="!listCart.length" :image="cart" title="Not found any food" small="Let buy something"/>
    </main>
</template>

<script>
    import CartItem from '@/components/CartItem/CartItem.vue';
    import NotFound from '@/components/NotFound/NotFound.vue';
    import cart from '@/composables/cart';

    export default {
        name: "Cart",
        components: {
    CartItem,
    NotFound
},
        mixins: [cart],
    }
</script>

<style lang="scss" module>
    @import "./scss/Cart.module.scss"
</style>