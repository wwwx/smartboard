<template>
    <div class="operate-analysis" style="height: 5000px;">


         <smart-item :width="2110" :height="418" style="margin-left: -26px;">
             <Revenue />
         </smart-item>

        <div class="customer">
            <OperateBarChart />
        </div>

        <div class="platform">
            <OperatePieChart />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import SmartItem from '@/components/SmartItem.vue'
import Revenue from './Revenue.vue'
import OperateBarChart from './BarChart.vue'
import OperatePieChart from './PieChart.vue'
@Component({
    components: {
        SmartItem,
        Revenue,
        OperateBarChart,
        OperatePieChart,
    }
})
export default class OperateAnalysis extends Vue {
    
}
</script>