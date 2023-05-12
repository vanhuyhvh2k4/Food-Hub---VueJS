<template>
    <div :class="$style.wrapper" v-bind:class="active ? $style.active : null" @click="handleClick">
        <img :class="$style.img" :src="imageUrl" alt="food type" />
        <h2 :class="$style.name">{{ name }}</h2>
    </div>
</template>

<script>
export default {
    name: "FoodType",
    props: {
        id: Number,
        name: String,
        imageUrl: String,
        active: Boolean,
    },
    methods: {
        handleClick () {
            this.$emit('click-item', this.id, this.name);
        }
    },
}
</script>

<style lang="scss" module>
    .wrapper {
        height: 98px;
        width: 60px;
        padding: 4px 4px 0px;
        background-color: var(--light-color);
        border-radius: 100px;
        border: 1px solid #eee;   
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);

        &.active {
            background-color: var(--primary-color);
            & > h2 {
                color: var(--light-color);
            }
        }
    }

    .img {
        width: 100%;
        height: 50px;
        object-fit: cover;
        -o-object-fit: cover;
        flex-shrink: 0;
        border-radius: 50%;
    }

    .name {
        font-size: 1.1rem;
        line-height: 1.1rem;
        font-weight: 500;
        color: #67666D;
        text-align: center;
        margin-top: 7px;
    }
</style>