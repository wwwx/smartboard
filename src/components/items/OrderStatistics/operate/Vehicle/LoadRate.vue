<template>
    <div class="load d-flex justify-content-around">
        <div class="load-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">69.8%</div>
                <div class="rate-title">平均满载率</div>
            </div>
        </div>
        <div class="load-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">10辆</div>
                <div class="rate-title">平均发车频率（辆/h）</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class  extends Vue {
    
}
</script>

<style lang="stylus" scoped>
.load {
    padding: 0 150px
}
.load-rate {
    min-width: 400px;
    margin-top 40px
    text-align center
}
.load-title,
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