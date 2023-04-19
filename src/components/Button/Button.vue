<template>
    <button :class="[$style.wrapper]">
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
            isActive: Boolean,
        }
    }
</script>

<style module lang="scss">
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--light-color);
        border: unset;
        border-radius: 28px;
        gap: 10px;
        cursor: pointer;
    }

    .wrapper > h3 {
        font-size: 1.3rem;
        line-height: 1.3rem;
        font-weight: 500;
        letter-spacing: 1px;
    }
</style>