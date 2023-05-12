<template>
    <div :class="$style.wrapper">
        <div v-if="statusOfMenu" :key="statusOfMenu" :class="$style.modal">
            <Overlay @click-overlay="toggleMenuButton"/>
            <Menu :class="$style.menu" :avatar="currentUser ? currentUser.avatar : ''" :fullName="currentUser ? currentUser.fullName : ''" :email="currentUser ? currentUser.email : ''"/>
        </div>
        <Header :headerTransparent="$route.meta.onlyBtn" :onlyBtn="$route && $route.meta.onlyBtn" :class="$style.header" @click-menu-button="toggleMenuButton" :avatar="currentUser ? currentUser.avatar : ''"/>
        <slot></slot>
        <Navigation v-if="$route && !$route.meta.noNavigation" :class="$style.navigation"/>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
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
                this.statusOfMenu = !this.statusOfMenu;
            }
        },
        computed: {
            ...mapState({
                currentUser: state => state.currentUser
            }),
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
    }

    .navigation {
        position: fixed;
        width: 100%;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>