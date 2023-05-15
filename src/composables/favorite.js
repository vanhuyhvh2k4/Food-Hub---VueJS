import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import FoodItem from '@/components/FoodItem/FoodItem.vue';
import axiosJWT from '@/utils/refreshToken';
import Cookies from 'js-cookie';

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
            .catch(err => console.error(err))
        },
        getFavoriteShop () {
            axiosJWT.get('http://localhost:3000/v1/api/favorite/getFavoriteShop')
            .then(response => this.shops = response.data.data.shopList)
            .catch(err => console.error(err))
        },
        handleClickFood (foodName, shopName) {
            this.$router.push(`/@${shopName.replaceAll(" ", "-")}/${foodName.replaceAll(" ", "-")}`)
        },
        handleClickShop (shopName) {
            this.$router.push(`/@${shopName.replaceAll(" ", "-")}`)
        }
    },
    data() {
        return {
            click: 'left',
            foods: [],
            shops: [],
        }
    },
    mounted() {
        this.getFavoriteFood();

        this.getFavoriteShop();
    },
}