<template>
    <div class="order-chart"></div>
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
        CityApi.getOrderData()
            .then(res => res.json())
            .then((res: any) => {
                this.drawChart(res && res.data);
            });
        // this.drawChart(getOrderData());
    }

    drawChart(data: any) {
        let myChart = this.$echarts.init(
            document.querySelector(".order-chart")
        );
        let option = {
            tooltip: {
                trigger: "axis"
            },
            radar: [
                {
                    indicator: data.map((item: any) => ({
                        text: item.yearMonth,
                        max: Math.max(
                            100,
                            ...data.map((item: any) => item.orderNum)
                        )
                    })),
                    radius: 50,
                    nameGap: 5,
                    center: ["50%", "50%"]
                }
            ],
            series: [
                {
                    type: "radar",
                    tooltip: {
                        trigger: "item"
                    },

                    itemStyle: {
                        color: "yellow"
                    },
                    lineStyle: {
                        color: "yellow"
                    },
                    areaStyle: {
                        color: "yellow"
                    },
                    data: [
                        {
                            value: data.map((item: any) => item.orderNum),
                            name: "订单数（月）"
                        }
                    ]
                }
            ]
        };

        myChart.setOption(option);
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