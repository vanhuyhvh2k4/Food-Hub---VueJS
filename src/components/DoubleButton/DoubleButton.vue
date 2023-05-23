<template>
    <div :class="$style.wrapper">
        <button v-bind:class="click === 'left' ? $style.active : ''" @click="handleClickLeft">{{ titles[0] }}</button>
        <button v-bind:class="click === 'right' ? $style.active : ''" @click="handleClickRight">{{ titles[1] }}</button>
    </div>
</template>

<script>
export default {
    props: {
        titles: {
            type: Array,
            default: ['FoodItems', 'Restaurants']
        }
    },
    data() {
        return {
            click: 'left',
        }
    },
    methods: {
        handleClickLeft () {
            this.click = 'left';
            this.$emit('click-left');
        },
        handleClickRight () {
            this.$emit('click-right');
            this.click = 'right';
        }
    },
}
</script>

<style lang="scss" module>
    @import './DoubleButton.module.scss'
</style>