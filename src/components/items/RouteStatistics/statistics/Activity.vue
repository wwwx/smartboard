<template>
    <div class="chart-container" >
        <div :id="id"></div>
		<div class="chart-legend d-flex">
            <div class="item">
                <span class="item-title">{{ option.title }}</span>
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
		const self = this

        // 去掉这里的注释就是类似 Apple Watch 上的效果了
		Highcharts.setOptions({
			chart: {
				backgroundColor: 'black'
			},
			colors: ['#0CCDD6', self.colors[0]],
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
		this.activityOption.series[0].borderColor = this.colors[0]
		this.activityOption.series[0].data[0].y = this.option.data.series[0]
		// this.activityOption.yAxis.max = this.option.data.max

		Highcharts.chart(this.id, this.activityOption, function(c) {
			
		});
    }

    activityOption: any = {
		credits: { enabled: false}, // 去掉右下角链接  Hightchart.com
		chart: {
			type: 'solidgauge',
			marginTop: 50,
			height: 400,
			width: 400,
		},
		title: {
			text: '',
			y: 400,
			style: {
				fontSize: '44px'
			}
		},
		tooltip: {
			enabled: false,
		},
		pane: {
			startAngle: 0,
			endAngle: 360,
			background: [{ // Track for Move
				outerRadius: '108.9%',
				innerRadius: '92%',
				backgroundColor: 'silver',
				//Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
				borderWidth: 0
			}]
		},
		yAxis: {
			min: 0,
			max: 100, // 数据总量
			lineWidth: 0,
			tickPositions: []
		},
		plotOptions: {
			solidgauge: {
				borderWidth: 24,
				dataLabels: {
					enabled: true,
					borderWidth: 0,
					verticleAlign: 'bottom',
					useHTML: true,
					format:  '<div style="text-align: center; line-height: .88; position: relative; top: -20px;">'+ 
						(100 * this.option.data.series[0] / this.option.data.max).toFixed(0) +'% <div>', // 数据的百分比 + 数据实际值
					style: {
							color: '#F6F7F7',
							fontSize: '56px',
							fontWeight: '200',
					}
				},
				linecap: 'round',
				stickyTracking: false
			}
		},
		series: [{
			// name: 'Move',
			// borderColor: (Highcharts as any).getOptions().colors[1],
			// borderColor:'yellow',
			data: [{
				color: (Highcharts as any).getOptions().colors[0],
				// color:'yellow',
				/* eslint-disable-next-line */
				radius: '100%',
				innerRadius: '100%',
				y: 0
			}]
		}]
	}
}
</script>

<style lang="stylus" scoped>
.chart-container {
    flex 1 1 auto

    display flex
    justify-content center
}
.chart-legend {
    position absolute
    // left 0
    bottom -70px

    .item {
        margin-right 54px
    }

    .item-icon {
        display inline-block
        width 28px
        height 28px
        
    }
    .item-title {
        font-size 40px
        font-weight 400
        position relative
        top -4px
        left 20px
    }
}
</style>