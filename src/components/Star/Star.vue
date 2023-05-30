<template>
    <div v-if="!price" :class="$style.wrapper" v-bind:class="className">
        <h5>{{ rate }}</h5>
        <fa icon="star"/>
        <span>({{ number }}+)</span>
    </div>
    <div v-if="price" :class="[$style.wrapper, $style.wrapper_price]" v-bind:class="className">
        <span>$</span>
        <h5>{{ number }}</h5>
    </div>
</template>

<script>
export default {
    name: "Star",
    props: {
        className: {
            type: String,
            default: ''
        },
        price: {
            type: Boolean,
            default: false
        },
        rate: {
            type: String,
            default: '4.5',
        },
        number: {
            type: Number,
            default: 25
        }
    }
}
</script>

<style lang="scss" module>
    .wrapper {
        display: flex;
        align-items: center;
        height: 28px;
        border: 1px solid #eee;
        width: fit-content;
        padding: 8px;
        border-radius: 100px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
        background-color: var(--light-color);

        &.wrapper_price {
            gap: 4px;

            & > h5 {
                font-family: TTCommons;
                font-size: 2rem;
                font-weight: 600;
                line-height: 2.3rem;
            }

            & > span {
                font-size: 1rem;
                line-height: 1.1rem;
                font-weight: 400;
                color: var(--primary-color);
            }
        }

        & > h5 {
            font-size: 1.2rem;
            line-height: 1.1rem;
            font-weight: 600;
            margin-right: 4px;
        }

        & > span {
            font-size: 0.9rem;
            line-height: 0.9rem;
            font-weight: 400;
            color: var(--text-muted);
        }

        & > svg {
            font-size: 1rem;
            color: var(--secondary-color);
            margin-right: 3px;
        }
    }
</style>