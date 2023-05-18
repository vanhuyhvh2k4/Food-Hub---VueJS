import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import * as forgotPasswordService from '@/services/forgotPasswordService.js';
import axios from 'axios';

export default {
    components: {
        Input,
        Button
    },
    methods: {
        handleInputEmail(value) {
            this.isFailed = false;
            this.email = value;
        },
        handleSubmitForm() {

            const fetchApi = async () => {
                const response = await forgotPasswordService.sendMail({
                    email: this.email
                })

                if (response.code === 'password/sendMail.success') {
                    this.isSuccess = true;
                    this.from = response.from;
                    this.to = response.to;
                } else if (response.code === 'middleware/checkhHasEmail.notFound') {
                    this.isFailed = true;
                } else {
                    console.log(response);
                }
            }

            fetchApi();
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