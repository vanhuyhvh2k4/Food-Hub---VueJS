<template>
    <div :class="$style.wrapper">
        <button v-bind:class="click === 'left' ? $style.active : ''" @click="handleClickLeft">Food Items</button>
        <button v-bind:class="click === 'right' ? $style.active : ''" @click="handleClickRight">Restaurants</button>
    </div>
</template>

<script>
export default {
    name: 'DoubleButton',
    props: {
        click: {
            type: String,
            default: ''
        },
    },
    methods: {
        handleClickLeft () {
            this.$emit('click-left');
        },
        handleClickRight () {
            this.$emit('click-right');
        }
    },
}
</script>

<style lang="scss" module>
    @import './DoubleButton.module.scss'
</style>