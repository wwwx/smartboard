<template>
    <div>
        <div :id="id"></div>
        <div class="numbers d-flex">
            <span>{{ option.onlineNum }}</span>
            <span>{{ option.offlineNum }}</span>
            <span>{{ option.exceptionNum }}</span>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
var Highcharts = require('highcharts');
@Component
export default class  extends Vue {
    @Prop() id!:string
    @Prop() option!:any

    mounted() {


        
        this.drawChart()
    }

    drawChart(data: any = {}) {

        const total = this.option.exceptionNum + this.option.offlineNum + this.option.onlineNum



        var chart = Highcharts.chart(this.id, {
            credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                type: 'column',
                inverted: true,
                width: 500,
                height: 200,
            },
            title: {
                text: '',
                align: 'left',
            },
            xAxis: {
                categories: ['行驶车辆', '停靠车辆', '异常车辆'],
                labels: {
                    style: {
                        color: 'rgba(246,247,247,.7)',
                        fontSize: '14px',
                        fontWeight: '100',
                    }
                },
                
                lineWidth :0,//去掉x轴线
                
            },
            yAxis: {
                min: 0,
                gridLineWidth: 0,
                minorGridLineWidth: 0,
                title: {
                    text: ''
                },
                lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
                labels: {
                    enabled: false
                },//去掉刻度数字

            },
            legend: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
                pointFormat: ' <b>{point.y}</b>' +
                '({point.percentage:.0f}%)<br/>', 
                //:.0f 表示保留 0 位小数，详见教程：https://www.hcharts.cn/docs/basic-labels-string-formatting
                shared: true
            },
            plotOptions: {
                column: {
                    stacking: 'percent',
                    borderWidth: 0,
                }
            },
            series: [{
                name: '',
                // data: [5, 3, 4],
                data: [ total-this.option.onlineNum, total-this.option.offlineNum, total-this.option.exceptionNum ],
                color: '#023660'
            }, {
                name: '',
                // data: [2, 4, 3],
                data: [this.option.onlineNum, this.option.offlineNum, this.option.exceptionNum],
                color: '#04C9DF'
            }]
        });
        
    }
}
</script>

<style lang="stylus" scoped>

.numbers {
    position: absolute;
    right: 10px;
    bottom: 80px;
    flex-direction column
    span {
        font-size:14px;
        font-weight:200;
        color:rgba(247,248,248,1);
        margin-top: 45px;
        text-align: left;
    }
}
</style>