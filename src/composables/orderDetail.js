import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        return {
            billInfo: {},
            isLoading: false,
            orderId: this.$store.getters.getOrderId,
        }
    },
    methods: {
        getBill() {
            axiosJWT.get(`http://localhost:3000/v1/api/checkout/order/detail/${this.orderId}`)
                .then(response => {
                    this.billInfo = response.data.data.bill;
                })
                .catch(error => {
                    this.$router.push({name: "myOrders", params: {}})
                    console.log(error)
                })
        }
    },
    mounted() {
        this.getBill();
    },
}