<template>
    <main :class="$style.wrapper">
        <div :class="$style.image">
            <img ref="image" :src="currentUser ? currentUser.avatar : ''" />
            <input @change="handleInputChange" type="file" />
            <div :class="$style.icon">
                <fa icon="camera" />
            </div>
        </div>
        <article :class="$style.title">
            <h2>{{ currentUser ? currentUser.fullName : '' }}</h2>
            <p>Edit profile</p>
        </article>
        <form @submit.prevent="handleFormSubmit">
            <Input 
                @input-enter="handleInputFullName" 
                :value="currentUser ? currentUser.fullName : ''" 
                title="Full Name"
                isRequired 
                placeholder="Enter your name" 
                autocomplete="off" 
            />
            <Input 
                title="Email" 
                :value="currentUser ? currentUser.email : ''" 
                isDisabled 
            />
            <Input 
                @input-enter="handleInputPhone" 
                :value="currentUser ? currentUser.phone : ''" 
                title="Phone Number"
                isRequired 
                placeholder="Enter your phone number" 
                autocomplete="off" 
            />
            <Input 
                @input-enter="handleInputAddress" 
                :value="currentUser ? currentUser.address : ''" 
                title="Address"
                isRequired 
                placeholder="Enter your address" 
                autocomplete="off" 
            />
            <Button 
                :class="$style.button" 
                onlyTitle 
                name="Submit" 
                primary 
                type="submit" 
            />
        </form>
        <Loader v-if="isLoading"/>
        <div v-if="isShowPopup" style="position: fixed; inset: 0; display: grid; place-items: center;">
            <Overlay/>
            <Popup @click-btn="handleCLickPopup" :typeMessage="isShowPopup"/>
        </div>
    </main>
</template>

<script>
    import Button from '@/components/Button/Button.vue';
    import Input from '@/components/Input/Input.vue';
    import Loader from '@/components/Loader/Loader.vue';
    import Overlay from '@/components/Overlay/Overlay.vue';
import Popup from '@/components/Popup/Popup.vue';
    import profile from '@/composables/profile.js';

    export default {
        name: "Profile",
        components: {
    Input,
    Button,
    Loader,
    Overlay,
    Popup
},
        mixins: [profile],
    }
</script>

<style lang="scss" module>
    @import './scss/Profile.module.scss'
</style>