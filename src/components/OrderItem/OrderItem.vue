<template>
    <div :class="$style.wrapper">
        <section :class="$style.group">
            <div>
                <img :src="image" alt="">
                <article>
                    <small>{{ quantity }} Items</small>
                    <h3>{{ foodName }}</h3>
                </article>
            </div>
            <h3>${{ price }}</h3>
        </section>
        <section :class="$style.group">
            <article>
                <span>Shop</span>
                <p>
                    <h3>{{ shopName }}</h3>
                    <fa v-if="isTick" icon="circle-check"/>
                </p>
            </article>
            <article>
                <span>Now</span>
                <h3>{{ status }}</h3>
            </article>
        </section>
        <section :class="$style.group">
            <Button :isDisabled="isDisabled" @click="handleCancelClick" name="Cancel"/>
            <Button @click="handleDetailClick" name="Detail order" primary/>
        </section>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';

export default {
    name: "OrderItem",
    components: { Button },
    props: {
        id: Number,
        quantity: {
            type: Number,
            default: ''
        },
        price: {
            type: Number,
            default: ''
        },
        shopName: {
            type: String,
            default: ''
        },
        status: {
            type: String,
            default: ''
        },
        foodName: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        isTick: {
            type: Boolean,
            default: false
        },
        isDisabled: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleCancelClick () {
            this.$emit('click-cancel', this.id);
        },
        handleDetailClick () {
            this.$emit('click-detail', this.id);
        },
    },
}
</script>

<style lang="scss" module>
    @import "./OrderItem.module.scss"
</style>