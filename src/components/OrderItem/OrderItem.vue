<template>
    <div :class="$style.wrapper">
        <section :class="$style.group">
            <div>
                <img :src="image" alt="">
                <article>
                    <small> <span v-if="time">{{ time }} | </span>{{ quantity }} Items</small>
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
                <span>Status</span>
                <h3 :class="[status === 'waiting confirm' && $style.confirm, status === 'preparing' && $style.preparing, status === 'on the way' && $style.onway, status === 'canceled' && $style.cancel, status === 'finished' && $style.finished]">{{ status }}</h3>
            </article>
        </section>
        <section :class="$style.group">
            <Button 
                v-if="!time" 
                :isDisabled="isDisabled" 
                @click="handleCancelClick" 
                name="Cancel"
            />
            <Button 
                v-if="time && status === 'finished'" 
                :outline="isRated" 
                @click="!isRated ? handleRatingClick() : handleReOrderClick()" 
                :name="isRated ? 'Re-Order' : 'Rating'"
            />
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
        isRated: Boolean,
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
        },
        time: {
            type: String,
            default: ''
        },
    },
    methods: {
        handleCancelClick () {
            this.$emit('click-cancel', this.id, this.status);
        },
        handleDetailClick (status) {
            this.$emit('click-detail', this.id, status);
        },
        handleRatingClick () {
            this.$emit('click-rating', this.id, this.status);
        },
        handleReOrderClick () {
            this.$emit('click-reorder', this.shopName, this.foodName);
        }
    },
}
</script>

<style lang="scss" module>
    @import "./OrderItem.module.scss"
</style>