<template>
    <div class="order-board">
        <ul class="tabs-analysis">
            
            <li class="tab-item" 
                v-for="(tab, index) in analysisTabs" 
                :key="tab.id" 
                :class="{ active: analysisActive == index }" 
                 @click="onAnaysisTabsClick(index)"
            >
                <span >{{ tab.title }}</span>
                <i class="bottom-line"></i>
            </li>
        </ul>

        <ul class="tabs-analysis-subtitle">
             <li class="tab-item" 
                v-for="(tab, index) in subAnalysisTabs" 
                :key="tab.id" 
                :class="{ active: subAnalysisActive === index }" 
                 @click="onSubAnaysisTabsClick(index)"
            >
                <span >{{ tab.title }}</span>
            </li>
        </ul>


        <div class="order-content">
            <component :is="analysisComp"></component>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VueConstructor } from 'vue';
import OrderAnalysis from './operate/Order/index.vue'
import OperateAnalysis from './operate/Operate/index.vue'
import VehicleAnalysis from './operate/Vehicle/index.vue'

@Component({
    components: {
        OrderAnalysis,
        OperateAnalysis,
        VehicleAnalysis,
    }
})
export default class Board extends Vue {
    analysisComp: VueConstructor | null = null
    analysisActive = 0
    subAnalysisActive = 1
    analysisTabs = [
        {title: '经营分析', id: 1001},
        // {title: '热点分析', id: 1002}, // TODO
    ]
    subAnalysisTabs = [
        {title: '订单', id: 100101},
        {title: '营销', id: 100202},
        {title: '车辆运营', id: 100203},
    ]
    onAnaysisTabsClick(index: number) {
        this.analysisActive = index
    }
    onSubAnaysisTabsClick(index: number) {
        this.subAnalysisActive = index
        this.analysisComp = this.getAnalysisComponent(index)
    }

    getAnalysisComponent(index: number): VueConstructor|null {
        // console.log(index)
        switch(index) {
            case 0: return OrderAnalysis;
            case 1: return OperateAnalysis;
            case 2: return VehicleAnalysis;
            default:
            return null
        }
    }
    mounted() {
        this.onSubAnaysisTabsClick(0)
    }
}
</script>

<style lang="stylus" scoped>
.order-board {
    user-select none
}
.order-content {
    position relative
    top 80px
    width 100%
}
.tabs-analysis-subtitle {
    position relative
    top 46px
    z-index 2
    display flex
    justify-content center
    align-items center
    .tab-item {
        // width:120px;
        height:48px;
        background-color: rgba(1, 107,255, .2);
        display flex
        justify-content center
        align-items center
        border-radius 24px
        margin 0 20px
        padding: 0 32px;
        span {
            font-size:20px;
            font-weight:400;
            color:rgba(246,247,247,1);
        }

        &.active {
            background-color: rgba(1, 107,255, 1);
        }

        &:nth-child(3) {
            // width: 90px !important;
        }
    }
}
.tabs-analysis {
    position relative
    z-index 2
    display flex
    justify-content center
    align-items center
    .tab-item {
        position relative


        &:not(:last-child) {
            margin-right: 88px;
        }

        span {
            font-size:38px;
            font-weight:500;
            color:rgba(246,247,247,.5);
        }

        .bottom-line {
            position absolute
            left 50%
            margin-left -35px
            bottom -18px
            width:70px;
            height:4px;
            visibility hidden
            background-color: rgba(246,247,247,1);
            border-radius 2px
        }

        &.active {
            span {
                color:rgba(246,247,247,1);
            }

            .bottom-line {
                visibility visible
            }

        }


    }

}
</style>