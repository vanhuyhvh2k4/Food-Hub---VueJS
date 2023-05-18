import {
    mapState
} from 'vuex';
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import axiosJWT from '@/utils/refreshToken';

export default {
    components: {
        Input,
        Button
    },
    data() {
        const currentUserLocal = JSON.parse(localStorage.getItem('currentUser'));
        return {
            currentUserLocal,
            fullName: currentUserLocal.fullName,
            phone: currentUserLocal.phone,
            address: currentUserLocal.address,
        }
    },
    methods: {
        handleInputChange(e) {
            const image = this.$refs.image;
            const formData = new FormData();
            if (e.target.files[0]) {
                formData.append('avatar', e.target.files[0]);
                image.setAttribute("src", URL.createObjectURL(e.target.files[0]));
                axiosJWT.patch(`http://localhost:3000/v1/api/auth/changeAvatar/${this.currentUserLocal.id}`, formData)
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
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
            axiosJWT.patch(`http://localhost:3000/v1/api/auth/changeProfile/${this.currentUserLocal.id}`, {
                    fullName: this.fullName,
                    phone: this.phone,
                    address: this.address
                })
                .then(res => console.log(res))
                .catch(err => console.log(err))
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