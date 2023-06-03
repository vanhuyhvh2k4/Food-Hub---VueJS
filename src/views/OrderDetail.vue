<template>
    <main :class="$style.wrapper">
        <section :class="$style.shop">
            <div :class="$style.shop_left">
                <div>
                    <img :src="billInfo ? billInfo.shopImage : ''" alt="">
                </div>
                <article>
                    <p>
                        <h2>{{ billInfo ? billInfo.shopName : '' }}</h2>
                        <fa v-if="billInfo ? billInfo.isTick : ''" icon="circle-check" />
                    </p>
                    <p>{{ billInfo ? billInfo.place : '' }}</p>
                </article>
            </div>
            <div>
                <Button @click-btn="handleClickShop" outline name="See shop" :class="$style.button_shop" />
            </div>
        </section>
        <div :class="$style.process">
            <h3>Process of your order</h3>
            <Progress :process="billInfo.status === 'waiting confirm' ? 1 : billInfo.status === 'preparing' ? 2 : billInfo.status === 'on the way' ? 3 : billInfo.status === 'finished' ? 4 : ''"/>
        </div>
        <CartItem 
            :class="$style.cart" 
            noButton 
            :name="billInfo.name"
            :quantity="billInfo ? parseInt(billInfo.quantity) : ''" 
            :price="billInfo ? parseFloat(billInfo.price) : ''"
            :image="billInfo.image" 
        />
        <ul :class="$style.bill">
            <li>
                <article>
                    <h3>Each Item</h3>
                </article>
                <article>
                    <h3>${{ billInfo.price }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Quantity</h3>
                </article>
                <article>
                    <h3>x</h3>
                    <span>{{ billInfo.quantity }}</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Total of food</h3>
                </article>
                <article>
                    <h3>${{ billInfo.totalOfFood }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Ship Fee</h3>
                </article>
                <article>
                    <h3>${{ billInfo.shipFee }}</h3>
                    <span>USD</span>
                </article>
            </li>
            <li>
                <article>
                    <h3>Total must pay <small style="color: var(--text-muted); font-weight: 400;">(food + ship)</small>
                    </h3>
                </article>
                <article>
                    <h3>${{ billInfo.total }}</h3>
                    <span>USD</span>
                </article>
            </li>
        </ul>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import CartItem from '@/components/CartItem/CartItem.vue';
    import Progress from '@/components/Progress/Progress.vue';
    import orderDetail from '@/composables/orderDetail.js';

    export default {
        name: "Checkout",
        components: {
    CartItem,
    Button,
    Progress
},
        mixins: [orderDetail],
    }
</script>

<style lang="scss" module>
    @import "./scss/OrderDetail.module.scss"
</style>