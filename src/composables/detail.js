import * as detailService from '@/services/detailService.js';
import Button from '@/components/Button/Button.vue';

export default {
    components: {
        Button
    },
    data() {
        const originPath = window.location.pathname;
        const formatPath = originPath.replace('/', '').replace('@', '').replaceAll('-', ' ').split('/')
        const shopName = formatPath[0];
        const foodName = formatPath[1];

        return {
            shopName,
            foodName,
            food: null
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
        }
    },
    mounted() {
        this.getFood()
    },
}