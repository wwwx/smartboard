<template>
    <div :id="id"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
var Highcharts = require('highcharts')
@Component
export default class OrderChart extends Vue {
    @Prop() id!: string;
    @Prop() option!: any;
    @Prop() colors!: string[];
    mounted() {
        this.drawChart()
    }

    drawChart() {
        // 创建渐变色
        // Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color: string) {
        //     return {
        //         radialGradient: { cx: 0.5, cy: 0.3, r: 0.7 },
        //         stops: [
        //             [0, color],
        //             [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
        //         ]
        //     };
        // });
        const { colors } = this
        Highcharts.setOptions({ colors  });
        // 构建图表
        var chart = Highcharts.chart(this.id,{

            credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                width: 450,
                height: 320,
            },
            title: {
                text: this.option.title,
                align: 'left',
                style: {
                    color: 'rgba(246,247,247,1)',
                    fontSize: '24px',
                    fontWeight: '100',
                }
            },
            tooltip: {
                pointFormat: '{series.name} <b>{point.percentage:.1f}%</b>',
                shared: true,
                backgroundColor: 'rgba(0,0,0,.7)',
                borderColor: '#2A3B63',
                style: {
                    color: 'white',
                }
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    size: 180,
                    dataLabels: {
                        enabled: true,
                        // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        format: '{y}',
                        style: {
                            color: 'rgba(246,247,247,.7)',
                            fontSize: '14px',
                            fontWeight: '200',
                        },
                        connectorColor: 'silver',
                    }
                }
            },
            legend: {
                floating: true,
                backgroundColor: 'rgba(0,0,0,.2)',
                borderColor: '#2A3B63',
                itemHoverStyle: {
                    color: 'white',
                },
                itemStyle: {
                    color: 'rgba(246,247,247,1)',
                    fontWeight: '300',
                    fontSize: '14px',
                },
                itemDistance: 20,
                squareSymbol: true,
            },
            series: [{
                type: 'pie',
                name: '',
                startAngle: 270, // 起始角度
                showInLegend: true,
                borderWidth: 0,
                data: [ ...this.option.data ]
            }]
        });

    }
}
</script>

<style lang="stylus" scoped>

</style>