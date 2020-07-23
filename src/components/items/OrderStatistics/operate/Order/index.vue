<template>
    <div class="order-analysis">
        <PieThreeDim />
        <Bar />
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PieThreeDim from '@/components/charts/PieThreeDim.vue'
import Bar from '@/components/charts/Bar.vue'

@Component({
    components: {
        PieThreeDim,
        Bar
    }
})
export default class OrderAnalysis extends Vue {
    
}
</script>

<style lang="stylus" scoped>


</style>