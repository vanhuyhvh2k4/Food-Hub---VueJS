<template>
    <div :class="$style.wrapper">
        <router-link :to="routesConfig.home">
            <section :class="$route.path === routesConfig.home ? $style.active : ''">
                <fa icon="compass" />
            </section>
        </router-link>
        <section>
            <fa icon="location-dot" />
        </section>
        <section>
            <fa icon="bag-shopping" />
        </section>
        <router-link :to="routesConfig.favorite">
            <section :class="$route.path === routesConfig.favorite ? $style.active : ''">
                <fa icon="heart" />
            </section>
        </router-link>
        <router-link :to="routesConfig.createShop">
            <section :class="$route.path === routesConfig.createShop ? $style.active : ''">
                <fa icon="store" />
            </section>
        </router-link>
    </div>
</template>

<script>
    import routesConfig from '@/config/routes';
    export default {
        name: 'Navigation',
        components: {},
        data() {
            return {
                routesConfig
            }
        },
    }
</script>

<style lang="scss" module>
    @import "./Navigation.module.scss"
</style>