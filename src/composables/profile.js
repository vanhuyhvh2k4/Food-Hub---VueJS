
import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        const currentUserLocal = JSON.parse(localStorage.getItem('currentUser'));
        return {
            currentUserLocal,
            fullName: currentUserLocal.fullName,
            phone: currentUserLocal.phone,
            address: currentUserLocal.address,
            isLoading: false,
            isShowPopup: null,
        }
    },
    methods: {
        async handleInputChange(e) {
            try {
                this.isLoading = true;
                const image = this.$refs.image;
                const formData = new FormData();
                if (e.target.files[0]) {
                    formData.append('avatar', e.target.files[0]);
                    image.setAttribute("src", URL.createObjectURL(e.target.files[0]));
                    await axiosJWT.patch(`http://localhost:3000/v1/api/auth/profile/${this.currentUserLocal.id}`, formData)
                    this.isLoading = false;
                    this.isShowPopup = 'success';
                    console.log('change avatar success');
                }
            } catch (error) {
                this.isLoading = false;
                this.isShowPopup = 'failed';
            }
        },
        handleInputFullName(value) {
            this.fullName = value;
        },
        handleInputPhone(value) {
            this.phone = value;
        },
        handleInputAddress(value) {
                this.address = value;
        },
        handleFormSubmit() {
            this.isLoading = true;
            axiosJWT.put(`http://localhost:3000/v1/api/auth/profile/${this.currentUserLocal.id}`, {
                    fullName: this.fullName,
                    phone: this.phone,
                    address: this.address
                })
                .then(res => {
                    this.isLoading = false;
                    this.isShowPopup = 'success';
                })
                .catch(err => {
                    this.isLoading = false;
                    this.isShowPopup = 'failed';
                })
        },
        handleCLickPopup () {
            this.isShowPopup = null;
        }
    },
    mounted() {
        // this.getUser();
    },
    computed: {
        currentUser() {
            return this.$store.state.currentUser
        }
    },
}