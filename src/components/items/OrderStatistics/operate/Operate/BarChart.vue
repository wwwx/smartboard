<template>
    <div :id="id"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
var Highcharts = require('highcharts')
@Component
export default class BarChart extends Vue {
    @Prop() id!:string
    @Prop() option!:any

    mounted() {
        // console.log(this.id)
        this.drawChart()
    }

    drawChart() {

        const dateList = this.option.data.map((item: any) => item.date.slice(5))
        const countList = this.option.data.map((item: any) => item.count)
        const dayLiveList = this.option.data.map((item: any) => +item.dayLive.replace('%', ''))

        // console.log(countList, dayLiveList)
        

        Highcharts.chart(this.id, {
            credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                zoomType: 'xy',
                width: 1900,
                height: 760,
                marginLeft: 150,
            },
            title: {
                text: '获客量/日活率',
                align: 'left',
                style: {
                    color: 'rgba(246,247,247,1)',
                    fontSize: '50px',
                    fontWeight: '100',
                }
            },
            xAxis: [{
                // categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                //             'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                categories: dateList,
                crosshair: true,
                
                title: {
                    text: null
                },
                labels: {
                    rotation: -45,
                    style: {
                        color: 'rgba(246,247,247,.7)',
                        fontSize: '32px',
                        fontWeight: '100',
                    }
                },
            }],
            yAxis: [{ // Primary yAxis

                title: {
                    text: '获客量',
                    style: {
                        color: 'rgba(246,247,247,.7)',
                        fontSize: '32px',
                        fontWeight: '100',
                    }
                },
                labels: {
                    style: {
                        color: 'rgba(246,247,247,1)',
                        fontSize: '32px',
                        fontWeight: '100',
                    }
                },
                
            }, { // Secondary yAxis
                title: {
                    text: '日活率',
                    style: {
                        color: 'rgba(246,247,247,.7)',
                        fontSize: '32px',
                        fontWeight: '100',
                    }
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: 'rgba(246,247,247,1)',
                        fontSize: '32px',
                        fontWeight: '100',
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
                color: '#01FFFF',
                // data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
                data: countList,
                tooltip: {
                    valueSuffix: ''
                }
            }, {
                name: '日活率',
                type: 'spline',
                color: '#DEC943',
                yAxis: 1,
                // data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
                data: dayLiveList,
                tooltip: {
                    valueSuffix: '%'
                },
                
            }]
        });
    }
}
</script>