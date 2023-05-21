<template>
    <div @click="handleClickItem" :class="$style.wrapper">
        <slot v-if="!iconRight"></slot>
        <h3 :class="$style.title">{{ title }}</h3>
        <slot v-if="iconRight"></slot>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        iconRight: Boolean,
        title: {
            type: String,
            default: "title of menu"
        },
    },
    methods: {
        handleClickItem () {
            this.$emit("click-item", this.title)
        }
    },
}
</script>

<style lang="scss" module>
    @import "./MenuItem.module.scss"
</style>