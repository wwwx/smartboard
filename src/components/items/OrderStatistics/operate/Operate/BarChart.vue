<template>
    <div>
        skfsdkljl
        <div id="container_111" style="min-width:400px;height:400px"></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Highcharts from 'highcharts'
export default class BarChart extends Vue {
    @Prop() id!:string
    @Prop() option!:any

    mounted() {
        // console.log(this.id)
        this.drawChart()
    }

    drawChart() {
        

        var chart = Highcharts.chart('container_111', {
            chart: {
                zoomType: 'xy'
            },
            title: {
                text: '获客量/日活率',
                align: 'left'
            },
            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: (Highcharts as any).getOptions().colors[1]
                    }
                },
                title: {
                    text: '获客量',
                    style: {
                        color: (Highcharts as any).getOptions().colors[1]
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: '日活率',
                    style: {
                        color: (Highcharts as any).getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: (Highcharts as any).getOptions().colors[0]
                    }
                },
                opposite: true
            }],
            tooltip: {
                shared: true
            },
            legend: {
                enabled: true,
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor:  '#FFFFFF'
            },
            series: [{
                name: '获客量',
                type: 'column',
                yAxis: 1,
                data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                tooltip: {
                    valueSuffix: ''
                }
            }, {
                name: '日活率',
                type: 'spline',
                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                tooltip: {
                    valueSuffix: '%'
                }
            }]
        });
    }
}
</script>