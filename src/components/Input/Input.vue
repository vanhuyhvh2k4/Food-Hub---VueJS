<template>
    <div :class="$style.wrapper" v-bind:class="isFailed ? $style.failed : null">
      <label :class="$style.label" :for="title">{{ title }}</label>
      <input :class="$style.input" :id="title" :type="type" :placeholder="placeholder" :required="isRequired" :autocomplete="autocomplete" :spellcheck="spellcheck ? true : false" @input="handleInput" :minlength="minLength">
      <small :class="[$style.small, isSuccess && $style.success, isFailed && $style.failed]" v-if="text">{{ text }}</small>
    </div>
</template>
  
<script>

    export default {
        props: {
            type: {
            type: String,
            default: 'text'
            },
            minLength: Number,
            placeholder: String,
            isRequired: Boolean,
            title: String,
            text: String,
            autocomplete: String,
            spellcheck: Boolean,
            value: String,
            isFailed: {
                type: Boolean,
                default: false
            },
            isSuccess: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            handleInput(e) {
                this.$emit('input-enter', e.target.value)
            },
        }
    }
</script>

<style lang="scss" module>
   @import "./Input.module.scss"
</style>