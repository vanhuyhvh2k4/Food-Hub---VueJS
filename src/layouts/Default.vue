<template>
    <div :class="$style.wrapper">
        <div v-if="statusOfMenu && !$route.meta.backHome" :key="statusOfMenu" :class="$style.modal">
            <Overlay @click-overlay="toggleMenuButton"/>
            <Menu :class="$style.menu" :avatar="currentUser ? currentUser.avatar : ''" :fullName="currentUser ? currentUser.fullName : ''" :email="currentUser ? currentUser.email : ''"/>
        </div>
        <Header :headerTransparent="$route.meta.onlyBtn || $route.meta.headerTransparent" :onlyBtn="$route && $route.meta.onlyBtn" :buttonAndTitle="$route && $route.meta.buttonAndTitle" :buttonAndCart="$route && $route.meta.buttonAndCart" :class="[$style.header, $route.meta.noFixed ? $style.no_fixed : '']" @click-menu-button="toggleMenuButton" @click-image="handleClickImage" @click-cart="handleClickCart" :avatar="currentUser ? currentUser.avatar : ''" :title="$route.meta.titleOfHeader ? $route.meta.titleOfHeader : ''" :numberOfCart="numberOfCart ? numberOfCart : 0"/>
        <slot></slot>
        <Navigation v-if="$route && !$route.meta.noNavigation" :class="$style.navigation"/>
    </div>
</template>

<script>
    import {useRoute} from 'vue-router'
    import Header from '@/components/Header/Header.vue';
    import Navigation from '@/components/Navigation/Navigation.vue';
    import Menu from '@/components/Menu/Menu.vue';
    import Overlay from '@/components/Overlay/Overlay.vue';
    
    export default {
        name: 'DefaultLayout',
        components: {
            Header,
            Navigation,
            Menu,
            Overlay,
        },
        setup() {
            const route = useRoute();
            return route;
        },
        data() {
            return {
                statusOfMenu: false,
            }
        },
        methods: {
            toggleMenuButton () {
                if (this.$route.meta.backHome) {
                    this.statusOfMenu = false;
                    this.$router.push({
                        name: 'home',
                        params: {}
                    });
                } else {
                    this.statusOfMenu = !this.statusOfMenu;
                }
            },
            handleClickImage () {
                this.$router.push({name: 'profile', params: {}})
            },
            handleClickCart () {
                this.$router.push({name: 'cart', params: {}})
            }
        },
        computed: {
            currentUser() {
                return this.$store.state.currentUser;
            },
            numberOfCart() {
                return this.$store.state.numberOfCart;
            }
        },
    }
</script>

<style lang="scss" module>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0px var(--global-padding);
        overflow-y: overlay;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 11;
    }

    .menu {
        position: absolute;
        width: 60%;
        height: 100%;
    }

    .header {
        position: fixed ;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;

        &.no_fixed {
            position: absolute;
        }
    }

    .navigation {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>