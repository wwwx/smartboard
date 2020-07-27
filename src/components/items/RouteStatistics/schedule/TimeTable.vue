<template>
    <div class="time-table">
        <table border="0">
            <thead>
                <tr>
                    <th>已排车辆</th>
                    <th>班次</th>
                    <th>出发时间</th>
                    <th>预计到达时间</th>
                    <th>线路</th>
                </tr>
            </thead>
            <tbody v-if="todayTripData" :class="{ anim: shouldAnim }">
                <tr v-for="item in todayTripData" :key="item.id">
                    <td>{{ item.vehicleNo }}</td>
                    <td>{{ item.id }}</td>
                    <td>{{ item.planDepartTime }}</td>
                    <td>{{ item.planArriveTime }}</td>
                    <td>{{ item.lineName }}</td>
                </tr>
            </tbody>
        </table>

        <div class="total" v-if="todayVehicleData">
            <div class="total-item">
                <span>线路配车数：{{ todayVehicleData.totalNum }}</span>
            </div>
            <div class="total-item">
                <span>在途车辆：{{ todayVehicleData.runNum }}</span>
            </div>
            <div class="total-item">
                <span>发生的时间间隔：{{ todayVehicleData.gapsTime }}分钟</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from '@/api/city-api';

@Component
export default class TimeTable extends Vue {
    todayVehicleData: any = null
    todayTripData: any = null

    shouldAnim = false

    async created() {

        try {
            const { code, data, msg } = await CityApi.getTodayVehicle({ tripType: 1 }); 
            this.todayVehicleData = data
        } catch (error) {
            
        }
        
        try {
            const { code, data, msg } = await CityApi.getTodayTripInfos({ tripType: 3 }); 
            // console.log(data)
            this.todayTripData = data.slice(0,4)
        } catch (error) {
            
        }

        setTimeout(() => {
            // this.shouldAnim = true;
        }, 3000)

    }
}
</script>

<style lang="stylus" scoped>
.time-table {
    position: relative;
    width: 100%;
    font-size:42px;
    font-weight:400;
    color:rgba(246,247,247,1);

    table {


        width: 100%;
        height: 496px;
        overflow hidden
        border: 2px solid #002465;

        thead tr {
            background #002465
            height 88px
            position: relative
            z-index 1
            th {
                font-weight: 400;
            }
        }

        tbody {
            position: relative
            z-index 0
            height 400px;
            transition: transform .5s;

            &.anim {
                transform: translateY(-400px);

            }
            
            
            tr {
                border-bottom: 2px solid #002465;
                height 88px

                td {
                    font-weight: 300;
                }
            }
        }

        
        td {
            text-align center
        }
    }

    .tbody-wrap {
        overflow hidden
    }
}

.total {
    display flex
    justify-content space-between
    margin-top 24px

    .total-item {
        flex 1
        display flex
        align-items center
        justify-content center
        background-color rgba(0,255,255,.1) 
        height 172px


        &:not(:last-child) {
            margin-right 24px
        }

        span {
            font-size:58px;
            font-weight:400;
            color:rgba(0,255,255,1);
            text-align center
        }
    }
}

</style>