<template>
    <div class="order-board">
        <ul class="tabs-analysis">
            
            <li class="tab-item" 
                v-for="tab in analysisTabs" 
                :key="tab.id" 
                :class="{ active: analysisActive == tab.id }" 
                 @click="onAnaysisTabsClick(tab.id)"
            >
                <span >{{ tab.title }}</span>
                <i class="bottom-line"></i>
            </li>
        </ul>

        <ul class="tabs-analysis-subtitle">
             <li class="tab-item" 
                v-for="tab in subAnalysisTabs" 
                :key="tab.id" 
                :class="{ active: subAnalysisActive == tab.id }" 
                 @click="onSubAnaysisTabsClick(tab.id)"
            >
                <span >{{ tab.title }}</span>
            </li>
        </ul>


        <div class="order-content">
            <Order />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Order from './operate/Order/index.vue'

@Component({
    components: {
        Order
    }
})
export default class Board extends Vue {
    analysisActive = 1001
    subAnalysisActive = 100101
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
    }
}
</script>

<style lang="stylus" scoped>
.order-board {
    user-select none
}
.order-content {
    position relative
    top 200px
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