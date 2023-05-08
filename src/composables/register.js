import {
    useRouter
} from 'vue-router'
import * as authService from '@/services/authService.js';
import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import routesConfig from '@/config/routes';

export default {
    components: {
        Input,
        Button
    },
    data() {
        let fullName = "";
        let email = "";
        let password = "";
        let notification = "";
        const router = useRouter();
        return {
            fullName,
            email,
            password,
            notification,
            router,
        }
    },
    methods: {
        handleFullName(value) {
            this.fullName = value;
            this.notification = "";
        },
        handleEmail(value) {
            this.email = value;
            this.notification = "";
        },
        handlePassword(value) {
            this.password = value;
            this.notification = "";
        },
        handleSubmitForm() {
            const fetchApi = async () => {
                const response = await authService.signupUser({
                    fullName: this.fullName,
                    email: this.email,
                    password: this.password
                })

                if (response.code === 'auth/register.success') {
                    this.notification = response.message;
                    setTimeout(() => {
                        this.router.push(routesConfig.login)
                    }, 1000)
                }
                if (response.code === 'auth/checkEmail.conflict') {
                    this.notification = response.message;
                } else {
                    console.log(response.message);
                }
            }

            fetchApi();
        }
    }
}