
import foodTypes from '@/data/foodTypes';
import axiosJWT from '@/utils/refreshToken';

export default {
    data() {
        return {
            foodTypes,
            name: null,
            category: null,
            file: null,
            desc: null,
            price: null,
            isLoading: false,
            isShowPopup: null,
        }
    },
    methods: {
        handleInputName(value) {
            this.name = value;
        },
        handleSelect(e) {
            this.category = e.target.value;
        },
        handleInputFile(e) {
            this.file = e.target.files[0]
        },
        handleInputDesc(e) {
            this.desc = e.target.value;
        },
        handleInputPrice(value) {
            this.price = value;
        },
        async handleSubmitForm() {

            try {
                this.isLoading = true;
                const formData = new FormData();

                formData.append('name', this.name);
                formData.append('categoryId', this.category);
                formData.append('image', this.file);
                formData.append('description', this.desc);
                formData.append('price', this.price);

                const response = await axiosJWT.post('http://localhost:3000/v1/api/food/food', formData)

                if (response.data.code === 'food/newFood.success') {
                    this.isLoading = false;
                    this.isShowPopup = 'success';
                }
            } catch (error) {
                this.isLoading = false;
                this.isShowPopup = 'failed';
            }
        },
        handleCLickPopup () {
            this.$router.push({
                name: 'home',
                params: {}
            })
        }
    },
}