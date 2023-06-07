<template>
    <main :class="$style.wrapper">
        <Search 
            @click-apply="handleClickApply"
            @click-reset="handleClickReset"
            :least_one="!!least_one"
            filter 
            placeholder="Enter the name of shop"
            >
            <div :class="$style.popup_content">
                <section :class="$style.popup_content_group">
                    <h4>Category:</h4>
                    <GroupButton @click-btn="handleClickCategory" ref="group_button_category" current="none" :titles="['Burger', 'Donat', 'Pizza', 'Hotdog', 'Bread', 'Icecream']"/>
                </section>
                <section :class="$style.popup_content_group">
                    <h4>Place:</h4>
                    <select @click="handleClickPlace" v-model="place">
                        <option v-for="(item) in listCites" :key="item.city" :value="item.city">{{ item.city }}</option>
                    </select>
                </section>
                <section :class="$style.popup_content_group">
                    <h4>Rating:</h4>
                    <GroupButton @click-btn="handleClickRating" ref="group_button_rating" current="none" :titles="['1 star', '2 star', '3 star', '4 star', '5 star',]"/>
                </section>
                <section :class="$style.popup_content_group">
                    <h4>Ship fee:</h4>
                    <GroupButton @click-btn="handleClickFee" ref="group_button_fee" current="none" :titles="['Free', 'smaller $10', 'greater $10']"/>
                </section>
            </div>
        </Search>
        <ul :class="$style.list">
            <li>
                <ShopItem/>
            </li>
        </ul>
    </main>
</template>

<script>
import GroupButton from '@/components/GroupButton/GroupButton.vue';
import Loader from '@/components/Loader/Loader.vue';
import Search from '@/components/Search/Search.vue';
import ShopItem from '@/components/ShopItem/ShopItem.vue';
import listCites from '@/data/city.js';

export default {
    name: "AllShop",
    components: { ShopItem, Search, GroupButton, Loader },
    data() {
        return {
            listCites,
            category: null,
            place: null,
            rating: null,
            ship_fee: null,
            least_one: true,
        }
    },
    methods: {
        handleClickCategory (index, name) {
            if (name) {
                this.least_one = false;
                this.category = name;
            }
        },
        handleClickPlace () {
            if (this.place) {
                this.least_one = false;
            }
        },
        handleClickRating (index, name) {
            if (name) {
                this.least_one = false;
                this.rating = parseInt(name.split(" ")[0]);
            }
        },
        handleClickFee (index, name) {
            if (name) {
                this.least_one = false;
                this.ship_fee = name;
            }
        },
        handleClickApply () {

        },
        handleClickReset () {
            this.least_one = true;
            this.$refs['group_button_category'].resetCurrent();
            this.$refs['group_button_rating'].resetCurrent();
            this.$refs['group_button_fee'].resetCurrent();
            this.category = null;
            this.rating = null;
            this.ship_fee = null;
            this.place = null;
        }
    },
}
</script>

<style lang="scss" module>
    @import "./scss/AllShop.module.scss"
</style>