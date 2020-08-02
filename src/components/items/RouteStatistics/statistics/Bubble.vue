<template>
    <div>
        
        <div id="bubble_1"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
var Highcharts = require('highcharts')
@Component
export default class  extends Vue {
    @Prop() option!: any

    mounted() {
        this.drawChart()
    }

    drawChart() {



       Highcharts.chart('bubble_1', {

		    credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                type: 'packedbubble',
                height: 600,
                width: 900,
            },
            title: {
                text: ''
            },
            tooltip: {
                useHTML: true,
                pointFormat: '<b>{point.name}:</b> {point.y}m',
                shared: true,
                backgroundColor: 'rgba(0,0,0,.7)',
                borderColor: '#2A3B63',
                style: {
                    color: 'white',
                    fontSize: '14px'
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
                packedbubble: {
                    minSize: '0',
                    maxSize: '300',
                    zMin: 0,
                    zMax: 2000,
                    layoutAlgorithm: {
                        splitSeries: false,
                        gravitationalConstant: 0.02
                    },
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'allow',
                        allowOverlap: false,
                        inside: false,
                        format: '<div style="text-align: center; font-size: 20px;">{point.real}<br><span style="opacity: .6">{point.name}</span></div>',
                        filter: {
                            property: 'y',
                            operator: '>',
                            value: 0
                        },
                        style: {
                            color: 'white',
                            textOutline: 'none',
                            fontWeight: '200',
                            fontSize: '16px',
                        }
                    }
                }
            },
            series: [
                {
                    name: '线路总数',
                    color: '#0263F1',
                    data: [{
                        name: '线路总数',
                        real:this.option.lineTotalNum,
                        value: +(this.option.lineTotalNum * 20).toFixed(2)
                    }]
                },
                {
                    name: '平均站点距离',
                    color: '#4E4FD9',
                    data: [{
                        name: '平均站点距离',
                        real:this.option.avgStopLength,
                        value: +(this.option.avgStopLength* 20).toFixed(2)
                    }]
                },
                {
                    name: '线网长度（km）',
                    color: '#CD953F',
                    data: [{
                        name: '线网长度',
                        real:this.option.lineTotalLength,
                        value: +(this.option.lineTotalLength* 20).toFixed(2)
                    }]
                },
                {
                    name: '平均运行车速（km/h）',
                    color: '#00CFDB',
                    data: [{
                        name: '平均运行车速（km/h）',
                        real:this.option.avgSpeed,
                        value: +(this.option.avgSpeed* 20).toFixed(2)
                    }]
                },
            ]
        });

    }
}
</script>

<style lang="stylus" scoped>
.highcharts-legend-item {
    text {
        display inline-block
        margin-left: 20px!important;
    }
}
</style>