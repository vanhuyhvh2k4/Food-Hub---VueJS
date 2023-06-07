<template>
    <div :class="$style.wrapper">
        <div :class="$style.search">
                <fa :class="$style.icon" icon="magnifying-glass"/>
                <input :class="$style.input" type="text" :placeholder="placeholder" :required="required" @input="handleInputChange" @focus="handleInputFocus" @blur="handleInputBlur" @keyup.enter="handleInputEnter" :autofocus="autofocus">
        </div>
        <Button 
            @click="() => {
            this.isShowPopup = !this.isShowPopup;
            }" 
            v-if="filter" 
            onlyIcon
        >
                <SVGIcon icon="filter" />
        </Button>
        <Popper 
            v-show="isShowPopup" 
            :class="$style.popup"
        >
            <header>
                <fa 
                    @click="() => {
                        this.isShowPopup = false;
                    }" 
                    icon="times"
                />
            </header>
            <slot/>
            <footer>
                <Button 
                    @click-btn="handleClickReset" 
                    outline 
                    name="Reset"
                />
                <Button 
                    @click-btn="handleClickApply"
                    :primary="!least_one"
                    :disabled="least_one"
                    name="Apply"/>
            </footer>
        </Popper>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';
import Popper from '../Popper/Popper.vue';
import SVGIcon from '../SVGIcon/SVGIcon.vue';

export default {
    name: "Search",
    data() {
        return {
            isShowPopup: false
        }
    },
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
        },
        least_one: {
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
        },
        handleClickReset () {
            this.$emit('click-reset');
        },
        handleClickApply () {
            this.$emit('click-apply');
        }
    },
    components: { Button, SVGIcon, Popper, Button }
}
</script>

<style lang="scss" module>
    .wrapper {
        display: flex;
        justify-content: space-between;
        gap: 24px;
        position: relative;
    }

    .popup {
        position: absolute;
        width: 100%;
        height: fit-content;
        top: 130%;
        z-index: 20;
        padding: 12px;

        & > header {
            display: flex;
            justify-content: end;

            & > svg {
                float: right;
                color: var(--text-muted);
                font-size: 2rem;
            }
        }

        & > footer {
            display: flex;
            gap: 12px;
            padding: 24px 0px 0px;

            & > button {
                flex: 1;
                height: 45px;

                & > h3 {
                    font-size: 1.6rem;
                }
            }
        }
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