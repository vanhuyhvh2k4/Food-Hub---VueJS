
import store from '@/Vuex/store';
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
                .catch(error => {
                    this.$router.push({name: 'cart', params: {}})
                    this.billInfo = null;
                    console.log(error)
                })
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
                        this.getNumberOfCart();
                        this.$router.push({
                            name: 'myOrders',
                            params: {}
                        })
                    }
                })
                .catch(err => console.log(err))
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
        this.getBill();
    },
}