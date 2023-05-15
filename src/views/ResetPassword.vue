<template>
    <main :class="$style.wrapper">
        <h1>Reset password</h1>
        <form @submit.prevent="handleSubmitForm">
            <Input @input-enter="handleInputNewPassword" title="New password" placeholder="Enter new password" isRequired type="password" autocomplete="new-password" :minLength='6' :isFailed="isFailed"/>
            <Input @input-enter="handleInputConfirmPassword" title="Confirm password" placeholder="Confirm the password" isRequired type="password" autocomplete="new-password"  :minLength='6' :isFailed="isFailed"/>
            <Button :class="$style.button" name="Change password" primary type="submit"/>
            <span v-if="isFailed" :class="$style.message_failed">Confirm password is in correct. Please again</span>
            <span v-if="isSuccess" :class="$style.message_success">Your password has changed. Please login !</span>
        </form>
    </main>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import axios from 'axios';

export default {
    name: "ResetPassword",
    components: { Input, Button },
    data() {
        const originalPath = window.location.pathname;
        const fullPath = window.location.href
        const email = originalPath.split('/')[3];
        const token = fullPath.split('?')[1].replace('token=', '');
        return {
            isSuccess: false,
            isFailed: false,
            newPassword: null,
            confirmPassword: null,
            email,
            token,
        }
    },
    methods: {
        handleInputNewPassword (value) {
            this.isFailed = false;
            this.newPassword = value;
        },
        handleInputConfirmPassword (value) {
            this.isFailed = false;
            this.confirmPassword = value;
        },
        handleSubmitForm () {
            if (this.newPassword !== this.confirmPassword) {
                this.isFailed = true;
            } else if (!this.newPassword.trim() && !this.confirmPassword.trim()) {
                this.isFailed = true;
                } else {
                    axios.patch(`http://localhost:3000/v1/api/password/reset/${this.email}?token=${this.token}`, {
                            password: this.newPassword
                    })
                    .then(res => {
                        if (res.data.code === 'password/reset.success') {
                            this.isSuccess = true;
                            setTimeout(() => {
                                this.$router.push({name: 'login', params: {}})
                            }, 1000);
                        } else {
                            this.$router.push({name: 'forgot', params: {}})
                        }
                    })
                    .catch(err => {
                        console.log(err.response.message)
                        this.$router.push({name: 'forgot', params: {}})
                    })
                }
        }
    },
    mounted() {
        console.log(this.token);
    },
}
</script>

<style lang="scss" module>
    @import "./scss/ResetPassword.module.scss"
</style>