<template>
    <div class="order-analysis">

        <div class="d-flex justify-content-center" style="width:84%; margin: 0 auto;">
            <PieThreeDim id="chart_pie_1" v-if="pieOption1" :option="pieOption1" :colors="['#5474FF', '#00B9E1']" />
            <PieThreeDim id="chart_pie_2" v-if="pieOption2" :option="pieOption2" :colors="['#F2B840', '#00B9E1']" />
        </div>

        <div class="d-flex justify-content-center" style="width:90%; margin-left: auto; margin-right: auto; margin-top: 120px;">
            <ActivityChart id="activity_1" v-if="activityOption1" :colors="['#FF9012']" :option="activityOption1" />
            <ActivityChart id="activity_2" v-if="activityOption2" :colors="['#F80034']" :option="activityOption2" />
            <ActivityChart id="activity_3" v-if="activityOption3" :colors="['#1940F7']" :option="activityOption3" />
        </div>

        <div class="d-flex justify-content-start" style="margin-top: 88px;">
            <Bar id="bar_1" v-if="barOption" :option="barOption" />
        </div>
        
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PieThreeDim from './PieThreeDim.vue'
import ActivityChart from './Activity.vue'
import Bar from './Bar.vue'
import { cloneDeep } from 'lodash'
import { CityApi } from '@/api/city-api'
import { EventBus } from '@/eventBus';

@Component({
    components: {
        PieThreeDim,
        ActivityChart,
        Bar,
    }
})
export default class OrderAnalysis extends Vue {

    pieOption1: any = null 
    pieOption2: any =  null

    activityOption1: any = null
    activityOption2: any = null
    activityOption3: any = null

    barOption: any = null

    count = 1

    mounted() {
        this.getData()

        EventBus.$on('refresh_5s', () => {
            this.getData()
        })
    }

    async getData() {
            this.count += 2

        // 平台总订单数据
        try {
            const {code, data, msg} = await CityApi.getAllOrderNum({ orderType: 3 });
            // data.tobePayNum += this.count
            // data.finishNum += this.count

            this.pieOption1 = {
                title: '平台总订单量（个）',
                series_data: [
                    ['' + data.finishNum,  data.finishNum],
                    {
                        name: '' + data.tobePayNum,
                        y: data.tobePayNum,
                        sliced: true,
                        selected: true
                    },
                ]
            }

        } catch (error) {
            
        }

        // 今日订单数据
        try {
            
            const {code, data, msg} = await CityApi.getTodayOrderNum({ orderType: 3 });
            if (!data.finishNum) {
                data.finishNum = 1
            } // TODO 防止为0 时 图表会报错
            this.pieOption2 = {
                title: '今日订单',
                series_data: [
                    ['' + data.finishNum,  data.finishNum],
                    {
                        name: '' + data.tobePayNum,
                        y: data.tobePayNum,
                        sliced: true,
                        selected: true
                    },
                ]
            }

        } catch (error) {
            
        }

        // 节假休息日数据
        try {
            let {data: { totalNum, workdayNum, restDayNum, holidayNum }} = await CityApi.getHolidayOrderNum({ orderType: 3 });

            this.activityOption1 = {
                title: '工作日',
                data: {
                    max: totalNum,
                    series: [workdayNum]
                },
            }
            this.activityOption2 = {
                title: '休息日',
                data: {
                    max: totalNum,
                    series: [restDayNum],
                },
            }
            this.activityOption3 = {
                title: '节假日',
                data: {
                    max: totalNum,
                    series: [holidayNum + this.count]
                },
            }

        } catch (error) {
            
        }

        // 总线路订单量数据

        try {

            const {code, data, msg} = await CityApi.getLineOrderNum({ lineType: 2 });
            const total = data.map((item: any) => item.totalNum).slice(0,4)
            const finish = data.map((item: any) => item.finishNum).slice(0,4)
            const categories = data.map((item: any) => item.lineName).slice(0,4)

            this.barOption = {
                data: {
                    total,
                    finish,
                    categories,
                }
            }

        } catch (error) {
            
        }

    }

    


}
</script>

<style lang="stylus" scoped>


</style>