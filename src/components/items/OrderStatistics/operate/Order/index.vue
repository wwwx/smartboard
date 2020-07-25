<template>
    <div class="order-analysis">
        <div class="d-flex justify-content-center" style="width:84%; margin: 0 auto;">
            <PieThreeDim id="chart_pie_1" :option="pieOption1" :colors="['#5474FF', '#00B9E1']" />
            <PieThreeDim id="chart_pie_2" :option="pieOption2" :colors="['#F2B840', '#00B9E1']" />
        </div>

        <div class="d-flex justify-content-center" style="width:90%; margin-left: auto; margin-right: auto; margin-top: 150px;">
            <ActivityChart id="activity_1" :colors="['#FF9012']" :option="activityOption1" />
            <ActivityChart id="activity_2" :colors="['#F80034']" :option="activityOption2" />
            <ActivityChart id="activity_3" :colors="['#1940F7']" :option="activityOption3" />
        </div>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PieThreeDim from '@/components/charts/PieThreeDim.vue'
import ActivityChart from '@/components/charts/Activity.vue'
import Bar from '@/components/charts/Bar.vue'
import { cloneDeep } from 'lodash'

@Component({
    components: {
        PieThreeDim,
        ActivityChart,
    }
})
export default class OrderAnalysis extends Vue {
    pieOption1 = {
        title: '平台总订单量（个）',
        series_data: [
            ['89898',   89],
            {
                name: '1098',
                y: 11,
                sliced: true,
                selected: true
            },
        ]
    }

    pieOption2 = {
        title: '今日订单',
        series_data: [
            ['89898',   89],
            {
                name: '1098',
                y: 11,
                sliced: true,
                selected: true
            },
        ]
    }

    activityOption1 = {
        title: '工作日',
    }
    activityOption2 = {
        title: '休息日',
    }
    activityOption3 = {
        title: '节假日',
    }

    created() {
        
    }

    


}
</script>

<style lang="stylus" scoped>


</style>