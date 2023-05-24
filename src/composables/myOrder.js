
import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        return {
            listOrder: [],
        }
    },
    methods: {
        getListOrder () {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/order')
            .then((response) => {
                this.listOrder = response.data.data.list;
            })
            .catch(err => {
                console.log(err);
            })
        },
        handleClickCancel (orderId) {
            console.log(orderId);
        }
    },
    mounted() {
        this.getListOrder();
    },
}