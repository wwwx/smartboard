<template>
    <PositionMap />
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PositionMap from "@/components/items/PositionMap.vue";

@Component({
    components: { PositionMap }
})
export default class MonitorItem extends Vue {
    
}
</script>

<style lang="stylus" scoped>


</style>