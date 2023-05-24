<template>
    <main :class="$style.wrapper">
        <form enctype="multipart/form-data" @submit.prevent="upload">
            <Input :isSuccess="isValid" :isFailed="isConfict" :text="message ? message : ''"
                @input-enter="handleInputName" title="Shop Name" placeholder="Name of shop" isRequired :value="name" />
            <Input @input-enter="handleInputAddress" title="Adress" placeholder="Adress of shop" isRequired />
            <Input @input-enter="handleInputFee" title="Ship Fee" placeholder="Ship fee of shop" isRequired />
            <Input @input-enter="handleInputTime" title="Time Shipping" placeholder="Time remaining" isRequired />
            <section :class="$style.form_group">
                <label>Avatar</label>
                <input type="file" @input="handleInputAvatar" />
            </section>
            <section :class="$style.form_group">
                <label>Background</label>
                <input type="file" @input="handleInputBackground" required />
            </section>
            <Button :class="$style.button" type="submit" name="Create" primary required />
        </form>
        <Loader v-if="isLoading" :key="isLoading" />
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import Input from '@/components/Input/Input.vue';
    import Loader from '@/components/Loader/Loader.vue';
    import createShop from '@/composables/createShop.js';

    export default {
        name: "CreateShop",
        components: {
            Input,
            Button,
            Loader
        },
        mixins: [createShop],
    }
</script>

<style lang="scss" module>
    @import "./scss/CreateShop.module.scss"
</style>