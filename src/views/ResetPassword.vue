<template>
    <main :class="$style.wrapper">
        <h1>Reset password</h1>
        <form @submit.prevent="handleSubmitForm">
            <Input 
                @input-enter="handleInputNewPassword" 
                title="New password" 
                placeholder="Enter new password"
                isRequired 
                type="password" 
                autocomplete="new-password" 
                :minLength='6' 
                :isFailed="isFailed" 
            />
            <Input 
                @input-enter="handleInputConfirmPassword" 
                title="Confirm password" 
                placeholder="Confirm the password"
                isRequired 
                type="password" 
                autocomplete="new-password" 
                :minLength='6' 
                :isFailed="isFailed" 
            />
            <Button 
                :class="$style.button" 
                name="Change password" 
                primary 
                type="submit" 
            />
            <span v-if="isFailed" :class="$style.message_failed">Confirm password is in correct. Please again</span>
            <span v-if="isSuccess" :class="$style.message_success">Your password has changed. Please login !</span>
        </form>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import Input from '@/components/Input/Input.vue';
    import resetPassword from '@/composables/resetPassword.js';

    export default {
        name: "ResetPassword",
        components: {
            Input,
            Button
        },
        mixins: [resetPassword]
    }
</script>

<style lang="scss" module>
    @import "./scss/ResetPassword.module.scss"
</style>