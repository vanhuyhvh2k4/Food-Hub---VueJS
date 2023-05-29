<template>
    <main :class="$style.wrapper">
        <DoubleButton 
            @click-left="handleClickLeft" 
            @click-right="handleClickRight" 
            :titles="['Upcomming', 'History']" 
        />
        <GroupButton
            ref="group_button" 
            @click-btn="handleClickFilter"
            :current="1" 
            :titles="click === 'left' ? ['All', 'Waiting Confirm', 'Preparing', 'On the way'] : ['All', 'Finished', 'Canceled']"
            :class="$style.filter"
        />
        <ul :class="$style.list" v-if="click === 'left' && listOrder.length">
            <li v-for="item in listOrder" :key="item.id">
                <OrderItem 
                    @click-detail="handleClickDetail" 
                    @click-cancel="handleClickCancel" 
                    :isDisabled="item.status !== 'waiting confirm'"
                    :id="item.id" 
                    :image="item.image" 
                    :quantity="item ? parseInt(item.quantity) : ''"
                    :price="item ? parseFloat(item.price) : ''" 
                    :shopName="item.shopName" 
                    :foodName="item.name"
                    :status="item.status" 
                    :isTick="item.isTick === 0 ? false : true" 
                />
            </li>
        </ul>
        <ul :class="$style.list" v-if="click === 'right' && listHistory.length">
            <li v-for="item in listHistory" :key="item.id">
                <OrderItem 
                    @click-rating="handleClickRating" 
                    @click-reorder="handleClickReOrder" 
                    :isRated="item.isRated === 1 ? true : false" 
                    :time="item.time"
                    :id="item.id" 
                    :image="item.image" 
                    :quantity="item ? parseInt(item.quantity) : ''"
                    :price="item ? parseFloat(item.price) : ''" 
                    :shopName="item.shopName" 
                    :foodName="item.name"
                    :status="item.status" :isTick="item.isTick === 0 ? false : true"
                />
            </li>
        </ul>
        <NotFound v-if="(!listOrder.length && click === 'left') || (!listHistory.length && click === 'right')" 
            :image="nowOrder" 
            title="You do not buy any food" 
            small="Let buy something"
        />
    </main>
</template>

<script>
    import DoubleButton from '@/components/DoubleButton/DoubleButton.vue';
import GroupButton from '@/components/GroupButton/GroupButton.vue';
    import NotFound from '@/components/NotFound/NotFound.vue';
    import OrderItem from '@/components/OrderItem/OrderItem.vue';
    import myOrders from '@/composables/myOrders.js';

    export default {
        name: "MyOrders",
        components: {
    OrderItem,
    DoubleButton,
    NotFound,
    GroupButton
},
        mixins: [myOrders],
    }
</script>

<style lang="scss" module>
    @import "./scss/MyOrders.module.scss"
</style>