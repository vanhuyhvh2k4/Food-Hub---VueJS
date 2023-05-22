import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import FoodItem from '@/components/FoodItem/FoodItem.vue';
import axiosJWT from '@/utils/refreshToken';
import food from '@/assets/images/new-food.png';
import restaurant from '@/assets/images/restaurant.png';

export default {
    components: {
        DoubleButton,
        FoodItem
    },
    methods: {
        handleClickLeft() {
            this.click = 'left';
        },
        handleClickRight() {
            this.click = 'right';
        },
        getFavoriteFood () {
            axiosJWT.get('http://localhost:3000/v1/api/favorite/getFavoriteFood')
            .then(response => this.foods = response.data.data.foodList)
            .catch(err => {
                this.foods = [];
                console.error(err)
            })
        },
        getFavoriteShop () {
            axiosJWT.get('http://localhost:3000/v1/api/favorite/getFavoriteShop')
            .then(response => {
                this.shops = response.data.data.shopList
            })
            .catch(err => {
                this.shops = [];
                console.error(err)
            })
        },
        handleClickFood (foodName, shopName) {
            this.$router.push(`/@${shopName.replaceAll(" ", "-")}/${foodName.replaceAll(" ", "-")}`)
        },
        handleClickShop (shopName) {
            this.$router.push(`/@${shopName.replaceAll(" ", "-")}`)
        },
        async handleClickLikeShop (id, isLike) {
            await axiosJWT.patch(`http://localhost:3000/v1/api/shop/changeLike/${id}`, {
                statusLike: isLike
            })

            this.getFavoriteShop();
        },
        async handleClickLikeFood(id, isLike) {
            await axiosJWT.patch(`http://localhost:3000/v1/api/food/changeLike/${id}`, {
                statusLike: isLike
            })

            this.getFavoriteFood();
        }
    },
    data() {
        return {
            click: 'left',
            foods: [],
            shops: [],
            food,
            restaurant
        }
    },
    mounted() {
        this.getFavoriteFood();

        this.getFavoriteShop();
    },
}