
import axiosJWT from '@/utils/refreshToken';
import nowOrder from '@/assets/images/order-now.png';

export default {
    data() {
        return {
            listOrder: [],
            nowOrder,
        }
    },
    methods: {
        getListOrder () {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/order')
            .then((response) => {
                this.listOrder = response.data.data.list;
            })
            .catch(err => {
                this.listOrder = [];
                console.log(err);
            })
        },
        handleClickCancel (orderId, status) {
            if (status === 'waiting confirm') {
                axiosJWT.delete(`http://localhost:3000/v1/api/checkout/order/${orderId}`)
                .then(res => {
                    if (res.data.data.code === 'checkout/cancel.success') {
                        this.getListOrder();
                    }
                })
                .catch(err => console.log(err))
            }
        }
    },
    mounted() {
        this.getListOrder();
    },
}