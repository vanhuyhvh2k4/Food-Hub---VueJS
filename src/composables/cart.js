import CartItem from '@/components/CartItem/CartItem.vue';
import axiosJWT from '@/utils/refreshToken';
import cart from '@/assets/images/cart.png';

export default {
    components: {
        CartItem
    },
    data() {
        return {
            listCart: [],
            numberOfCart: null,
            cartEmpty: false,
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
                    this.cartEmpty = true;
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