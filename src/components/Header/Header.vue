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
            <img src="@/assets/images/Avatar.jpg" alt="avatar">
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
    }
</script>

<style lang="scss" module>
    @import "./Header.module.scss"
</style>