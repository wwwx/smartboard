<template>
    <div class="vehicle-analysis">


        <smart-item :width="2110" :height="418" style="margin-left: -26px;">
            <LoadRate />
        </smart-item>

        <div class="block-title">平均周转量（人/km）</div>
        <div class="d-flex justify-content-center" style="width:90%; margin-left: auto; margin-right: auto; margin-top: 0px;">
            <ActivityChart id="vehicle_activity_1" v-if="activityOption1" :colors="['#FF9012']" :option="activityOption1" />
            <ActivityChart id="vehicle_activity_2" v-if="activityOption2" :colors="['#F80034']" :option="activityOption2" />
            <ActivityChart id="vehicle_activity_3" v-if="activityOption3" :colors="['#1940F7']" :option="activityOption3" />
        </div>  

        <div class="daypeak d-flex ">
            <div class="activity">
                <div class="block-title" >早晚高峰满载率</div>
                <PeakActivityChart v-if="peakOption" :option="peakOption" />
            </div>
            <div class="bar pr">
                <div class="block-title" >在线车辆数据统计</div>
                <BarChart id="vehicle_bar_chart" style="margin-top: 100px;" v-if="vehicleOption" :option="vehicleOption" />
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SmartItem from '@/components/SmartItem.vue'
import LoadRate from './LoadRate.vue'
import ActivityChart from '../Order/Activity.vue'
import BarChart from './Bar.vue'
import PeakActivityChart from './Activity.vue'
import { CityApi } from '@/api/city-api';

@Component({
    components: {
        SmartItem,
        LoadRate,
        ActivityChart,
        BarChart,
        PeakActivityChart,
    }
})
export default class VehicleAnalysis extends Vue {

    created() {
        this.getTurnOver();
        this.getPeak();
        this.getVehicle();
    }

    async getVehicle() {
        const { data: { exceptionNum, offlineNum, onlineNum } } = await CityApi.getVehicleStatus({ vehicleType: 3 })
        // console.log(exceptionNum, offlineNum, onlineNum)
        
        this.vehicleOption = {
            exceptionNum, 
            offlineNum, 
            onlineNum
        }
    }

    async getPeak() {

        const { data: { morningPeakRate, nightPeakRate } } = await CityApi.getSeatPeakRate({ tripType: 3 })
        this.peakOption = {
            morningPeakRate,
            nightPeakRate
        }
    }

    async getTurnOver() {
        try {
            const { data : { holidayNum, restDayNum, workdayNum }} = await CityApi.getTurnOverNum({ tripType: 3 })
            // console.log(data)
            const all = holidayNum + restDayNum + workdayNum
            // console.log(all)

            this.activityOption1 = {
                title: '工作日',
                data: {
                    max: all,
                    series: [workdayNum]
                },
            }   
            this.activityOption2 = {
                title: '休息日',
                data: {
                    max: all,
                    series: [restDayNum]
                },
            }   
            this.activityOption3 = {
                title: '节假日',
                data: {
                    max: all,
                    series: [holidayNum]
                },
            }   

            this.activityOption1.data.series[0] = workdayNum
            this.activityOption2.data.series[0] = restDayNum
            this.activityOption3.data.series[0] = holidayNum


            // console.log(JSON.stringify(this.activityOption1, null, 2))


        } catch (error) {
            
        }
    }

    peakOption: any = null
    vehicleOption: any = null

    activityOption1: any = null
    activityOption2: any = null
    activityOption3: any = null
}
</script>

<style lang="stylus" scoped>
.block-title {
    font-size:50px;
    font-weight:200;
    color:rgba(246,247,247,1);
    margin-top: 140px;
}
.daypeak {
    justify-content space-between
    margin-top 100px
    div.bar {
        flex 0 0 1150px
    }
}
</style>