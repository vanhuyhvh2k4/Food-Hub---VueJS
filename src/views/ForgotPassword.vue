<template>
    <main :class="$style.wrapper">
        <h1 v-if="!isSuccess">Forgot page</h1>
        <form v-if="!isSuccess" @submit.prevent="handleSubmitForm">
            <Input @input-enter="handleInputEmail" title="Email" placeholder="Enter your email" isRequired type="email" :text="isFailed ? `The email is invalid. Try again !` : ``" :isFailed="isFailed"/>
            <Button primary onlyTitle name="Send email" type="submit" :class="$style.button"/>
        </form>
        <div :class="$style.message" v-if="isSuccess">
            <h4>We sent email to:</h4>
            <a href="https://gmail.com">{{ to ? to : '' }}</a> <br>
            <i>Please check your inbox. Email valid for 2 minutes.</i>
            <p>
                <span>Sender's email:</span>
                <span>{{ from ? from : '' }}</span>
            </p>
        </div>
    </main>
</template>

<script>
import forgotPasswordComposable from '@/composables/forgotPassword.js';

export default {
    name: "ForgotPassword",
    mixins: [forgotPasswordComposable]
}
</script>

<style lang="scss" module>
    @import "./scss/ForgotPassword.module.scss"
</style>