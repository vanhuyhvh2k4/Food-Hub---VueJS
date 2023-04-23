<template>
    <div :class="$style.wrapper" @click="handleClick"></div>
</template>

<script>
export default {
    name: "Overlay",
    methods: {
        handleClick () {
            this.$emit("click-overlay");
        }
    },
}
</script>

<style lang="scss" module>
    @keyframes appear {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.5);
        animation: appear 0.2s linear;
    }
</style>