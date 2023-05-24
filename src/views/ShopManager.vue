<template>
    <main :class="$style.wrapper">
        <div v-if="isHasShop" :class="$style.list">
            <div v-for="item in listManager" :key="item.id">
                <ItemManager @click-item="handleClickItem" :id="item.id" :class="$style.item" :title="item.name" :image="item.image"/>
            </div>
        </div>
        <div :class="$style.no_shop" v-if="!isHasShop">
            <img style="width: 100px; height: 100px; object-fit: contain;" :src="restaurant" alt="">
            <h3>Create a shop</h3>
            <Button outline @click-btn="handleClickButtonCreateShop" name="Create now"/>
        </div>
    </main>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import ItemManager from '@/components/ItemManager/ItemManager.vue';
import shopManager from '@/composables/shopManager';

export default {
    name: "ShopManager",
    components: {
        Button,
        ItemManager
    },
    mixins: [shopManager]
}
</script>

<style lang="scss" module>
    @import "./scss/ShopManager.module.scss"
</style>