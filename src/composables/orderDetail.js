import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        return {
            billInfo: {},
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
        },
        handleClickShop () {
            this.$router.push({
                name: "shop",
                params: {
                    shopName: `@${this.billInfo.shopName.replaceAll(" ", "-").trim()}`,
                }
            })
        }
    },
    mounted() {
        this.getBill();
    },
}