<template>
    <div :class="$style.wrapper">
        <section :class="$style.header">
            <div :class="$style.header__left">
                <div>
                    <img src="https://images.unsplash.com/photo-1674574124475-16dd78234342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="">
                </div>
                <article>
                    <figcaption>
                        <h3>Starbucks</h3>
                        <fa icon="circle-check"/>
                    </figcaption>
                    <small>12 items</small>
                </article>
            </div>
        </section>
        <section :class="$style.tags">
            <li>
                <h5>Pizza</h5>
            </li>
            <li>
                <h5>Burger</h5>
            </li>
            <li>
                <h5>Hotdog</h5>
            </li>
        </section>
        <section :class="$style.fee">
            <div>
                <SVGIcon width="20px" height="20px" icon="driver"/>
                <h5>Free</h5>
            </div>
            <div>
                <SVGIcon width="20px" height="20px" icon="clock"/>
                <h5>Da Nang</h5>
            </div>
            <div>
                 <fa icon="star"/>
                 <h5>4.5</h5>
                 <small>(30+)</small>
            </div>
        </section>
        <section :class="$style.button">
            <Button primary name="Go to shop"/>
        </section>
    </div>
</template>

<script>
import Button from '../Button/Button.vue';
import SVGIcon from '../SVGIcon/SVGIcon.vue';

export default {
    name: "ShopItem",
    components: { SVGIcon, Button }
}
</script>

<style lang="scss" module>
    @import "./ShopItem.module.scss"
</style>