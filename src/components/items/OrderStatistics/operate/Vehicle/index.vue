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
                <PeakActivityChart />
            </div>
            <div class="bar pr">
                <div class="block-title" >在线车辆数据统计</div>
                <BarChart id="vehicle_bar_chart" style="margin-top: 100px;" />
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
    activityOption1 = {
        title: '工作日',
        data: {
            max: 123,
            series: [33]
        },
    }
    activityOption2 = {
        title: '工作日',
        data: {
            max: 123,
            series: [33]
        },
    }
    activityOption3 = {
        title: '工作日',
        data: {
            max: 123,
            series: [33]
        },
    }
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