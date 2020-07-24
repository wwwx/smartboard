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
Highcharts.chart(this.id, {
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
			outerRadius: '112%',
			innerRadius: '88%',
			backgroundColor: 'silver',
			//Highcharts.Color(Highcharts.getOptions().colors[1]).setOpacity(0.3).get(),
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
			borderWidth: 34,
			dataLabels: {
				enabled: true,
				// format: '{point.name}',
				style: {
						color: '#F6F7F7',
						fontSize: '56px',
						fontWeight: '100',
						className: 'border-none'
				}
			},
			linecap: 'round',
			stickyTracking: false
		}
	},
	series: [{
		name: 'Move',
		borderColor: (Highcharts as any).getOptions().colors[1],
		// borderColor:'yellow',
		data: [{
			color: (Highcharts as any).getOptions().colors[0],
			// color:'yellow',
			radius: '100%',
			innerRadius: '100%',
			y: 80
		}]
	}]
},
    /**
     * In the chart load callback, add icons on top of the circular shapes
     */
				 function callback() {
	// Move icon
	// this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8])
	// 	.attr({
	// 	'stroke': '#303030',
	// 	'stroke-linecap': 'round',
	// 	'stroke-linejoin': 'round',
	// 	'stroke-width': 2,
	// 	'zIndex': 10
	// })
	// 	.translate(190, 26)
	// 	.add(this.series[2].group);
	// Exercise icon
	// this.renderer.path(['M', -8, 0, 'L', 8, 0, 'M', 0, -8, 'L', 8, 0, 0, 8, 'M', 8, -8, 'L', 16, 0, 8, 8])
	// 	.attr({
	// 	'stroke': '#fff',
	// 	'stroke-linecap': 'round',
	// 	'stroke-linejoin': 'round',
	// 	'stroke-width': 2,
	// 	'zIndex': 10
	// })
	// 	.translate(190, 61)
	// 	.add(this.series[2].group);
	// Stand icon
	// this.renderer.path(['M', 0, 8, 'L', 0, -8, 'M', -8, 0, 'L', 0, -8, 8, 0])
	// 	.attr({
	// 	'stroke': '#303030',
	// 	'stroke-linecap': 'round',
	// 	'stroke-linejoin': 'round',
	// 	'stroke-width': 2,
	// 	'zIndex': 10
	// })
	// 	.translate(190, 96)
	// 	.add(this.series[2].group);
});
    }

    activityOption: any = null
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