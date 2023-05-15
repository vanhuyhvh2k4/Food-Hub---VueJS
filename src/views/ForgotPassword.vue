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
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import axios from 'axios';

export default {
    name: "ForgotPassword",
    components: { Input, Button },
    methods: {
        handleInputEmail (value) {
            this.isFailed = false;
            this.email = value;
        },
        handleSubmitForm () {
                axios.post('http://localhost:3000/v1/api/password/forgot', {
                    email: this.email
                })
                .then(response => {
                    if (response.data.code === 'password/sendMail.success') {
                        this.isSuccess = true;
                        this.from = response.data.from;
                        this.to = response.data.to;
                    }
                })
                .catch(error => {
                    if (error.response.data.code === 'middleware/checkhHasEmail.notFound') {
                        this.isFailed = true;
                    } else {
                        console.log(error);
                    }
                })
        }
    },
    data() {
        return {
            email: null,
            isSuccess: false,
            isFailed: false,
            from: null,
            to: null,

        }
    },
}
</script>

<style lang="scss" module>
    @import "./scss/ForgotPassword.module.scss"
</style>