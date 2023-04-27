<template>
    <div :class="$style.wrapper">
        <div v-if="statusOfMenu" :key="statusOfMenu" :class="$style.modal">
            <Overlay @click-overlay="toggleMenuButton"/>
            <Menu :class="$style.menu"/>
        </div>
        <Header :class="$style.header" @click-menu-button="toggleMenuButton"/>
        <slot></slot>
        <Navigation :class="$style.navigation"/>
    </div>
</template>

<script>
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
    }
</script>

<style lang="scss" module>
    .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 0px var(--global-padding);
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