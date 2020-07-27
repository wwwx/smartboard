<template>
    <div :id="id"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
var Highcharts = require('highcharts');
@Component
export default class OrderChart extends Vue {
    @Prop() id!:string
    @Prop() option!:any
    mounted() {
        // console.log(JSON.stringify(this.option.data, null, 2))
        this.drawChart()
    }

    drawChart(data: any = {}) {
        var chart = Highcharts.chart(this.id, {
            credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                type: 'bar',
                height: 700,
                width: 2000,
                borderWidth: 0,
            },
            title: {
                text: '线路订单量',
                align: 'left',
                style: {
                    fontSize: '44px',
                    fontWeight: '200',
                    color:'rgba(246,247,247,1)',
                }
            },
            xAxis: {
                categories: this.option.data.categories,
                // categories: ['605路（上行）', '605路（下行）', 
                //             '庄子-百果山森林公园（上行）', 
                //             '庄子-百果山森林公园（上行）'],
                title: {
                    text: null
                },
                labels: {
                    style: {
                        color: 'rgba(246,247,247,.7)',
                        fontSize: '36px',
                        fontWeight: '100',
                    }
                },

                lineWidth :0,//去掉x轴线
            },
            yAxis: {
                min: 0,
                gridLineWidth: 0,
                minorGridLineWidth: 0,

                lineWidth :0,//去掉x轴线
                tickWidth:0,//去掉刻度
                labels: {
                    enabled: false
                },//去掉刻度数字
            },
            tooltip: {
                valueSuffix: ' 百万'
            },
            legend: {
                enabled: false,
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'rgba(246,247,247,1)',
                            fontSize: '32px',
                            fontWeight: '100',
                        },
                        allowOverlap: true // 允许数据标签重叠
                    },
                    borderWidth: 0,
                }
            },
            series: [{
                name: '订单总量',
                color: '#016AFF',
                data: this.option.data.total,
                // data: [133, 156, 947, 408],
            }, {
                name: '已完成订单',
                color: '#02C9DF',
                data: this.option.data.finish,
                // data: [107, 31, 635, 203],
            }]
        });
        
    }
}
</script>

<style lang="stylus" scoped>
.order-chart {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}

</style>