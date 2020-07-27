<template>
    <div class="order-board">
        <ul class="tabs-analysis">
            
            <li class="tab-item" 
                v-for="(tab, index) in analysisTabs" 
                :key="tab.id" 
                :class="{ active: analysisActive === index }" 
                 @click="onTabsClick(index)"
            >
                <span >{{ tab.title }}</span>
                <i class="bottom-line"></i>
            </li>
        </ul>

        <div class="main-content">
            <component :is="currentComp"></component>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { VueConstructor } from 'vue';
import Schedule from './schedule/index.vue'
import Statistics from './statistics/index.vue'

@Component({
    components: {
        Schedule,
        Statistics,
    }
})
export default class Board extends Vue {
    analysisActive = 0
    analysisTabs = [
        {title: '线路排班', id: 1001},
        {title: '线路统计', id: 1002},
    ]
    currentComp: VueConstructor | null = null
    onTabsClick(index: number) {
        // console.log(index)
        this.analysisActive = index
        this.currentComp = this.getCurrentComponent(index)
    }

    getCurrentComponent(index: number): VueConstructor|null {
        // console.log(index)
        switch(index) {
            case 0: return Schedule;
            case 1: return Statistics;
            default:
            return null
        }
    }
    mounted() {
        this.onTabsClick(1)
    }
}
</script>

<style lang="stylus" scoped>
.order-board {
    user-select none 
    position relative
    height 100%

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