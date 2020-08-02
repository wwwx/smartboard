<template>
    <div class="main">

            <!-- header start -->
            <smart-item :width="3432" :height="114">
                <div class="subtitle">
                    <!-- <span>智慧班车 / </span> -->
                    <span class="active">智慧公交</span>
                </div>
                <h1 class="header-title">城市智慧出行数据可视监控平台</h1>
                <h3 class="header-time"> {{ nowTime }}</h3>
            </smart-item>
            <!-- header end -->

        <div class="content">
            
            <!-- left board start -->
            <div class="wrap-item" style="top:0; left: 0;">
                <smart-item :width="415" :height="270">
                    <ReservationOrder />
                </smart-item>
            </div>

            <div class="wrap-item" style="top:282px; left: 0;">
                <smart-item :width="415" :height="912">
                    <MonitorList />
                </smart-item>
            </div>
            
            
            <div class="wrap-item" style="top:0; left: 428px;">
                <smart-item :width="750" :height="555">
                    <MonitorViews />
                </smart-item>
            </div>
            
            <!-- <div class="wrap-item" style="top:388px; left: 428px;">
                <smart-item :width="750" :height="375">
                    <MonitorViews />
                </smart-item>
            </div> -->

            <div class="wrap-item" style="top:565px; left: 428px;">
                <smart-item :width="750" :height="628">
                    <PositionMap />
                </smart-item>
            </div>
            <!-- left board end -->





            <!-- center board start -->
            <div class="wrap-item" style="top:0; left: 1190px;">
                <smart-item :width="1030" :height="1194">
                    <OrderStatistics />
                </smart-item>
            </div>
            <!-- center board end -->




            <!-- right board start -->
            <div class="wrap-item" style="top:0; left: 2232px;">
                <smart-item :width="1200" :height="1194">
                    <RouteStatistics />
                </smart-item>
            </div>
            <!-- right board end -->


        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SmartItem from "./SmartItem.vue";
import { EventBus } from '../eventBus'
import {
    ReservationOrder,
    MonitorList,
    MonitorViews,
    PositionMap,
    OrderStatistics,
    RouteStatistics,
    
} from '@/components/items'
import { CityApi } from "@/api/city-api";
import moment from "moment";

@Component({
    components: {
        SmartItem,
        ReservationOrder,
        MonitorList,
        MonitorViews,
        PositionMap,
        OrderStatistics,
        RouteStatistics,
    }
})
export default class Dashboard extends Vue {
    platformData: any = null;
    nowTime: any = null;

    mounted() {
        this.formatTime();
        this.getUsers();

        this.initRealtime()
    }

    initRealtime() {

        // 5s
        const timer_5s = setInterval(() => {
            EventBus.$emit('refresh_5s')
        }, 5*1000);

        // 2h
        const timer_2h = setInterval(() => {
            EventBus.$emit('refresh_2h')
        }, 2*60*60*1000);







    }

    formatTime() {
        // 2020年6月23日 14时12分56秒
        let timer: any;
        timer = setInterval(() => {
            this.nowTime = moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);

        this.$once("hook:beforeDestroy", () => {
            clearInterval(timer);
        });
    }

    getUsers() {
        // CityApi.getAllUserData()
        //     .then(res => res.json())
        //     .then((res: any) => {
        //         this.platformData = res && res.data;
        //     });
    }
}
</script>

<style scoped lang="stylus">
.wrap-item {
    position: absolute;
}
.main {
    box-sizing: border-box;
    // width: 7200px;
    // height: 2772px;
    width: 3456px;
    height: 1344px;
    padding: 12px;
    box-shadow: 0 2px 3px rgba(26, 26, 26, 0.1);
    transition: all 500ms ease-in-out;
    -webkit-transition: all 500ms ease-in-out;
    // transform-origin: top left;
    // -webkit-transform-origin: top left;
    // opacity: 0;
    position: relative;
    overflow: visible;

    color: white;
    background-color: #021140;
}

h1.header-title {
    margin: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
    width:800px;
    height:50px;
    font-size:54px;
    font-weight:400;
    color:rgba(246,247,247,1);
    text-align: center;
}


.subtitle {
    position: absolute;
    left: 40px;
    bottom: 16px;
    span {
        font-size:36px;
        font-weight:400;
        color:rgba(246,247,247,.5);

        &.active {
            color:rgba(246,247,247,1);
        }
    }
}

.header-time {
    margin: 0;
    position: absolute;
    bottom: 16px;
    right: 40px;
    font-size:36px;
    font-weight:300;
    color:rgba(246,247,247,1);  
}

.content {
    position: relative;
    width: 100%;
    height: calc(100% - 264px);
    margin-top: 12px;
}

</style>
