<template>
    <main :class="$style.wrapper">
        <form enctype="multipart/form-data" @submit.prevent="upload">
            <Input :isSuccess="isValid" :isFailed="isConfict" :text="message ? message : ''" @input-enter="handleInputName" title="Shop Name" placeholder="Name of shop" isRequired :value="name"/>
            <Input @input-enter="handleInputAddress" title="Adress" placeholder="Adress of shop" isRequired v-model="address"/>
            <Input @input-enter="handleInputFee" title="Ship Fee" placeholder="Ship fee of shop" isRequired v-model="shipFee"/>
            <Input @input-enter="handleInputTime" title="Time Shipping" placeholder="Time remaining" isRequired v-model="timeShipping"/>
            <section :class="$style.form_group">
                <label>Avatar</label>
                <input type="file" @input="handleInputAvatar"/>
            </section>
            <section :class="$style.form_group">
                <label>Background</label>
                <input type="file" @input="handleInputBackground" required/>
            </section>
            <Button :class="$style.button" type="submit" name="Create" primary required/>
        </form>
    </main>
</template>

<script>
import debounce from 'lodash/debounce';
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import axiosJWT from '@/utils/refreshToken';

export default {
    name: "CreateShop",
    components: { Input, Button },
    methods: {
        handleInputAvatar (e) {
            this.avatar = e.target.files[0]
        },
        handleInputBackground (e) {
            this.background = e.target.files[0];
        },
        handleInputName: debounce(function (value) {
            this.name = value.trim();
            this.isValid = false;
            this.isConfict = false;
            this.message = '';
            if (this.name.trim()) {

                axiosJWT.post('http://localhost:3000/v1/api/shop/checkShopName', {
                    shopName: this.name
                })
                .then(res => {
                    if (res.data.code === 'shop/checkName.success') {
                        this.isValid = true;
                        this.message = 'The name is valid'
                    }
                })
                .catch(err => {
                    if (err.response.data.code === 'shop/checkName.conflict') {
                        this.isConfict = true;
                        this.message = 'The name has already been taken'
                    }
                })
            }
        }, 400),    
        handleInputAddress (value) {
            this.address = value.trim();
        },
        handleInputFee (value) {
            this.shipFee = value.trim();
        },
        handleInputTime (value) {
            this.timeShipping = value.trim();
        },
        upload () {

            if (this.name.trim() && this.address.trim() && this.shipFee.trim() && this.timeShipping.trim() && !this.isConfict) {
                const formData = new FormData();
                formData.append('avatar', this.avatar);
                formData.append('background', this.background);
                formData.append('name', this.name);
                formData.append('address', this.address);
                formData.append('shipFee', this.shipFee);
                formData.append('timeShipping', this.timeShipping);
                axiosJWT.post('http://localhost:3000/v1/api/shop/create', formData)
                .then(response => console.log(response.data))
                .catch(error => console.log(error.message));
            }
        }
    },
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
        }
    },
}
</script>

<style lang="scss" module>
    @import "./scss/CreateShop.module.scss"
</style>