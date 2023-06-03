
import debounce from 'lodash/debounce';
import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        return {
            name: null,
            address: null,
            shipFee: null,
            timeShipping: null,
            avatar: null,
            background: null,
            isConfict: false,
            isValid: false,
            message: null,
            isLoading: false,
            isShowPopup: null
        }
    },
    methods: {
        handleInputAvatar(e) {
            this.avatar = e.target.files[0]
        },
        handleInputBackground(e) {
            this.background = e.target.files[0];
        },
        handleInputName: debounce(function (value) {
            this.name = value.trim();
            this.isValid = false;
            this.isConfict = false;
            this.message = '';
            if (this.name.trim()) {
                this.isLoading = true;
                axiosJWT.post('http://localhost:3000/v1/api/shop/checkShopName', {
                        shopName: this.name
                    })
                    .then(res => {
                        this.isLoading = false;
                        if (res.data.code === 'shop/checkName.success') {
                            this.isValid = true;
                            this.message = 'The name is valid'
                        }
                    })
                    .catch(err => {
                        this.isLoading = false;
                        if (err.response.data.code === 'shop/checkName.conflict') {
                            this.isConfict = true;
                            this.message = 'The name has already been taken'
                        }
                    })
            }
        }, 400),
        handleInputAddress(value) {
            this.address = value.trim();
        },
        handleInputFee(value) {
            this.shipFee = value.trim();
        },
        handleInputTime(value) {
            this.timeShipping = value.trim();
        },
        upload() {
            this.isLoading = true;
            if (this.name.trim() && this.address.trim() && this.shipFee.trim() && this.timeShipping.trim() && !this.isConfict) {
                const formData = new FormData();
                formData.append('avatar', this.avatar);
                formData.append('background', this.background);
                formData.append('name', this.name);
                formData.append('address', this.address);
                formData.append('shipFee', this.shipFee);
                formData.append('timeShipping', this.timeShipping);
                axiosJWT.post('http://localhost:3000/v1/api/shop/shop', formData)
                    .then(response => {
                        this.isLoading = false;
                        this.isShowPopup = 'success';
                    })
                    .catch(error => {
                        this.isLoading = false;
                        this.isShowPopup = 'failed';
                    });
            }
        },
        handleCLickPopup () {
            this.$router.push({name: "shopManager", params: {}})
        }
    },
}