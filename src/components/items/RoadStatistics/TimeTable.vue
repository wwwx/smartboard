<template>
    <div class="time-table">
        <table border="0">
            <thead>
                <tr>
                    <th>已排车辆</th>
                    <th>班次</th>
                    <th>出发时间</th>
                    <th>预计到达时间</th>
                    <th>线路</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>鲁A2947905</td>
                    <td>24</td>
                    <td>12:02</td>
                    <td>12:50</td>
                    <td>305路</td>
                </tr>
                <tr>
                    <td>鲁A2947905</td>
                    <td>24</td>
                    <td>12:02</td>
                    <td>12:50</td>
                    <td>305路</td>
                </tr>
                <tr>
                    <td>鲁A2947905</td>
                    <td>24</td>
                    <td>12:02</td>
                    <td>12:50</td>
                    <td>305路</td>
                </tr>
                <tr>
                    <td>鲁A2947905</td>
                    <td>24</td>
                    <td>12:02</td>
                    <td>12:50</td>
                    <td>305路</td>
                </tr>
            </tbody>
        </table>

        <div class="total">
            <div class="total-item">
                <span>线路配车数：47</span>
            </div>
            <div class="total-item">
                <span>在途车辆</span>
            </div>
            <div class="total-item">
                <span>发生的时间间隔：10分钟</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class TimeTable extends Vue {
    
}
</script>

<style lang="stylus" scoped>
.time-table {
    width: 100%;
    font-size:42px;
    font-weight:400;
    color:rgba(246,247,247,1);

    table {


    width: 100%;
    height: 496px;
    border: 2px solid #002465;

    thead tr {
        background #002465
        height 88px
    }

    tbody tr {
        border-bottom: 2px solid #002465;
    }

    
    td {
        text-align center
    }
    }
}

.total {
    display flex
    justify-content space-between
    margin-top 24px

    .total-item {
        flex 1
        display flex
        align-items center
        justify-content center
        background-color rgba(0,255,255,.1) 
        height 172px


        &:not(:last-child) {
            margin-right 24px
        }

        span {
            font-size:58px;
            font-weight:400;
            color:rgba(0,255,255,1);
            text-align center
        }
    }
}

</style>