<template>
    <div :class="$style.wrapper">
        <figure :class="$style.info">
            <div :class="$style.info_avatar">
                <img src="@/assets/images/Avatar.jpg" alt="avatar">
            </div>
            <article :class="$style.info_bio">
                <h2>Farion Wick</h2>
                <p>farionwick@gmail.com</p>
            </article>
        </figure>
        <ul :class="$style.menu_list">
            <li v-for="(item) in menuData" :key="item.id">
                <MenuItem :class="$style.menu_item" :title="item.title">
                    <SVGIconVue :icon="item.icon"/>
                </MenuItem>
            </li>
        </ul>
        <Button name="Logout" primary :class="$style.button">
            <div :class="$style.wrapper_icon">
                <fa icon="power-off"/>
            </div>
        </Button>
    </div>
</template>

<script>
    import { message } from '@/assets/icons';
    import menuData from '@/data/menu.js';
    import SVGIconVue from '../SVGIcon/SVGIcon.vue';
    import MenuItem from '../MenuItem/MenuItem.vue';
    import Button from '@/components/Button/Button.vue';

    export default {
        name: "Menu",
        components: {
            MenuItem,
            message,
            SVGIconVue,
            Button,
        },
        setup () {
            return {
                menuData
            }
        }
    }
</script>

<style lang="scss" module>
    @import "./Menu.module.scss"
</style>