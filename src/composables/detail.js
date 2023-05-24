import * as detailService from '@/services/detailService.js';
import axiosJWT from '@/utils/refreshToken';
import store from '@/Vuex/store.js';

export default {
    data() {
        const originPath = window.location.pathname;
        const formatPath = originPath.replace('/', '').replace('@', '').replaceAll('-', ' ').split('/')
        const shopName = formatPath[0];
        const foodName = formatPath[1];

        return {
            shopName,
            foodName,
            food: null,
            number: 1,
            addCart: {
                type: Boolean,
                default: false
            }
        }
    },
    methods: {
        async getFood() {
            const response = await detailService.getFood({
                params: {
                    shopName: this.shopName,
                    foodName: this.foodName
                }
            })
            if (response.code === 'food/getFood.success') {
                this.food = response.data
            } else {
                console.log(response);
            }
        },
        handleClickMinus () {
            if (this.number > 1) {
                this.number--;
            }
        },
        handleClickPlus () {
            this.number++;
        },
        handleClickShop () {
            this.$router.push(`/@${this.shopName.replaceAll(' ', '-')}`)
        },
        async handleClickCart () {
            try {
                this.addCart = true;
                await axiosJWT.post('http://localhost:3000/v1/api/checkout/cart', {
                    foodId: this.food.id,
                    quantity: this.number
                })
                setTimeout(() => {
                    this.addCart = false;
                }, 600);

                this.getNumberOfCart();
            } catch (error) {
                console.log(error);
            }
        },
        async getNumberOfCart () {
            try {
                const response = await axiosJWT.get('http://localhost:3000/v1/api/checkout/number');

                if (response.data.data.code === 'checkout/getNumber.success') {
                    store.commit('setNumberOfCart', response.data.data.num);
                }
            } catch (error) {
                console.log(error);
            }

        }
    },
    mounted() {
        this.getFood();
        this.getNumberOfCart();
    },
}