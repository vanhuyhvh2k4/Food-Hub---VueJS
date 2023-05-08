<template>
    <div :class="$style.wrapper">
        <fa :class="$style.icon" icon="magnifying-glass"/>
        <input :class="$style.input" type="text" :placeholder="placeholder" :required="required" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur">
    </div>
</template>

<script>
export default {
    name: 'Search',
    props: {
        type: String,
        placeholder: {
            type: String,
            default: 'Enter placeholder of input'
        },
        required: Boolean,
    },
    methods: {
        handleInputChange (e) {
            this.$emit('change-input', e.target.value);
        },

        handleInputFocus () {
            this.$emit('focus-input')
        },
        handleInputBlur () {
            this.$emit('blur-input')
        },
    },
}
</script>

<style lang="scss" module>
    .wrapper {
        display: flex;
        align-items: center;
        height: 51px;
        border: 1px solid #EFEFEF;
        border-radius: 10px;
        padding-left: 18px;
        background-color: #FCFCFD;
        overflow: hidden;
        flex: 1;
    }

    .icon {
        color: #767F9D;
    }

    .input {
        outline: none;
        border: none;
        height: 100%;
        padding: 18px;
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 1.4rem;

        &::placeholder {
            color: #9AA0B4;
        }
    }
</style> 