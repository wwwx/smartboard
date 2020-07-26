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
        {title: '热点分析', id: 1002},
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
        this.onSubAnaysisTabsClick(2)
    }
}
</script>

<style lang="stylus" scoped>
.order-board {
    user-select none
}
.order-content {
    position relative
    top 175px
    width 100%
}
.tabs-analysis-subtitle {
    position relative
    top 100px
    z-index 2
    display flex
    justify-content center
    align-items center
    .tab-item {
        width:251px;
        height:106px;
        background-color: rgba(1, 107,255, .2);
        display flex
        justify-content center
        align-items center
        border-radius 54px
        margin 0 40px
        span {
            font-size:42px;
            font-weight:400;
            color:rgba(246,247,247,1);
        }

        &.active {
            background-color: rgba(1, 107,255, 1);
        }

        &:nth-child(3) {
            width: 295px !important;
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
            font-size:83px;
            font-weight:500;
            color:rgba(246,247,247,.5);
        }

        .bottom-line {
            position absolute
            left 50%
            margin-left -71px
            bottom -36px
            width:142px;
            height:9px;
            visibility hidden
            background-color: rgba(246,247,247,1);
            border-radius 5px
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