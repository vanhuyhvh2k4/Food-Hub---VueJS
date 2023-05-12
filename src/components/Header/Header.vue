<template>
    <header :class="$style.wrapper" v-bind:class="headerTransparent && $style.header_transparent">
        <section :class="$style.icon" @click="handleMenuButton">
            <div v-if="!onlyBtn" :id="$style.menu"></div>
            <div v-if="onlyBtn" :id="$style.cancel"></div>
        </section>
        <section v-if="!onlyBtn && !noAvatar" :class="$style.text">
            <p>
                <h5>Deliver to</h5>
                <fa icon="chevron-down" :class="$style.iconChevron"/>
            </p>
            <h4>4102 Pretty View Lane</h4>
        </section>
        <section v-if="!onlyBtn" :class="$style.avatar">
            <img :src="avatar" alt="avatar">
        </section>
    </header>
</template>

<script>

    export default {
        name: 'Header',
        methods: {
            handleMenuButton () {
                this.$emit('click-menu-button')
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
            noAvatar: {
                type: Boolean,
                default: false
            },
            headerTransparent: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" module>
    @import "./Header.module.scss"
</style>