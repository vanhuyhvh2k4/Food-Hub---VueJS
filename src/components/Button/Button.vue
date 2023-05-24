<template>
    <button :type="type" v-bind:class="onlyIcon ? $style.only_icon : ''" :class="[$style.wrapper, primary ? $style.active : '', outline ? $style.outline : '', muted ? $style.muted : '']" :title="title" @click="hanleClick" :disabled="isDisabled">
        <slot v-if="!onlyTitle"></slot>
        <h3 v-if="!onlyIcon">{{ name }}</h3>
    </button>
</template>

<script>
    export default {
        name: 'Button',
        props: {
            type: {
                type: String,
                default: 'button'
            },
            name: String,
            onlyTitle: Boolean,
            onlyIcon: Boolean,
            primary: Boolean,
            outline: Boolean,
            muted: Boolean,
            title: String,
            isDisabled: Boolean,
        },
        methods: {
            hanleClick () {
                this.$emit('click-btn')
            }
        },
    }
</script>

<style module lang="scss">
    @import './Button.module.scss'
</style>