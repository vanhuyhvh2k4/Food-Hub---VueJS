<template>
    <main :class="$style.wrapper">
        <DoubleButton :titles="['Upcomming', 'History']"/>
        <ul :class="$style.list">
            <li>
                <OrderItem/>
            </li>
        </ul>
    </main>
</template>

<script>
import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import OrderItem from '@/components/OrderItem/OrderItem.vue';

export default {
    name: "MyOrders",
    components: { OrderItem, DoubleButton }
}
</script>

<style lang="scss" module>
    @import "./scss/MyOrders.module.scss"
</style>