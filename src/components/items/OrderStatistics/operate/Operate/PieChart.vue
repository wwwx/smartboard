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
                width: 1000,
                height: 600,

            },
            title: {
                text: this.option.title,
                align: 'left',
                style: {
                    color: 'rgba(246,247,247,1)',
                    fontSize: '50px',
                    fontWeight: '100',
                }
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    size: 360,
                    dataLabels: {
                        enabled: true,
                        // format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                        format: '{y}',
                        style: {
                            color: 'rgba(246,247,247,.7)',
                            fontSize: '32px',
                            fontWeight: '200',
                        },
                        connectorColor: 'silver',
                    }
                }
            },
            legend: {
                itemStyle: {
                    fontWeight: '100',
                    fontSize: '32px',
                    color: 'rgba(255,255,255,.6)',
                },
                itemHoverStyle: {
                    color: 'white'
                },
                itemDistance: 20,
                squareSymbol: true,
            },
            series: [{
                type: 'pie',
                name: '',
                startAngle: 270, // 起始角度
                showInLegend: true,
                data: [ ...this.option.data ]
            }]
        });

    }
}
</script>

<style lang="stylus" scoped>

</style>