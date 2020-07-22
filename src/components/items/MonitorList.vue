<template>
    <div class="monitor-list">
        <div class="monitor-buses">
            <h3 class="monitor-title">监控车辆</h3>
            <h4 class="monitor-subtitle">庄子—百果山森林公园</h4>
            <div v-for="i in 5" :key="'__buses'+i">
                <div class="list-item">
                    <span class="list-item-NO">{{ i }} </span>
                    <span class="list-item-title">鲁A2947905</span>
                </div>
            </div>
            <h4 class="monitor-subtitle">605路</h4>
            <div v-for="i in 5" :key="'__roads'+i">
                <div class="list-item">
                    <span class="list-item-NO">{{ i }} </span>
                    <span class="list-item-title">鲁A2947905</span>
                </div>
            </div>
        </div>

        <div class="monitor-roads">
            <h3 class="monitor-title">监控路段</h3>
            <h4 class="monitor-subtitle">庄子—百果山森林公园</h4>
            <h4 class="monitor-subtitle">605路</h4>
        </div>

    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MonitorList extends Vue {
    
}
</script>

<style lang="stylus" scoped>
.monitor-title {
    margin: 0;
    margin-bottom: 50px;
    line-height: 1;
    font-size:58px;
    font-weight:400;
    color:rgba(0,202,222,1);

}

.monitor-subtitle {
    margin-bottom: 50px;
    font-size:54px;
    font-weight:400;
    color:rgba(246,247,247,1);
}

.list-item {
    display flex
    align-items center
    margin-bottom 50px
}
.list-item-NO {
    width 43px
    height 43px
    line-height 43px
    text-align center
    background #01CADF
    font-size 42px
    font-weight 200
    border-radius 2px
}

.list-item-title {
    margin-left: 36px;
    font-size:42px;
    font-weight:200;
    color:rgba(246,247,247,1);
}

.monitor-roads {
    margin-top: 75px;
}

</style>