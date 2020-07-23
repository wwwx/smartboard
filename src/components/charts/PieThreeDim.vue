<template>
    <div id="orderChart" ></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from "@/api/city-api";
import { getOrderData } from "@/api/mock";
var Highcharts = require('highcharts');
@Component
export default class OrderChart extends Vue {
    mounted() {
        // this.getData();
        this.drawChart()
    }

    getData() {
        CityApi.getOrderData()
            .then(res => res.json())
            .then((res: any) => {
                this.drawChart(res && res.data);
            });
        // this.drawChart(getOrderData());
    }

    drawChart(data: any = {}) {
            console.log('ok')
        
        var chart = Highcharts.chart('orderChart', {
            chart: {
                    type: 'pie',
                    options3d: {
                            enabled: true,
                            alpha: 45,
                            beta: 0
                    },
                    height: 600,
                    width: 600,
            },
            title: {
                    text: '平台总订单量（个）',
                    style: {
                        color: 'rgba(246,247,247,1)',
                        fontSize: '50px',
                        fontWeight: '400',
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
                            depth: 35,
                            dataLabels: {
                                enabled: true,
                                format: '{point.name}',
                                style: {

                                        color: '#F6F7F7',
                                        fontSize: '42px',
                                        fontWeight: '200',
                                }
                            },
                            size: 400,
                            showInLegend: true,
                    }
            },
            series: [{
                    type: 'pie',
                //     name: '浏览器占比',
                    data: [
                            ['待付款',   89],
                            {
                                    name: '已完成订单',
                                    y: 11,
                                    sliced: true,
                                    selected: true
                            },
                    ]
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