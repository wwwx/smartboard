<template>
    <div class="number-card d-flex justify-content-center">
        <template v-for="(c, i) in cNumber">
            <NumberCell v-if="!isNaN(c)" :num="c" :key="i"/>
            <span v-else class="delimiter" :key="i">,</span>
        </template>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NumberCell from './NumberCell.vue'
import { toThousands } from '@/util.ts'
@Component({
    components: {
        NumberCell
    }
})
export default class NumberCard extends Vue {
    @Prop() num!: number | string

    get cNumber() {
        const num = this.num;
        return toThousands(+num).toString().split('')
    }
}
</script>

<style lang="stylus" scoped>
.number-card {
    > * {
        margin-right 7px
    }
    .delimiter {
        display table-cell
        vertical-align bottom
        font-size 40px
        height 40px
        position relative
        bottom -24px
    }
}
</style>