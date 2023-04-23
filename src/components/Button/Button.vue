<template>
    <button :class="[$style.wrapper, primary ? $style.active : '', outline ? $style.outline : '']">
        <slot v-if="!onlyTitle"></slot>
        <h3 v-if="!onlyIcon">{{ name }}</h3>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            name: String,
            onlyTitle: Boolean,
            onlyIcon: Boolean,
            primary: Boolean,
            outline: Boolean,
        }
    }
</script>

<style module lang="scss">
    @import './Button.module.scss'
</style>