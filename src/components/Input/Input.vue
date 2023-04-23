<template>
    <div :class="$style.wrapper">
      <label :class="$style.label" :for="title">{{ title }}</label>
      <input :class="$style.input" :id="title" :type="type" :placeholder="placeholder" :required="isRequired" :autocomplete="autocomplete" :spellcheck="spellcheck ? true : false" @input="handleInput">
      <small :class="$style.small" v-if="text">{{ text }}</small>
    </div>
</template>
  
<script>

    export default {
        props: {
            type: {
            type: String,
            default: 'text'
            },
            placeholder: String,
            isRequired: Boolean,
            title: String,
            text: String,
            autocomplete: String,
            spellcheck: Boolean,
            value: String,
        },
        methods: {
            handleInput(e) {
            this.$emit('input-change', e.target.value)
            }
        }
    }
</script>

<style lang="scss" module>
   @import "./Input.module.scss"
</style>