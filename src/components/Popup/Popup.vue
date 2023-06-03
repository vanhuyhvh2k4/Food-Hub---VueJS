<template>
    <div :class="$style.wrapper">
        <section :class="$style.image">
            <img :src="typeMessage === 'success' ? success : failed" alt="">
        </section>
        <section :class="$style.text">
            <h2>{{ typeMessage === 'success' ? "Successfully" : 'Failed' }}</h2>
            <small>{{ typeMessage === 'success' ? 'The process has been success. Continue to buy something' : 'Something went wrong. Try again!'}}</small>
        </section>
        <section @click="handleClickBtn" :class="$style.button">
            <button>{{ typeMessage === 'success' ? 'Continue' : 'Try again' }}</button>
        </section>
    </div>
</template>

<script>
import success from '@/assets/images/success.png';
import failed from '@/assets/images/failed.png';

export default {
    name: "Popup",
    props: {
        typeMessage: {
            type: String,
            default: "success"
        }
    },
    data() {
        return {
            success,
            failed
        }
    },
    methods: {
        handleClickBtn () {
            this.$emit('click-btn');
        }
    },
}
</script>

<style lang="scss" module>
    @import "./Popup.module.scss"
</style>