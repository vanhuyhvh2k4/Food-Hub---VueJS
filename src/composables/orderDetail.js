import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        const orderId = window.location.pathname.split('my-orders/detail/')[1];
        return {
            billInfo: {},
            isLoading: false,
            orderId
        }
    },
    methods: {
        getBill() {
            axiosJWT.get(`http://localhost:3000/v1/api/checkout/order/detail/${this.orderId}`)
                .then(response => {
                    this.billInfo = response.data.data.bill;
                })
                .catch(error => console.log(error))
        }
    },
    mounted() {
        this.getBill();
    },
}