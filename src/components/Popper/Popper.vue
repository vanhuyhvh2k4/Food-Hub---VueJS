<template>
    <div :class="$style.wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name : "Popper",
}
</script>

<style lang="scss" module>
    .wrapper {
    background-color: var(--light-color);
    border-radius: 12px;
    border: 1px solid #eee;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.1);
    z-index: 10;
    }
</style>