<template>
    <div @click="handleClick" :class="$style.wrapper">
        <section>
            <img :src="image" alt="">
        </section>
        <article>
            <h3>{{ title }}</h3>
        </article>
    </div>
</template>

<script>
export default {
    name: "ItemManager",
    props: {
        id: Number,
        image: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: 'Title'
        }
    },
    methods: {
        handleClick () {
            this.$emit('click-item', this.id)
        }
    },
}
</script>

<style lang="scss" module>
    .wrapper {
        border: 1px solid #ddd;
        border-radius: 12px;
        box-shadow: 2px 2px 20px 1px rgba($color: #000000, $alpha: 0.1);
        overflow: hidden;
        padding: 6px;

        & > section {
            width: 100%;
            height: 70%;

            & > img {
                width: 100%;
                height: 100%;
                flex-shrink: 0;
                object-fit: contain;
                border-radius: 12px;
            }
        }

        & > article {
            text-align: center;

            & > h3 {
                padding: 6px 0;
                font-size: 2rem;
                font-weight: 400; 
            }
        }
    }
</style>