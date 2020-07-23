<template>
    <div id="barChart"></div>
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
        
        var chart = Highcharts.chart('barChart', {
                
            chart: {
                type: 'bar',
                height: 600,
                width: 1500,
            },
            title: {
                text: '各洲不同时间的人口条形图'
            },
            subtitle: {
                text: '数据来源: Wikipedia.org'
            },
            xAxis: {
                categories: ['非洲', '美洲', '亚洲', '欧洲', '大洋洲'],
                title: {
                    text: null
                },
                labels: {
                    style: {
                        color: 'rgba(246,247,247,1)',
                        fontSize: '46px',
                        fontWeight: '200',
                    }
                },
            },
            yAxis: {
                min: 0,
                title: {
                    text: '人口总量 (百万)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify',
                    
                }
            },
            tooltip: {
                valueSuffix: ' 百万'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true,
                        allowOverlap: true // 允许数据标签重叠
                    }
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -40,
                y: 100,
                floating: true,
                borderWidth: 1,
                backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                shadow: true,
                
            },
            series: [{
                name: '1800 年',
                data: [107, 31, 635, 203, 2]
            }, {
                name: '1900 年',
                data: [133, 156, 947, 408, 6]
            }, {
                name: '2008 年',
                data: [973, 914, 4054, 732, 34]
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