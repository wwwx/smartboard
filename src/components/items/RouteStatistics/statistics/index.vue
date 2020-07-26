<template>
    <div>

        <div class="block-title">线路统计</div>
        <div class="d-flex justify-content-center" >
            <Bubble />
        </div>  


        <div class="block-title">线路使用率</div>
        <div class="d-flex justify-content-center" style="width:90%; margin-left: auto; margin-right: auto; margin-top: 0px;">
            <Activity id="route_activity_1" v-if="activityOption1" :colors="['#FF9012']" :option="activityOption1" />
            <Activity id="route_activity_2" v-if="activityOption2" :colors="['#F80034']" :option="activityOption2" />
        </div>  
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Activity from './Activity.vue'
import Bubble from './Bubble.vue'

@Component({
    components: {
        Activity,
        Bubble,
    }
})
export default class  extends Vue {
    activityOption1 = {
        title: '庄子—百果园森林公园',
        data: {
            max: 123,
            series: [33]
        },
    }
    activityOption2 = {
        title: '605路',
        data: {
            max: 123,
            series: [33]
        },
    }
}
</script>

<style lang="stylus" scoped>
.block-title {
    font-size:50px;
    font-weight:200;
    color:rgba(246,247,247,1);
    margin-top: 140px;
}
</style>