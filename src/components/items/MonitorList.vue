<template>
    <div class="monitor-list" v-if="lineList">
        <div class="monitor-buses">
            <h3 class="monitor-title">监控车辆</h3>

            <h4 class="monitor-subtitle">{{ lineList[0].lineName }}</h4>
            <div class="list-item" v-for="(item, index) in lineList[0].lineVehicle" :key="'__list1__'+item.id">
                <span class="list-item-NO">{{ index+1 }}</span>
                <span class="list-item-title">{{ item.vehicleNo }}</span>
            </div>

            <h4 class="monitor-subtitle">{{ lineList[1].lineName }}</h4>
            <div class="list-item" v-for="(item, index) in lineList[1].lineVehicle" :key="'__list2__'+item.id">
                <span class="list-item-NO">{{ index+1 }}</span>
                <span class="list-item-title">{{ item.vehicleNo }}</span>
            </div>

        </div>

        <div class="monitor-roads">
            <h3 class="monitor-title">监控路段</h3>
            <h4 class="monitor-subtitle">{{ lineList[0].lineName }}</h4>
            <h4 class="monitor-subtitle">{{ lineList[1].lineName }}</h4>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from '../../api/city-api';
import { lineList } from '../../api/mock';
import { EventBus } from '../../eventBus';

@Component
export default class MonitorList extends Vue {
    lineList: any = null
    
    mounted() {

        this.getData();

        EventBus.$on('refresh_2h', () => {
            this.getData();
        });
    }

    async getData() {
        // const { data } = await CityApi.getLineList({ lineType: 3 });
        this.lineList = lineList();

    }
}
</script>

<style lang="stylus" scoped>
.monitor-title {
    margin: 0;
    margin-bottom: 24px;
    line-height: 1;
    font-size:26px;
    font-weight:400;
    color:rgba(0,202,222,1);

}

.monitor-subtitle {
    margin-bottom: 24px;
    font-size:24px;
    font-weight:400;
    color:rgba(246,247,247,1);
}

.list-item {
    display flex
    align-items center
    margin-bottom 24px
}
.list-item-NO {
    width 20px
    height 20px
    line-height 20px
    text-align center
    background #01CADF
    font-size 18px
    font-weight 200
    border-radius 2px
}

.list-item-title {
    margin-left: 15px;
    font-size:20px;
    font-weight:200;
    color:rgba(246,247,247,1);
}

.monitor-roads {
    margin-top: 36px;
}

</style>