<template>
    <div>
        <div id="a_peak"></div>
        <div class="legend d-flex">
            <div class="morning">
                <div class="title">早高峰满载率：89%</div>
                <div class="time">06:00-08:00</div>
            </div>
            <div class="evening">
                <div class="title">晚高峰满载率：89%</div>
                <div class="time">16:00-19:30</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Highcharts from 'highcharts'
@Component
export default class extends Vue {
    mounted() {
        this.drawChart()
    }

    drawChart() {
		const self = this

        // 去掉这里的注释就是类似 Apple Watch 上的效果了
		Highcharts.setOptions({
			chart: {
				backgroundColor: 'black'
			},
			colors: ['#0CCDD6', 'red'],
			title: {
				style: {
					color: 'silver'
				}
			},
			tooltip: {
				style: {
					color: 'silver'
				}
			}
		});
		// this.activityOption.series[0].borderColor = this.colors[0]
		// this.activityOption.series[0].data[0].y = 80
		// this.activityOption.yAxis.max = 100

		Highcharts.chart('a_peak', this.activityOption, function(c) {
			
		});
    }

    activityOption: any = {
		credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
		chart: {
            type: 'solidgauge',
            marginLeft: 200,
            width: 640,
            height: 540,
        },
        title: {
            text: '',
            style: {
                fontSize: '24px'
            }
        },
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '24px',
            },
            pointFormat: '{series.name}<br><span style="font-size:2em; color: {point.color}; font-weight: bold">{point.y}%</span>',
            positioner: function (labelWidth: number) {
                return {
                    x: 200 - labelWidth / 2,
                    y: 180
                };
            }
        },
        legend: {
            enabled: true,
        },
        pane: {
            startAngle: 0,
            endAngle: 360,
            background: [{ // Track for Move
                outerRadius: '112%',
                innerRadius: '98%',
                backgroundColor: 'transparent',
                //Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
                borderWidth: 0
            }, { // Track for Exercise
                outerRadius: '97%',
                innerRadius: '83%',
                backgroundColor: 'transparent',
                borderWidth: 0
            }]
        },
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
        plotOptions: {
            solidgauge: {
                borderWidth: 24,
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false
            }
        },
        series: [{
            name: '早高峰满载率',
            borderColor:'#50AB93',
            data: [{
                color: '#50AB93',
                // color:'yellow',
                radius: '100%',
                innerRadius: '100%',
                y: 80
            }]
        }, {
            name: '晚高峰满载率',
            borderColor: '#E6BF42',
            data: [{
                color: '#E6BF42',
                radius: '80%',
                innerRadius: '80%',
                y: 65
            }]
        }]
	}
}
</script>

<style lang="stylus" scoped>
.legend {
    font-size:32px;
    font-weight:200;
    color:rgba(247,248,248,1);
    margin-left: 60px;

    .title {
        margin-bottom: 32px;
        position relative

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: -45px;
            width: 32px;
            height: 32px;
            border-radius 50%
        }
    }

    .time {
        opacity .6
    }

    .morning {
        .title {
            color: #50AB93
            &:before {

                background-color: #50AB93;
            }
        }
    }

    .evening {
        margin-left: 100px;
        .title {
            color: #E6BF42
            &:before {

                background-color: #E6BF42;
            }
        }
    }
}
</style>