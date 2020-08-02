<template>
    <div class="time-table">
        <div class="table">
            <ul class="thead">
                <li>
                    <span>已排车辆</span>
                    <span>班次</span>
                    <span>出发时间</span>
                    <span>预计到达时间</span>
                    <span>线路</span>
                </li>
            </ul>
            <div class="tbody" v-if="todayTripData" :class="{ anim: shouldAnim }">
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item, index) in todayTripData" :key="index">
                        <div class="tr">
                            <span>{{ item.vehicleNo }}</span>
                            <span>{{ item.id }}</span>
                            <span>{{ item.planDepartTime }}</span>
                            <span>{{ item.planArriveTime }}</span>
                            <span>{{ item.lineName }}</span>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>

        <div class="total" v-if="todayVehicleData">
            <div class="total-item">
                <span>线路配车数：{{ todayVehicleData.totalNum }}</span>
            </div>
            <div class="total-item">
                <span>在途车辆：{{ todayVehicleData.runNum }}</span>
            </div>
            <div class="total-item">
                <span>发车的时间间隔：{{ todayVehicleData.gapsTime }}分钟</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from '@/api/city-api';
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

@Component({
    components: {
        swiper,
        swiperSlide,
    },
})
export default class TimeTable extends Vue {
    todayVehicleData: any = null
    todayTripData: any = null

    shouldAnim = false

    
    swiperOption = {
        slidesPerView: 4,
        slidesPerGroup: 4,
        direction: 'vertical',
        loop: true,
        autoplay: {
            delay: 5 * 1000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
        },
    }

    async created() {

        try {
            const { code, data, msg } = await CityApi.getTodayVehicle({ tripType: 3 }); 
            this.todayVehicleData = data
        } catch (error) {
            
        }
        
        try {
            const { code, data, msg } = await CityApi.getTodayTripInfos({ tripType: 3 }); 
            // console.log(data)
            this.todayTripData = data
        } catch (error) {
            
        }

        setTimeout(() => {
            // this.shouldAnim = true;
        }, 3000)

    }
}
</script>

<style lang="stylus" scoped>
.time-table {
    position: relative;
    width: 100%;
    font-size:18px;
    font-weight:400;
    color:rgba(246,247,247,1);

    .table {


        width: 100%;
        // height: 150px;
        overflow hidden
        border: 2px solid #002465;
        transform scale(1)

        ul.thead {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index 2
            background #002465
            height 50px
            padding: 0 14px 0 36px;
            li {

                display: flex;
                align-items center
                
                span {
                        
                    height 50px
                    line-height 50px
                    font-weight 400;
                    display inline-block
                    text-align left
                    font-size 22px
                    
                    &:nth-child(1) {
                        width: 220px;
                    }
                    &:nth-child(2) {
                        width: 150px;
                    }
                    &:nth-child(3) {
                        width: 260px;
                    }
                    &:nth-child(4) {
                        width: 260px;
                    }
                    &:nth-child(5) {
                        width: 120px;
                    }
                }
            }
        }

        .tbody {
            position: relative
            // top 17px
            // padding-top 17px
            display block
            margin-top: 52px;
            z-index 0
            height 204px;
            transition: transform .5s;

            &.anim {
                // transform: translateY(-400px);

            }
            
            
            .tr {
                border-bottom: 2px solid #002465;
                display block
                padding: 0 14px 0 36px;
                margin-bottom 0!important

                span {
                    display inline-block
                    font-weight: 300;
                    height 50px
                    line-height 50px

                    &:nth-child(1) {
                        width: 220px;
                    }
                    &:nth-child(2) {
                        width: 150px;
                    }
                    &:nth-child(3) {
                        width: 260px;
                    }
                    &:nth-child(4) {
                        width: 260px;
                    }
                    &:nth-child(5) {
                        width: 190px;
                    }
                }
            }
        }

    

    }

}

.total {
    display flex
    justify-content space-between
    margin-top 12px

    .total-item {
        flex 1
        display flex
        align-items center
        justify-content center
        background-color rgba(0,255,255,.1) 
        height 80px


        &:not(:last-child) {
            margin-right 12px
        }

        span {
            font-size:26px;
            font-weight:400;
            color:rgba(0,255,255,1);
            text-align center
        }
    }
}



.swiper-container {
    width: 100%;
    margin: 0 auto;
    // margin-top: 20px
    position: relative;
    height: 204px;
}
.swiper-slide {
    transform: scale(1);
    transition-timing-function: ease;
    transition-duration: 300ms;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    // padding: 0.14rem 0 0.11rem;
    
}
.slider-item.slider-active {
    transform: scale(1);
    z-index: 999;
}
.slider-item.slider-active-copy {
    transform: scale(1);
    z-index: 999;
}

</style>