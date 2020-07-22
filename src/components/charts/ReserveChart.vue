<template>
    <div class="reserve-chart"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from "@/api/city-api";
import { getOrderData } from "@/api/mock";

@Component
export default class ReverseChart extends Vue {
    mounted() {
        this.getData();
    }

    getData() {
        CityApi.getReserveList()
            .then(res => res.json())
            .then((res: any) => {
                this.drawChart(res.data.slice(0, 4));
            });
        // this.drawChart(getOrderData().slice(0, 4));
    }

    drawChart(data: any) {
        let myChart = this.$echarts.init(
            document.querySelector(".reserve-chart")
        );

        let option = {
            tooltip: {
                trigger: "axis",
                axisPointer: {
                    type: "cross",
                    label: {
                        backgroundColor: "#6a7985"
                    }
                }
            },
            legend: {
                icon: "circle",
                itemWidth: 10,
                textStyle: {
                    color: "white"
                },
                data: ["待付款", "已上车", "已结束", "上车人数"]
            },
            grid: {
                top: "15%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true
            },
            xAxis: [
                {
                    type: "category",
                    boundaryGap: false,
                    label: {},
                    axisLine: {
                        lineStyle: {
                            color: "white"
                        }
                    },
                    data: data.map((item: any) => item.lineName)
                }
            ],
            yAxis: [
                {
                    min: 0,
                    splitNumber: 4,
                    type: "value",
                    axisLine: {
                        lineStyle: {
                            color: "white"
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: "white"
                        }
                    }
                }
            ],
            series: [
                {
                    smooth: true,
                    name: "待付款",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: data.map((item: any) => item.toBePayNum)
                },
                {
                    smooth: true,
                    name: "已上车",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: data.map((item: any) => item.inCarNum)
                },
                {
                    smooth: true,
                    name: "已结束",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: data.map((item: any) => item.overNum)
                },
                {
                    smooth: true,
                    name: "上车人数",
                    type: "line",
                    stack: "总量",
                    areaStyle: {},
                    data: data.map((item: any) => item.orderNum)
                }
            ]
        };

        myChart.setOption(option);
    }
}
</script>

<style lang="stylus" scoped>
.reserve-chart {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
</style>