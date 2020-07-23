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

        <div style="position: absolute; left: 0; right: 24px; top: 184px;">
            <RouteLine />
        </div>

        <div style="position: absolute; left: 0; right: 24px; bottom: 0;">
            <TimeTable />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TimeTable from './TimeTable.vue'
import RouteLine from './RouteLine.vue'

@Component({
    components: {
        TimeTable,
        RouteLine,
    }
})
export default class Board extends Vue {
    analysisActive = 1001
    analysisTabs = [
        {title: '线路排班', id: 1001},
        {title: '线路统计', id: 1002},
    ]
    onAnaysisTabsClick(index: number) {
        console.log(index)
        this.analysisActive = index
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