<template>
    <div :class="$style.wrapper">
        <div :class="$style.search">
                <fa :class="$style.icon" icon="magnifying-glass"/>
                <input :class="$style.input" type="text" :placeholder="placeholder" :required="required" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur" @keyup.enter="handleInputEnter" :autofocus="autofocus">
        </div>
        <Button v-if="filter" onlyIcon>
                <SVGIcon icon="filter" />
        </Button>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';
import SVGIcon from '../SVGIcon/SVGIcon.vue';

export default {
    name: "Search",
    props: {
        type: String,
        placeholder: {
            type: String,
            default: "Enter placeholder of input"
        },
        required: Boolean,
        filter: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleInputChange(e) {
            this.$emit("change-input", e.target.value);
        },
        handleInputFocus() {
            this.$emit("focus-input");
        },
        handleInputBlur() {
            this.$emit("blur-input");
        },
        handleInputEnter (e) {
            this.$emit('enter-input', e.target.value);
        }
    },
    components: { Button, SVGIcon }
}
</script>

<style lang="scss" module>
    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 24px;
    }

    .search {
        display: flex;
        align-items: center;
        height: 51px;
        border: 1px solid #ddd;
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