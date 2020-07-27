<template>
    <div class="main">

            <!-- header start -->
            <smart-item :width="7155" :height="240">
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
                <smart-item :width="842" :height="2464">
                    <MonitorList />
                </smart-item>
            </div>
            
            
            <div class="wrap-item" style="top:0; left: 866px;">
                <smart-item :width="1522" :height="766">
                    <MonitorViews />
                </smart-item>
            </div>
            
            <div class="wrap-item" style="top:790px; left: 866px;">
                <smart-item :width="1522" :height="766">
                    <MonitorViews />
                </smart-item>
            </div>

            <div class="wrap-item" style="top:1580px; left: 866px;">
                <smart-item :width="1522" :height="884">
                    <PositionMap />
                </smart-item>
            </div>
            <!-- left board end -->





            <!-- center board start -->
            <div class="wrap-item" style="top:0; left: 2414px;">
                <smart-item :width="2160" :height="2464">
                    <OrderStatistics />
                </smart-item>
            </div>
            <!-- center board end -->




            <!-- right board start -->
            <div class="wrap-item" style="top:0; left: 4598px;">
                <smart-item :width="2556" :height="2464">
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
import {
    MonitorList,
    MonitorViews,
    PositionMap,
    OrderStatistics,
    RouteStatistics,
    
} from '@/components/items'
import { CityApi } from "@/api/city-api";
import moment from "moment";
import { EventBus } from '../eventBus'

@Component({
    components: {
        SmartItem,
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
        this.realTime()
    }

    realTime() {

        setInterval(() => {
            console.log('refresh....')

            EventBus.$emit('refresh')


            
        }, 2 * 1000)

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
    width: 7200px;
    height: 2772px;
    padding: 24px;
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
    margin-top: 35px;
    width:1625px;
    height:110px;
    font-size:116px;
    font-weight:400;
    color:rgba(246,247,247,1);
    text-align: center;
}


.subtitle {
    position: absolute;
    left: 82px;
    bottom: 32px;
    span {
        font-size:83px;
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
    bottom: 32px;
    right: 82px;
    font-size:63px;
    font-weight:400;
    color:rgba(246,247,247,1);  
}

.content {
    position: relative;
    width: 100%;
    height: calc(100% - 264px);
    margin-top: 24px;
}

</style>
