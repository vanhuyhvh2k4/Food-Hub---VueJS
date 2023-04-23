<template>
    <div :class="$style.wrapper">
        <section>
            <fa icon="compass" />
        </section>
        <section>
            <fa icon="location-dot" />
        </section>
        <section>
            <fa icon="bag-shopping" />
        </section>
        <section>
            <fa icon="heart" />
        </section>
        <section>
            <fa icon="bell" />
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        components: {}
    }
</script>

<style lang="scss" module>
    @import "./Navigation.module.scss"
</style>