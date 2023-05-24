
import restaurant from '@/assets/images/restaurant.png'
import axiosJWT from '@/utils/refreshToken';
import listManager from '@/data/listManager.js';

export default {
    data() {
        return {
            isHasShop: false,
            listManager,
            restaurant
        };
    },
    methods: {
        async checkHasShop() {
            try {
                const response = await axiosJWT.get("http://localhost:3000/v1/api/shop/checkHasShop");
                if (response.data.code === "shop/checkHasShop.success.found") {
                    this.isHasShop = true;
                }
            } catch (error) {
                console.log(error);
            }
        },
        handleClickButtonCreateShop() {
            this.$router.push({
                name: 'createShop',
                params: {}
            })
        },
        handleClickItem(id) {
            this.$router.push(listManager[id - 1].path);
        }
    },
    mounted() {
        this.checkHasShop();
    },
}