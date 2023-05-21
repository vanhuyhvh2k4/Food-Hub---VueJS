<template>
    <div :class="$style.wrapper">
        <span :class="$style.loader"></span>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style lang="scss" module>
    @import "./Loader.module.scss"
</style>