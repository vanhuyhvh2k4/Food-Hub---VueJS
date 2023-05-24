<template>
    <div :class="$style.wrapper">
            <img :src="image" alt="">
            <h2>{{ title }}</h2>
            <small>{{ small }}</small>
    </div>
</template>

<script>
export default {
    name: "NotFound",
    props: {
        image: String,
        title: String,
        small: String,
    }
}
</script>

<style lang="scss" module>
    

.wrapper {
    text-align: center;
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    & > img {
        width: 100px;
        height: 100px;
    }

    & > h2 {
        color: var(--primary-color);
        font-weight: 400;
        margin-top: 12px;
    }

     & > small {
        color: var(--text-muted);
     }
}
</style>