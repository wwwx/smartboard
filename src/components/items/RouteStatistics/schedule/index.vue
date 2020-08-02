<template>
    <div>

        <div style="position: absolute; left: 0; right: 12px; top: 90px;">
            <RouteLine />
        </div>

        <div style="position: absolute; left: 0; right: 12px; bottom: 0;">
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
export default class  extends Vue {
    
}
</script>