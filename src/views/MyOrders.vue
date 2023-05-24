<template>
    <main :class="$style.wrapper">
        <DoubleButton :titles="['Upcomming', 'History']" />
        <ul :class="$style.list">
            <li v-for="item in listOrder" :key="item.id">
                <OrderItem @click-cancel="handleClickCancel" :isDisabled="item.status !== 'waiting confirm'"
                    :id="item.id" :image="item.image" :quantity="item ? parseInt(item.quantity) : ''"
                    :price="item ? parseFloat(item.price) : ''" :shopName="item.shopName" :foodName="item.name"
                    :status="item.status" :isTick="item.isTick === 0 ? false : true" />
            </li>
        </ul>
    </main>
</template>

<script>
    import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
    import OrderItem from '@/components/OrderItem/OrderItem.vue';
    import myOrder from '@/composables/myOrder.js';

    export default {
        name: "MyOrders",
        components: {
            OrderItem,
            DoubleButton
        },
        mixins: [myOrder],
    }
</script>

<style lang="scss" module>
    @import "./scss/MyOrders.module.scss"
</style>