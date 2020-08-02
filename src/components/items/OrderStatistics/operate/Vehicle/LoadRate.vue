<template>
    <div class="load d-flex justify-content-around">
        <div class="load-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">{{ loadRate }}</div>
                <div class="rate-title">平均满载率</div>
            </div>
        </div>
        <div class="load-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">{{ avgVehicleNum }}辆</div>
                <div class="rate-title">平均发车频率（辆/h）</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from '@/api/city-api';
@Component
export default class  extends Vue {
    avgVehicleNum: any = null
    loadRate: any = null

    async created() {
        
        try {
            const { data: { avgVehicleNum } } = await CityApi.getAvgVehicleNum({ tripType: 3 });
            this.avgVehicleNum = avgVehicleNum
            
            const { data: { loadRate } } = await CityApi.getLoadRate({ tripType: 3 });
            this.loadRate = loadRate

        } catch (error) {
            
        }

    }
}
</script>

<style lang="stylus" scoped>
.load {
    padding: 0 60px
}
.load-rate {
    min-width: 200px;
    margin-top 20px
    text-align center
}
.rate-title {
    margin-top 20px
    font-size:25px;
    font-weight:200;
    color:rgba(255,255,255,1);
}
.rate-number {
    font-size:54px;
    font-weight:300;
    color:rgba(0,255,255,1);
}

</style>