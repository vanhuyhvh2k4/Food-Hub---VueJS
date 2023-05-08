<template>
    <div :class="$style.wrapper">
        <figure :class="$style.info">
            <div :class="$style.info_avatar">
                <img :src="avatar" alt="avatar">
            </div>
            <article :class="$style.info_bio">
                <h2>{{ fullName }}</h2>
                <p>{{ email }}</p>
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
        },
        props: {
            fullName: {
                type: String,
                default: 'Ho Van Huy'
            },
            email: {
                type: String,
                default: 'vanhuy@gmail.com'
            },
            avatar: {
                type: String,
                default: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            }
        }
    }
</script>

<style lang="scss" module>
    @import "./Menu.module.scss"
</style>