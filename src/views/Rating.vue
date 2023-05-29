<template>
    <main :class="$style.wrapper">
        <h1>What is your feel about this food ?</h1>
        <ul :class="$style.stars">
            <li v-for="(item, index) in 5" :key="index" @click="handleClickStar(index)">
                <fa v-if="index + 1 > current" :icon="['far', 'star']"/>
                <fa v-if="index + 1 <= current" :icon="['fas', 'star']"/>
                <b :class="index + 1 <= current ? $style.active : ''">{{ index + 1 }}</b>
            </li>
        </ul>
        <form :class="$style.comment" @submit.prevent="handleSubmitForm">
            <textarea required placeholder="Write comments..." name="" id="" cols="30" rows="10" v-model="comment"></textarea>
            <Button type="submit" :class="$style.button" name="Submit" primary/>
        </form>
        <Loader v-if="isLoading"/>
    </main>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import Loader from '@/components/Loader/Loader.vue';
import rating from '@/composables/rating';

export default {
    name: "Rating",
    components: {
    Button,
    Loader
},
    mixins: [rating]
}
</script>

<style lang="scss" module>
    @import "./scss/Rating.module.scss"
</style>