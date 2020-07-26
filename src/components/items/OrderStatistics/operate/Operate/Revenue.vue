<template>
    <div class="revenue d-flex justify-content-center">
        <div class="revenue-amount d-flex justify-content-center">
            <div>
                <NumberCard :num="averageAmount" />
                <div class="revenue-title">平均公交盈收（元）</div>
            </div>
        </div>
        <div class="revenue-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">69.8%</div>
                <div class="rate-title">完单率</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NumberCard from './NumberCard.vue'
@Component({
    components: {
        NumberCard
    }
})
export default class  extends Vue {
    averageAmount = '8777'
}
</script>

<style lang="stylus" scoped>
.revenue-amount {
    margin-right 320px
}
.revenue-amount,
.revenue-rate {
    min-width: 400px;
    margin-top 40px
    text-align center
}
.revenue-title,
.rate-title {
    margin-top 40px
    font-size:54px;
    font-weight:200;
    color:rgba(255,255,255,1);
}
.rate-number {
    font-size:120px;
    font-weight:300;
    color:rgba(0,255,255,1);
}

</style>