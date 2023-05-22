<template>
    <div :class="$style.wrapper">
        <section @click="handleClickLeft" :class="$style.group_left">
            <div>
                <img :src="image" alt="">
            </div>
            <article>
                <h2 :title="name">{{ name }}</h2>
                <p>
                    <h3>Quantity: </h3>
                    <h3 style="color: var(--primary-color);">{{ quantity }}</h3>
                </p>
                <b>${{ price }}</b>
            </article>
        </section>
        <section v-if="!noButton" :class="$style.group_right">
                <fa @click="handleClickClose" icon="times"/>
                <Button @click-btn="handleClickCheckout" primary name="Checkout"/>
        </section>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';

export default {
    name: "CartItem",
    components: { Button },
    props: {
        id: Number,
        shopName: String,
        image: {
            type: String,
            default: ''
        },
        name: {
            type: String,
            default: ''
        },
        quantity: {
            type: Number,
            default: ''
        },
        price: {
            type: Number,
            default: ''
        },
        noButton: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleClickLeft () {
            this.$emit('click-info', this.shopName, this.name)
        },
        handleClickClose () {
            this.$emit('click-close', this.id)
        },
        handleClickCheckout () {
            this.$emit('click-checkout', this.id)
        }
    },
}
</script>

<style lang="scss" module>
    @import './CartItem.module.scss'
</style>