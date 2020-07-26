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
    mounted() {
        this.drawChart()
    }

    drawChart() {
       Highcharts.chart('bubble_1', {

		    credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                type: 'packedbubble',
                height: 1200,
                width: 2000,
            },
            title: {
                text: ''
            },
            tooltip: {
                useHTML: true,
                pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
            },
            legend: {
                itemStyle: {
                    fontWeight: '200',
                    fontSize: '32px',
                    color: 'rgba(255,255,255,.6)'
                },
                itemDistance: 20,
            },
            plotOptions: {
                packedbubble: {
                    minSize: '0',
                    maxSize: '600',
                    zMin: 0,
                    zMax: 1400,
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
                        format: '<div style="text-align: center;">{point.value}<br><span style="opacity: .6">{point.name}</span></div>',
                        filter: {
                            property: 'y',
                            operator: '>',
                            value: 0
                        },
                        style: {
                            color: 'white',
                            textOutline: 'none',
                            fontWeight: '200',
                            fontSize: '32px',
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
                        value: 410
                    }]
                },
                {
                    name: '平均站点距离',
                    color: '#4E4FD9',
                    data: [{
                        name: '平均站点距离',
                        value: 444
                    }]
                },
                {
                    name: '线网长度（km）',
                    color: '#CD953F',
                    data: [{
                        name: '线网长度',
                        value: 1767.1
                    }]
                },
                {
                    name: '平均运行车速（km/h）',
                    color: '#00CFDB',
                    data: [{
                        name: '平均运行车速（km/h）',
                        value: 430
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