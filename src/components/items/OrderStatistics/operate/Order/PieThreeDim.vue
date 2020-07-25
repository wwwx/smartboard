<template>
    <div class="chart-container" >
        <div :id="id"></div>
        <div class="chart-legend d-flex">
            <div class="item">
                <span class="item-icon" :style="{ backgroundColor: colors[1] }"></span>
                <span class="item-title">待付款</span>
            </div>
            <div class="item">
                <span class="item-icon" :style="{ backgroundColor: colors[0] }"></span>
                <span class="item-title">已完成订单</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Highcharts from 'highcharts'
@Component
export default class OrderChart extends Vue {
    @Prop() id!: string;
    @Prop() option!: any;
    @Prop() colors!: Array<string>;
    mounted() {
        this.drawChart()
    }

    drawChart() {
        const { colors } = this;
        Highcharts.setOptions({ colors });

        this.pieOption.title.text = this.option.title
        this.pieOption.series[0].data = this.option.series_data

        Highcharts.chart(this.id, this.pieOption);
    }

    pieOption: any = {
            credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
            chart: {
                    type: 'pie',
                    options3d: {
                            enabled: true,
                            alpha: 54,
                            beta: 0,
                    },
                    height: 540,
                    width: 1000,
                
            },
            title: {
                    text: '',
                    style: {
                        color: 'rgba(246,247,247,1)',
                        fontSize: '40px',
                        fontWeight: '100',
                    }
            },
            tooltip: {
                    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            legend: {
                itemStyle: {
                        color: 'rgba(0,202,222,1)',
                        fontSize: '36px',
                        fontWeight: '300',
                    }
            },
            plotOptions: {
                    pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            depth: 75,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {

                                        color: '#F6F7F7',
                                        fontSize: '36px',
                                        fontWeight: '100',
                                }
                            },
                            size: 520, // 设置饼图尺寸大小
                            // showInLegend: true,
                    }
            },
            series: [{
                    type: 'pie',
                    startAngle: 330, // 起始角度
                    data: []
            }]
    }
}
</script>

<style lang="stylus" scoped>

.chart-legend {
    position absolute
    // left 0
    bottom -80px

    .item {
        margin-right 54px
    }

    .item-icon {
        display inline-block
        width 28px
        height 28px
        
    }
    .item-title {
        font-size 28px
        font-weight 300
        position relative
        top -4px
        left 20px
    }
}
</style>