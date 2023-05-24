
import * as shopService from '@/services/shopService.js';
import axiosJWT from '@/utils/refreshToken';

export default {
    methods: {
        async getInfo() {
            const response = await shopService.getInfo({
                params: {
                    shopName: this.formatPath
                }
            })
            if (response.code === 'shop/getInfo.success') {
                this.shopInfo = response.data
            } else {
                console.log(response);
            }
        },

        getFood() {
            axiosJWT.get('http://localhost:3000/v1/api/shop/food', {
                    params: {
                        shopName: this.formatPath
                    }
                })
                .then(response => this.foodList = response.data.data.foodList)
                .catch(err => console.log(err))
        },

        handleClickFoodItem(foodName) {
            const currentPath = window.location.pathname;
            this.$router.push(currentPath + `/${foodName.replaceAll(' ', '-')}`)
        }
    },
    mounted() {
        this.getInfo();

        this.getFood();

    },
    data() {
        const originPath = window.location.pathname;

        const formatPath = originPath.replace('@', '').replaceAll('/', '').split('-').join(' ');

        return {
            formatPath,
            foodList: [],
            shopInfo: null,
        }
    },
}