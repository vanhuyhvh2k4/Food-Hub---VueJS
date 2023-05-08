import axios from "axios";
const axiosJWT = axios.create();
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

axiosJWT.interceptors.request.use(
  async (config) => {
    let accessToken = Cookies.get('accessToken');
    let refreshToken = sessionStorage.getItem('refreshToken');
    const decodedToken = jwtDecode(accessToken);
    let date = new Date();

    if (!decodedToken) {
      console.log('dont have access token');
    }
    // accessToken is exp
    if (decodedToken.exp < date.getTime() / 1000) {
      axios.post('http://localhost:3000/v1/api/auth/refreshToken', {
        refreshToken
      })
      .then(response => {
        Cookies.set('accessToken', response.data.data.accessToken);
        sessionStorage.setItem('refreshToken', response.data.data.refreshToken);
      })
      .catch(err => console.log(err))
    }
    return config;
  }
)

export default axiosJWT;