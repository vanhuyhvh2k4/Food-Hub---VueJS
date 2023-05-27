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
       <router-link :to="routesConfig.cart">
            <section :data-cart-number="numberOfCart" :class="[$style.cart, $route.path === routesConfig.cart ? $style.active : '']">
                <fa icon="bag-shopping" />
            </section>
       </router-link>
        <router-link :to="routesConfig.favorite">
            <section :class="$route.path === routesConfig.favorite ? $style.active : ''">
                <fa icon="heart" />
            </section>
        </router-link>
        <router-link :to="routesConfig.shopManager">
            <section :class="$route.path === routesConfig.shopManager ? $style.active : ''">
                <fa icon="store" />
            </section>
        </router-link>
    </div>
</template>

<script>
    import routesConfig from '@/config/routes';
    export default {
        name: 'Navigation',
        props: {
            numberOfCart: {
                type: Number,
                default: ''
            }
        },
        components: {},
        data() {
            return {
                routesConfig
            }
        },
        computed: {
            
        },
    }
</script>

<style lang="scss" module>
    @import "./Navigation.module.scss"
</style>