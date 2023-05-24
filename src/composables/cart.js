
import axiosJWT from '@/utils/refreshToken';
import cart from '@/assets/images/cart.png';

export default {
    data() {
        return {
            listCart: [],
            numberOfCart: null,
            cart
        }
    },
    methods: {
        getAllCart() {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/cart')
                .then(response => {
                    if (response.data.data.code === 'checkout/getCart.success') {
                        this.listCart = response.data.data.listCart;
                    }
                })
                .catch(err => {
                    this.listCart = [];
                    console.log(err)
                })
        },
        handleClickInfo(shopName, foodName) {
            this.$router.push(`/@${shopName.replaceAll(' ', '-').trim()}/${foodName.replaceAll(' ', '-').trim()}`)
        },
        async handleClickClose(cartId) {
            try {
                await axiosJWT.delete(`http://localhost:3000/v1/api/checkout/cart/${cartId}`)
                this.getAllCart();
                this.getNumberOfCart();
            } catch (error) {
                console.log(error);
            }
        },
        handleClickCheckout(cartId) {
            this.$router.push(`/checkout?ci=${cartId}`)
        },
        getNumberOfCart() {
            axiosJWT.get('http://localhost:3000/v1/api/checkout/number')
                .then(response => {
                    this.numberOfCart = response.data.data.num;
                })
                .catch(err => console.log(err))
        }
    },
    mounted() {
        this.getNumberOfCart();
        this.getAllCart();
    },
    computed: {
        total() {
            let total = 0;
            this.listCart.map(item => {
                total += (item.price * item.quantity);
            })
            return total;
        }
    },
}