<template>
    <div class="operate-analysis">


         <smart-item :width="2110" :height="418" style="margin-left: -26px;">
             <Revenue />
         </smart-item>

        <div class="customer">
            <BarChart id="bar_chart_customer_1" v-if="barOption" :option="barOption" />
        </div>

        <div class="platform d-flex justify-content-center">
            <PieChart id="pie_chart_platform_1" v-if="pieOption1" :option="pieOption1" :colors="['#07C7DF','#615FFF' ]" />
            <PieChart id="pie_chart_platform_2" v-if="pieOption2" :option="pieOption2" :colors="['#4E4FD9','#FDBB3D', '#05A3BD' ]" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SmartItem from '@/components/SmartItem.vue'
import Revenue from './Revenue.vue'
import BarChart from './BarChart.vue'
import PieChart from './PieChart.vue'
import { CityApi } from '../../../../../api/city-api';
@Component({
    components: {
        SmartItem,
        Revenue,
        BarChart,
        PieChart,
    }
})
export default class OperateAnalysis extends Vue {

    pieOption1: any = null
    pieOption2: any = null

    barOption: any = null

    created() {

        
        this.getUser();
        this.getSeat();
        this.getDayLive();
        
    }

    async getDayLive() {
        const { data } = await CityApi.getOrderDayLive({ orderType: 3 });
        // console.log(data)
        this.barOption = {
            data
        }
    }

    async getUser() {
        const { data: { userNum, driverNum } } = await CityApi.getUserNum({ orderType: 3 });
        // console.log(data)

        this.pieOption1 = {
            title: '平台资源',
            data: [
                {
                    name: '用户端',
                    y: userNum,
                    sliced: true,
                    selected: true
                },
                ['司机端',   driverNum]
            ]
        }
    }

    async getSeat() {
        // const { data: { soldSeatNum, restSeatNum } } = await CityApi.getSeatNum({ tripType: 3 }); // TODO 服务端 500
        // console.log(soldSeatNum, restSeatNum)

        
            this.pieOption2 = {
                title: '预售位置（今日）',
                data: [
                    {
                        name: '售出座位',
                        y: 288,
                        sliced: true,
                        selected: true
                    },
                    ['剩余座位',   34]
                ]
            }
    }

    
}
</script>


<style lang="stylus" scoped>
.platform, .customer {
    margin-top: 100px;
}
</style>