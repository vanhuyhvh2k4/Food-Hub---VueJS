<template>
    <div :class="$style.wrapper">
        <ul :class="$style.list">
            <li v-for="(item, index) in titles" :key="index" :class="[$style.item, index + 1 <= process && $style.active]">
                <div></div>
                <div>
                    <fa :icon="icons[index]"/>
                    <article>
                        <h5>{{ item }}</h5>
                    </article>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Progress",
    props: {
        titles: {
            type: Array,
            default: ['Confirm', 'Preparing', 'Shipping', 'Finished']
        },
        icons: {
            type: Array,
            default: ['calendar-check', 'cubes', 'truck-fast', 'flag-checkered']
        },
        process: {
            type: Number,
            default: 1
        }
    }
}
</script>

<style lang="scss" module>
    @import "./Progress.module.scss"
</style>