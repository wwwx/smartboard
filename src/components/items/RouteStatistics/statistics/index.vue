<template>
    <div>

        <div class="block-title">线路统计</div>
        <div class="d-flex justify-content-center" >
            <Bubble v-if="lineOption" :option="lineOption" />
        </div>  


        <div class="block-title">线路使用率</div>
        <div class="d-flex justify-content-center" style="width:90%; margin-left: auto; margin-right: auto; margin-top: 0px;">
            <Activity id="route_activity_1" v-if="activityOption1" :colors="['#FF9012']" :option="activityOption1" />
            <Activity id="route_activity_2" v-if="activityOption2" :colors="['#F80034']" :option="activityOption2" />
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Activity from './Activity.vue'
import Bubble from './Bubble.vue'
import { CityApi } from '../../../../api/city-api';

@Component({
    components: {
        Activity,
        Bubble,
    }
})
export default class  extends Vue {

    lineOption: any = null

    created() {
        this.getCollect()
        this.getRate()
    }

    async getCollect() {
        const { data: { avgSpeed, avgStopLength, lineTotalLength, lineTotalNum } } = await CityApi.getLineCollect({ lineType: 3 });
        // console.log(data)
        // this.lineOption = { avgSpeed, avgStopLength, lineTotalLength, lineTotalNum } // TODO 数据不完整
        this.lineOption = { avgSpeed: 410, avgStopLength: 123, lineTotalLength: 1766.1, lineTotalNum: 345 }

    }

    async getRate() {
        const { data } = await CityApi.getLineRate({ lineType: 3 }) // TODO 没有数据
        // console.log(data)
        this.activityOption1 = {
            title: '庄子—百果园森林公园',
            data: {
                max: 100,
                series: [33]
            },
        }

        this.activityOption2 = {
            title: '605路',
            data: {
                max: 100,
                series: [53]
            },
        }
    }



    activityOption1: any = null
    activityOption2: any = null
}
</script>

<style lang="stylus" scoped>
.block-title {
    font-size:50px;
    font-weight:200;
    color:rgba(246,247,247,1);
    margin-top: 140px;
}
</style>