import {
  useRouter
} from 'vue-router'
import Cookies from 'js-cookie';
import * as authService from '@/services/authService';
import router from '@/router';
import routesConfig from '@/config/routes.js';

export default {
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
      isError,
      routesConfig,
      isLoading: false
    }
  },
  methods: {
    submitForm() {
      this.isLoading = true;
      const fetchApi = async () => {
        const response = await authService.loginUser({
          email: this.email,
          password: this.password
        })
        if (response.code === 'auth/login.success') {
          this.isLoading = false;
          Cookies.set('accessToken', response.data.accessToken);
          sessionStorage.setItem('refreshToken', response.data.refreshToken);
          router.push(routesConfig.home);
        }
        if (response.code === 'auth/login.unauthorized') {
          this.isLoading = false;
          console.log(response.message);
          this.isError = true;
        } else {
          this.isLoading = false;
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