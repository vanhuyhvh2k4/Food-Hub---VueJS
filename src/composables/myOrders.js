
import axiosJWT from '@/utils/refreshToken';
import nowOrder from '@/assets/images/order-now.png';
import store from '@/Vuex/store.js';

export default {
    data() {
        return {
            listOrder: [],
            listHistory: [],
            nowOrder,
            click: 'left',
        }
    },
    methods: {
        getListOrder (option) {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/order', {
                params: {
                    option: option
                }
            })
            .then((response) => {
                this.listOrder = response.data.data.list;
            })
            .catch(err => {
                this.listOrder = [];
                console.log(err);
            })
        },
        getListHistory (option) {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/order/history', {
                params: {
                    option: option
                }
            })
            .then(response => {
                this.listHistory = response.data.data.list;
            })
            .catch(err => {
                this.listHistory = [];
                console.log(err);
            })
        },
        handleClickDetail (orderId) {
            store.commit('setOrderId', orderId)
            this.$router.push({
                name: 'orderDetail',
                params: {}
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
        },
        handleClickReOrder (shopName, foodName) {
            this.$router.push(`/@${shopName.replaceAll(" ", "-")}/${foodName.replaceAll(" ", "-")}`)
        },
        handleClickRating (orderId, status) {
            if (status === 'finished') {
                store.commit('setOrderId', orderId);
                this.$router.push({name: 'rating', params: {}})
            }
        },
        handleClickLeft () {
            this.click = 'left';
            this.getListOrder();
            this.$refs.group_button.resetCurrent();
        },
        handleClickRight () {
            this.$refs.group_button.resetCurrent();
            this.click = 'right';
            this.getListHistory();
        },
        handleClickFilter (currentIndex) {
            if (this.click === 'right') {

                switch (currentIndex) {
                    case 1:
                        this.getListHistory();        
                        break;
                    case 2:
                        this.getListHistory("finished");
                        break;
                    case 3:
                        this.getListHistory("canceled");        
                        break;
                }
            } else {

                switch (currentIndex) {
                    case 1:
                        this.getListOrder();        
                        break;
                    case 2:
                        this.getListOrder("waiting confirmation");        
                        break;
                    case 3:
                        this.getListOrder("preparing");         
                        break;
                    case 4:
                        this.getListOrder("on the way");         
                        break;
                }
            }
        }
    },
    mounted() {
        this.getListOrder();
    },
}