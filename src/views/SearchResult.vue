<template>
    <main :class="$style.wrapper">
        <Search @enter-input="handleInputEnter" filter :class="$style.search" autofocus/>
        <DoubleButton :class="$style.button"/>
        <article :class="$style.title" v-if="!noResult">
            <h3><span style="color: var(--primary-color);">{{ length }}</span> results</h3>
        </article>

        <div :class="$style.list" v-if="listFood.length && !noResult">
            <div v-for="item in listFood" :key="item.id" :class="$style.item">
                <FoodItem @click-item="handleClickFood" @click-like="handleClickLike" short-food :class="$style.child" :id="item.id" :shop-name="item.shopName" :image="item.image" :title="item.name" :desc="item.description" :place="item.place" :numOfRatings="item.price" :isLike="item.liked === 0 ? false : true"/>
            </div>
        </div>
        <div v-if="noResult">
            <h3>We dont found the result</h3>
        </div>
        <Loader v-if="isLoading"/>
    </main>
</template>

<script>
import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import FoodItem from '@/components/FoodItem/FoodItem.vue';
import Loader from '@/components/Loader/Loader.vue';
import Search from '@/components/Search/Search.vue';
import axiosJWT from '@/utils/refreshToken';

export default {
    name: "SearchResult",
    components: { FoodItem, Search, DoubleButton, Loader },
    data() {
        const originalUrl = window.location.href;
        const urlFormat = originalUrl.split('?')[1].replace('q=', '').replaceAll('-', ' ').trim();
        return {
            urlFormat,
            listFood: [],
            isLoading: false,
            length: null,
            noResult: false,
        }
    },
    methods: {
        getFood (keyword) {
            this.isLoading = true;
            axiosJWT.get('http://localhost:3000/v1/api/search/result', {
                params: {
                    keyword: keyword
                }
            })
            .then(res => {
                this.isLoading = false;
                this.listFood = res.data.data;
                this.length = res.data.data.length;
            })
            .catch(err => {
                this.isLoading = false;
                this.noResult = true;
                console.log(err)
            })
        },
        handleClickFood (foodName, shopName) {
            this.$router.push(`/@${shopName.replaceAll(' ', '-').trim()}/${foodName.replaceAll(' ', '-').trim()}`)
        },
        async handleClickLike (foodId, isLike) {
            try {
                await axiosJWT.patch(`http://localhost:3000/v1/api/food/changeLike/${foodId}`, {
                    statusLike: isLike
                })

                this.getFood(this.urlFormat);
            } catch (error) {
                console.log(error);
            }
        },
        handleInputEnter (value) {
            this.urlFormat = value.replaceAll(' ', '-').trim();

            this.getFood(this.urlFormat);
        }
    },
    mounted() {
        this.getFood(this.urlFormat);
    }
}
</script>

<style lang="scss" module>
    .wrapper {
        margin-top: var(--content-margin-top);
        margin-bottom: var(--content-margin-bottom);
    }

    .search {
        margin-bottom: 24px;
    }

    .button {
        margin-bottom: 24px;
    }

    .title {
        width: 50%;
        transform: translateY(100%);
        padding-left: 12px;
    }

    .list {
        display: flex;
        width: 100%;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .item {
        width: 50%;
        padding: 0 6px;
        margin-bottom: 12px;
        
        & > .child {
            width: 100%;
        }
    }

    .item:nth-of-type(2n - 1) {
        transform: translateY(20%);
    }

</style>