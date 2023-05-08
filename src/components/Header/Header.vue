<template>
    <header :class="$style.wrapper">
        <section :class="$style.icon" @click="handleMenuButton">
            <div></div>
        </section>
        <section :class="$style.text">
            <p>
                <h5>Deliver to</h5>
                <fa icon="chevron-down" :class="$style.iconChevron"/>
            </p>
            <h4>4102 Pretty View Lane</h4>
        </section>
        <section :class="$style.avatar">
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
            }
        }
    }
</script>

<style lang="scss" module>
    @import "./Header.module.scss"
</style>