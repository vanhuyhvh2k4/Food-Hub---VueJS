import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import OrderItem from '@/components/OrderItem/OrderItem.vue';
import axiosJWT from '@/utils/refreshToken';

export default {
    components: { OrderItem, DoubleButton },
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