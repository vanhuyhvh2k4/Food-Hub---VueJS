<template>
    <main :class="$style.wrapper">
        <DoubleButton :titles="['Upcomming', 'History']" />
        <ul :class="$style.list" v-if="listOrder.length">
            <li v-for="item in listOrder" :key="item.id">
                <OrderItem @click-cancel="handleClickCancel" :isDisabled="item.status !== 'waiting confirm'"
                    :id="item.id" :image="item.image" :quantity="item ? parseInt(item.quantity) : ''"
                    :price="item ? parseFloat(item.price) : ''" :shopName="item.shopName" :foodName="item.name"
                    :status="item.status" :isTick="item.isTick === 0 ? false : true" />
            </li>
        </ul>
        <NotFound v-if="!listOrder.length" :image="nowOrder" title="You do not buy any food" small="Let buy something"/>
    </main>
</template>

<script>
    import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
    import NotFound from '@/components/NotFound/NotFound.vue';
    import OrderItem from '@/components/OrderItem/OrderItem.vue';
    import myOrders from '@/composables/myOrders.js';

    export default {
        name: "MyOrders",
        components: {
            OrderItem,
            DoubleButton,
            NotFound
        },
        mixins: [myOrders],
    }
</script>

<style lang="scss" module>
    @import "./scss/MyOrders.module.scss"
</style>