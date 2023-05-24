import Button from '@/components/Button/Button.vue';
import CartItem from '@/components/CartItem/CartItem.vue';
import axiosJWT from '@/utils/refreshToken';

export default {
    components: {
        CartItem,
        Button
    },
    data() {
        const originalUrl = window.location.href;
        const formatUrl = originalUrl.split('?')[1].replace('ci=', '').trim();
        return {
            formatUrl,
            billInfo: {},
        }
    },
    methods: {
        getBill() {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/bill', {
                    params: {
                        cartId: this.formatUrl
                    }
                })
                .then(response => {
                    this.billInfo = response.data.data.bill;
                })
                .catch(error => console.log(error))
        },
        handleClickCheckout() {
            axiosJWT.post('http://localhost:3000/v1/api/checkout/order', {
                    cartId: this.billInfo.id,
                    foodId: this.billInfo.foodId,
                    quantity: this.billInfo.quantity,

                })
                .then(response => console.log(response))
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getBill();
    },
}