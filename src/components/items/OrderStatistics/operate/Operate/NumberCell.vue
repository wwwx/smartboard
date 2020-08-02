<template>
    <div class="number-cell d-flex align-items-center justify-content-center">
        <span class="number">{{ num }}</span>
        <span class="divider"></span>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class NumberCell extends Vue {
    @Prop() num!: number | string
}
</script>

<style lang="stylus" scoped>
.number-cell {
    width: 45px;
    height: 64px;
    border-radius: 4px;
    background-color: #006BFF;
    color: #FFF;
    font-size 60px
    font-weight 200
    text-align center
    vertical-align middle
    display table-cell
    position relative

    .divider {
        position absolute
        top: 32px
        width: 100%;
        height: 3px;
        background-color: #001140;
        z-index 0
    }

    .number {
        position relative
        z-index 1
    }
    

    &:before,
    &:after {
        position: absolute;
        content: ""
        top: 28px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #001140;
    }
    &:before {
        left: -7px;
    }

    &:after {
        right: -7px;
    }
}
</style>