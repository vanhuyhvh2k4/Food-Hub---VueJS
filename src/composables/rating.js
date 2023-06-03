import store from "@/Vuex/store";
import axiosJWT from "@/utils/refreshToken";

store

export default {
    data() {
        let emoj = [
            {
                title: "Very Bad",
                message: "Very bad, not worth to use or buy."
            },
            {
                title: "Bad",
                message: "Not good, there are points to improve."
            },
            {
                title: "Medium",
                message: "Average, not bad but not very good either."
            },
            {
                title: "Good",
                message: "Good, worth using or buying."
            },
            {
                title: "Exellent",
                message: "Exceeded expectations and worth to use or buy."
            },
        ];
        return {
            current: 1,
            orderId: store.getters.getOrderId,
            comment: null,
            isLoading: false,
            emoj,
            rating: emoj[0]
        }
    },
    methods: {
        handleClickStar (index) {
            this.current = index + 1;
            this.rating = this.emoj[index];
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