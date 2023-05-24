<template>
    <main :class="$style.wrapper">
        <form @submit.prevent="handleSubmitForm" :class="$style.form">
            <Input @input-enter="handleInputName" title="Name" isRequired :value="name" v-model="name"/>
            <div :class="$style.form_group">
                <label for="">Category</label>
                <select :class="$style.select" required @change="handleSelect">
                        <option selected disabled>--Choose food category--</option>
                        <option v-for="(item) in foodTypes" :key="item.id" :value="item.id">{{item.id + '-' + item.name }}</option>
                </select>
            </div>
            <div :class="$style.form_group">
                <label for="">Image</label>
                <input @change="handleInputFile" type="file" required/>
            </div>
            <div :class="$style.form_group">
                <label :class="$style.label" for="">Description</label>
                <textarea :class="$style.textarea" @input="handleInputDesc" required minlength=""></textarea>
            </div>
            <Input @input-enter="handleInputPrice" title="Price" isRequired/>
            <Button :class="$style.button" primary name="Submit" type="submit"/>
        </form>
        <Loader v-if="isLoading"/>
    </main>
</template>

<script>
import Button from '@/components/Button/Button.vue';
import Input from '@/components/Input/Input.vue';
import Loader from '@/components/Loader/Loader.vue';
import foodTypes from '@/data/foodTypes';
import axiosJWT from '@/utils/refreshToken';

export default {
    name: "NewFood",
    components: { Input, Button, Loader },
    data() {
        return {
            foodTypes,
            name: null,
            category: null,
            file: null,
            desc: null,
            price: null,
            isLoading: false,
        }
    },
    methods: {
        handleInputName (value) {
                this.name = value;
        },
        handleSelect (e) {
            this.category = e.target.value;
        },
        handleInputFile (e) {
            this.file = e.target.files[0]
        },
        handleInputDesc (e) {
            this.desc = e.target.value;
        },
        handleInputPrice (value) {
            this.price = value;
        },
        async handleSubmitForm () {

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
                    this.$router.push({name: 'newFood', params: {}})
                }
            } catch (error) {
                this.isLoading = false;
                console.log(error);
            }
        }
    },
}
</script>

<style lang="scss" module>
    .wrapper {
        margin-top: var(--content-margin-top);
        margin-bottom: var(--content-margin-bottom);
    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 24px;
    }

    .form_group {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 12px;
        width: 100%;
    }   

    .label {
        font-weight: 400;
        line-height: 1.6rem;
        color: var(--text-muted);
    }

    .textarea {
        width: 100%;
        height: 200px;
        border-radius: 8px;
        border: 1px solid #ccc;
        outline-color: var(--primary-color);
        padding: 24px;
    }

    .select {
        width: 100%;
        border: 1px solid #ccc;
        padding: 16px;
        border-radius: 8px;
        outline-color: var(--primary-color);    
    }

    .button {
        height: 55px;
        padding: 6px 24%;
        margin: auto;
    }
</style>