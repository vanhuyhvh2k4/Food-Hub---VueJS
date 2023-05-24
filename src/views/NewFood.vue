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
import newFood from '@/composables/newFood';

export default {
    name: "NewFood",
    mixins: [newFood]
}
</script>

<style lang="scss" module>
    @import "./scss/NewFood.module.scss"
</style>