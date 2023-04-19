<template>
    <div :class="$style.wrapper">
        <label :class="$style.label" :for=" title">{{ title }}</label>
        <input :class="$style.input" :id="title" :type="type" :placeholder="placeholder" :required="isRequired">
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
    }
}
</script>

<style lang="scss" module>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 12px;
        width: 100%;

        & + & {
            margin-top: 20px;
        }
    }

    .label {
        font-weight: 400;
        line-height: 1.6rem;
        color: #9796A1;
    }

    .input {
        width: 100%;
        height: 60px;
        padding: 25px 20px;
        border-radius: 10px;
        font-size: 1.7rem;
        line-height: 1.7rem;
        border: 1px solid #ccc;
    }

    .input:focus {
        border-color: var(--primary-color);
    }
</style>