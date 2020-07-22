<template>
    <div class="seat-chart"></div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from "@/api/city-api";
import { getSeatRatioData } from "@/api/mock";

@Component
export default class ReverseChart extends Vue {
    yAxisData: string[] = [];

    mounted() {
        this.getData();
    }

    getData() {
        CityApi.getSeatData()
            .then(res => res.json())
            .then((res: any) => {
                this.drawChart(res.data);
            });

        // this.drawChart(getSeatRatioData());
    }

    drawChart(data: any) {
        const colors = [
            new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#E4C662" },
                { offset: 0.2, color: "#E4C662" },
                { offset: 1, color: "transparent" }
            ]),
            new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#D18EE6" },
                { offset: 0.2, color: "#D18EE6" },
                { offset: 1, color: "transparent" }
            ]),
            new this.$echarts.graphic.LinearGradient(1, 0, 0, 0, [
                { offset: 0, color: "#AE8394" },
                { offset: 0.2, color: "#AE8394" },
                { offset: 1, color: "transparent" }
            ])
        ];

        let myChart = this.$echarts.init(document.querySelector(".seat-chart"));
        let option = {
            grid: {
                top: "10%",
                left: "5%",
                right: "10%",
                bottom: "3%",
                containLabel: true
            },

            yAxis: {
                axisTick: { show: false },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "white"
                    }
                },
                type: "category",
                // data: ["沪A88888", "沪A99999", "京AA333A", "沪B99532"],
                data: data.map((item: any) => item.vehicleNo)
            },
            xAxis: {
                show: false,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "white"
                    }
                },
                type: "value"
            },
            series: [
                {
                    data: data.map((item: any, i:number) => ({
                        value: item.seatRatio,
                        itemStyle: { color: colors[i % colors.length] },
                        label: {
                            show: true,
                            position: "right",
                            textStyle: {
                                color: "white"
                            }
                        }
                    })),
                    type: "bar"
                }
            ],

            graph: {
                color: [
                    "#d87c7c",
                    "#919e8b",
                    "#d7ab82",
                    "#6e7074",
                    "#61a0a8",
                    "#efa18d",
                    "#787464",
                    "#cc7e63",
                    "#724e58",
                    "#4b565b"
                ]
            }
        };

        myChart.setOption(option);
    }
}
</script>

<style lang="stylus" scoped>
.seat-chart {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
}
</style>