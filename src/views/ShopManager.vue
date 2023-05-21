<template>
    <main :class="$style.wrapper">
        <div v-if="isHasShop" :class="$style.list">
            <div v-for="item in listManager" :key="item.id">
                <ItemManager @click-item="handleClickItem" :id="item.id" :class="$style.item" :title="item.name" :image="item.image"/>
            </div>
        </div>
        <div :class="$style.no_shop" v-if="!isHasShop">
            <h3>Create a shop</h3>
            <Button outline @click-btn="handleClickButtonCreateShop" name="Create now"/>
        </div>
    </main>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import ItemManager from '@/components/ItemManager/ItemManager.vue';
import axiosJWT from '@/utils/refreshToken';
import listManager from '@/data/listManager.js';

export default {
    name: "ShopManager",
    data() {
        return {
            isHasShop: false,
            listManager
        };
    },
    methods: {
        async checkHasShop () {
            try {
                const response = await axiosJWT.get("http://localhost:3000/v1/api/shop/checkHasShop");
                if (response.data.code === "shop/checkHasShop.success.found") {
                    this.isHasShop = true;
                }
            }
            catch (error) {
                console.log(error);
            }
        },
        handleClickButtonCreateShop () {
            this.$router.push({name: 'createShop', params: {}})
        },
        handleClickItem (id) {
            this.$router.push(listManager[id - 1].path);
        }
    },
    mounted() {
        this.checkHasShop();
    },
    components: { Button, ItemManager}
}
</script>

<style lang="scss" module>
    @import "./scss/ShopManager.module.scss"
</style>