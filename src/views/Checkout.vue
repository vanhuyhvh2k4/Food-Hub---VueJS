<template>
    <main :class="$style.wrapper" v-if="billInfo !== null">
        <CartItem :class="$style.cart" noButton :name="billInfo.name" :quantity="billInfo ? parseInt(billInfo.quantity) : ''" :price="billInfo ? parseFloat(billInfo.price) : ''" :image="billInfo.image"/>
        <ul :class="$style.bill">
            <li>
                <article>
                    <h3>Each Item</h3>
                </article>
                <article>
                    <h3>${{ billInfo.price }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Quantity</h3>
                </article>
                <article>
                    <h3>x</h3>
                    <span>{{ billInfo.quantity }}</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Total of food</h3>
                </article>
                <article>
                    <h3>${{ billInfo.totalOfFood }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Ship Fee</h3>
                </article>
                <article>
                    <h3>${{ billInfo.shipFee }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Total must pay <small style="color: var(--text-muted); font-weight: 400;">(food + ship)</small></h3>
                </article>
                <article>
                    <h3>${{ billInfo.total }}</h3>
                    <span>USD</span>
                </article>
            </li>
        </ul>
        <Button @click-btn="handleClickCheckout" primary name="Check Out" :class="$style.button"/>
        <Loader v-if="isLoading"/>
    </main>
</template>

<script>
import Loader from '@/components/Loader/Loader.vue';
import Button from '@/components/Button/Button.vue';
import CartItem from '@/components/CartItem/CartItem.vue';
import checkout from '@/composables/checkout'; 

export default {
    name: "Checkout",
    components: {
        CartItem,
        Button,
        Loader,
    },
    mixins: [checkout],
}
</script>

<style lang="scss" module>
    @import "./scss/Checkout.module.scss"
</style>