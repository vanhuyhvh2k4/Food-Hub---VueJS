import store from "@/Vuex/store";
import axiosJWT from "@/utils/refreshToken";

store

export default {
    data() {
        return {
            current: 1,
            orderId: store.getters.getOrderId,
            comment: null,
            isLoading: false,
        }
    },
    methods: {
        handleClickStar (index) {
            this.current = index + 1;
        },
        handleSubmitForm () {
            this.isLoading = true;
            axiosJWT.post(`http://localhost:3000/v1/api/rating/review/${this.orderId}`, {
                rating: this.current,
                comment: this.comment
            })
            .then(res => {
                this.isLoading = false;
                this.$router.push({name: 'myOrders', params: {}})
            })
            .catch(err => {
                this.isLoading = false;
            })
        }
    },
    mounted() {
        if (this.orderId === null) {
            this.$router.push({name: "myOrders", params: {}})
        }
    },
}