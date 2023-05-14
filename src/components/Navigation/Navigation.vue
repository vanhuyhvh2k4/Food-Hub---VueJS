<template>
    <div :class="$style.wrapper">
        <router-link to="/">
            <section :class="$route.path === '/' ? $style.active : ''">
                <fa icon="compass" />
            </section>
        </router-link>
        <section>
            <fa icon="location-dot" />
        </section>
        <section>
            <fa icon="bag-shopping" />
        </section>
        <router-link to="/favorite">
            <section :class="$route.path === '/favorite' ? $style.active : ''">
                <fa icon="heart" />
            </section>
        </router-link>
            <section>
            <fa icon="bell" />
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Navigation',
        components: {},
    }
</script>

<style lang="scss" module>
    @import "./Navigation.module.scss"
</style>