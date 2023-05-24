
import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        const originalUrl = window.location.href;
        const formatUrl = originalUrl.split('?')[1].replace('ci=', '').trim();
        return {
            formatUrl,
            billInfo: {},
            isLoading: false,
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
            this.isLoading = true;
            axiosJWT.post('http://localhost:3000/v1/api/checkout/order', {
                    cartId: this.billInfo.id,
                    foodId: this.billInfo.foodId,
                    quantity: this.billInfo.quantity,

                })
                .then(response => {
                    if (response.data.data.code === 'checkout/order.success') {
                        this.isLoading = false;
                        this.$router.push({
                            name: 'myOrders',
                            params: {}
                        })
                    }
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getBill();
    },
}