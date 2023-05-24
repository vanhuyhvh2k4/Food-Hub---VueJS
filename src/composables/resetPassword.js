
import * as resetPasswordService from '@/services/resetPasswordService.js';

export default {
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
        handleInputNewPassword(value) {
            this.isFailed = false;
            this.newPassword = value;
        },
        handleInputConfirmPassword(value) {
            this.isFailed = false;
            this.confirmPassword = value;
        },
        handleSubmitForm() {
            if (this.newPassword !== this.confirmPassword) {
                this.isFailed = true;
            } else if (!this.newPassword.trim() && !this.confirmPassword.trim()) {
                this.isFailed = true;
            } else {
                const fetchApi = async () => {
                    const response = await resetPasswordService.resetPassword(this.email, this.token, {password: this.newPassword});
                    if (response.code === 'password/reset.success') {
                        this.isSuccess = true;
                        setTimeout(() => {
                            this.$router.push({
                                name: 'login',
                                params: {}
                            })
                        }, 1000);
                    } else if (response.code === 'password/reset.notFound') {
                        this.$router.push({
                            name: 'forgot',
                            params: {}
                        })
                    } else {
                        this.$router.push({
                            name: 'forgot',
                            params: {}
                        })
                    }
                }

                fetchApi();
            }
        }
    }
}