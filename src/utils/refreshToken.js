import axios from 'axios';
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';

// Tạo một axios instance mới
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/v1/api',
});

// Thêm một interceptor vào axios instance để kiểm tra access token
axiosInstance.interceptors.request.use(
  function(config) {
    // Kiểm tra xem có access token không
    const accessToken = Cookies.get('accessToken');
    if (accessToken) {
      // Nếu có access token, kiểm tra xem access token đã hết hạn chưa
      const decodedToken = jwt_decode(accessToken);
      const date = new Date();
      if (decodedToken.exp < date.getTime() / 1000) {
        // Nếu access token đã hết hạn, gọi API refresh token để lấy access token mới
        const refreshToken = sessionStorage.getItem('refreshToken');
        return axios.post('/auth/refreshToken', {refreshToken})
          .then(res => {
            Cookies.set('accessToken', res.data.accessToken);
            sessionStorage.setItem('refreshToken', res.data.refreshToken);

            // Sau khi lấy access token mới, thêm access token mới vào header của request
            config.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
            return Promise.resolve(config);
          })
          .catch(err => {
            console.log(err);
            return Promise.reject(err);
          });
      } else {
        // Nếu access token chưa hết hạn, thêm access token vào header của request
        config.headers['Authorization'] = `Bearer ${accessToken}`;
        return Promise.resolve(config);
      }
    } else {
      // Nếu không có access token, trả về config như cũ
      return Promise.resolve(config);
    }
  },
  function(error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;