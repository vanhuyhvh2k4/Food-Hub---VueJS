<template>
    <div :class="$style.wrapper">
        <div>
            <img :src="logo" alt="">
        </div>
    </div>
</template>

<script>
import logo from '@/assets/images/logo.png';

export default {
    name: "Intro",
    data() {
        return {
            logo
        }
    },
}
</script>

<style lang="scss" module>
    .wrapper {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: var(--primary-color);
        display: grid;
        place-items: center;
    }
</style>