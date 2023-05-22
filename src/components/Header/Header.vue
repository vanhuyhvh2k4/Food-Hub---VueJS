<template>
    <header :class="$style.wrapper" v-bind:class="headerTransparent && $style.header_transparent">
        <section :class="$style.icon" @click="handleMenuButton">
            <div v-if="!onlyBtn && !buttonAndTitle && !buttonAndCart" :id="$style.menu"></div>
            <div v-if="onlyBtn || buttonAndTitle || buttonAndCart" :id="$style.cancel"></div>
        </section>
        <section v-if="buttonAndTitle" :class="$style.title">
            <h3>{{ title }}</h3>
        </section>
        <section v-if="!onlyBtn && !buttonAndTitle && !buttonAndCart" :class="$style.text">
            <p>
                <h5>Deliver to</h5>
                <fa icon="chevron-down" :class="$style.iconChevron"/>
            </p>
            <h4>4102 Pretty View Lane</h4>
        </section>
        <section @click="handleClickImage" v-if="!onlyBtn && !buttonAndTitle && !buttonAndCart" :class="$style.avatar">
            <img :src="avatar" alt="avatar">
        </section>
        <section @click="handleClickCart" v-if="buttonAndCart" :class="$style.cart" :data-number-of-cart="numberOfCart">
            <fa icon="cart-shopping"/>
        </section>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        methods: {
            handleMenuButton () {
                this.$emit('click-menu-button')
            },
            handleClickImage () {
                this.$emit('click-image')
            },
            handleClickCart () {
                this.$emit('click-cart')
            }
        },
        props: {
            avatar: {
                type: String,
                default: 'https://images.unsplash.com/photo-1683524430079-d45876f50fed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
            },
            onlyBtn: {
                type: Boolean,
                default: false
            },
            buttonAndTitle :{
                type: Boolean,
                default: false
            },
            buttonAndCart: {
                type: Boolean,
                default: false
            },
            headerTransparent: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: 'Favorite food'
            },
            numberOfCart: {
                type: Number,
                default: 2
            }
        }
    }
</script>

<style lang="scss" module>
    @import "./Header.module.scss"
</style>