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
                height: 330,
                width: 900,
            },
            title: {
                text: '线路订单量',
                align: 'left',
                style: {
                    fontSize: '20px',
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
                        fontSize: '15px',
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
                valueSuffix: '',
                shared: true,
                backgroundColor: 'rgba(0,0,0,.7)',
                borderColor: '#2A3B63',
                style: {
                    color: 'white',
                }
            },
            legend: {
                itemStyle: {
                    fontWeight: '200',
                    fontSize: '14px',
                    color: 'rgba(255,255,255,.6)'
                },
                itemHoverStyle: {
                    color: 'white'
                },
                itemDistance: 20,
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: 'rgba(246,247,247,1)',
                            fontSize: '14px',
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

        this.$watch('option', (value: any) => {
            chart.series[0].update({ data: this.option.data.total } as any)
            chart.series[1].update({ data: this.option.data.finish } as any)
        })
        
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