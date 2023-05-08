import {
  useRouter
} from 'vue-router'
import Cookies from 'js-cookie';
import * as authService from '@/services/authService';

import Input from '@/components/Input/Input.vue';
import Button from '@/components/Button/Button.vue';
import router from '@/router';
import routesConfig from '@/config/routes.js';

export default {
  name: 'Login',
  components: {
    Input,
    Button
  },
  setup() {
    const router = useRouter()
    return {
      router
    }
  },
  data() {
    let email;
    let password;
    let isError = false;
    return {
      email,
      password,
      isError
    }
  },
  methods: {
    submitForm() {
      const fetchApi = async () => {
        const response = await authService.loginUser({
          email: this.email,
          password: this.password
        })
        if (response.code === 'auth/login.success') {
          Cookies.set('accessToken', response.data.accessToken);
          sessionStorage.setItem('refreshToken', response.data.refreshToken);
          router.push(routesConfig.home);
        }
        if (response.code === 'auth/login.unauthorized') {
          console.log(response.message);
          this.isError = true;
        } else {
          console.log(response.message);
        }
      }

      fetchApi();
    },
    handleEmail(value) {
      this.email = value;
      this.isError = false;
    },
    handlePassword(value) {
      this.password = value;
      this.isError = false;
    }
  }
}