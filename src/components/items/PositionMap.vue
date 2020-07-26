<template>
    <div class="posi-item d-flex flex-column">
        <ul class="tabs d-flex justify-content-between">
            <li class="tab"
                :class="{ active: i===active }"
                :key="'__map'+i"
                v-for="i in 2"
                @click="selectTab(i)"
            >
               
               <span v-show="i === 1">车辆位置</span>
               <span v-show="i === 2">路线</span>
            </li>
        </ul>
        <div class="map-container flex-grow-1">
            <div id="map">
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import AMapLoader from "@amap/amap-jsapi-loader";
import { CityApi } from "../../api/city-api";

@Component
export default class PositionMap extends Vue {
    active = 1;

    map: any;
    AMap: any;
    center: any;
    points: any;

    // mounted() {
    //     // this.init();
    // }
    // async init() {
    //     await this.loadMap();

    //     this.setTab1();
    // }

    // getCenter(points: any) {
    //     const center = points.reduce(
    //         (a: any, b: any, i: number) => {
    //             const { lat, lng } = a;
    //             const { lat: blat, lng: blng } = b;

    //             if (!i) return { lat: blat, lng: blng };
    //             return { lat: (lat + b.lat) / 2, lng: (lng + b.lng) / 2 };
    //         },
    //         { lat: 0, lng: 0 }
    //     );
    //     return center;
    // }

    // async getData() {
    //     return await CityApi.getStopPage()
    //         .then(res => res.json())
    //         .then(res => res.data.records);
    // }

    // selectTab(index: number) {
    //     this.active = index;
    //     this.setTab(index);
    // }

    // async loadMap() {
    //     await AMapLoader.load({
    //         key: "4ad9857374f6170a018c5d382813980c", // 申请好的Web端开发者Key，首次调用 load 时必填
    //         version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    //         plugins: [] //插件列表
    //     })
    //         .then(AMap => {
    //             this.AMap = AMap;
    //             this.map = new AMap.Map("map", {
    //                 mapStyle: ""
    //             });

    //             // this.setTab(this.active);
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    // setTab(index: number) {
    //     switch (index) {
    //         case 1:
    //             this.setTab1();
    //             break;
    //         case 2:
    //             this.setTab2();
    //             break;
    //         case 3:
    //             this.setTab3();
    //             break;

    //         default:
    //             break;
    //     }
    // }

    // async setTab1() {
    //     this.map.clearMap();
    //     const points = await CityApi.getStopPage()
    //         .then(res => res.json())
    //         .then(res => res.data.records);
    //     const center = this.getCenter(points);
    //     this.map.setZoomAndCenter(13, [center.lng, center.lat]);
    //     points.forEach((point: { lng: number; lat: number }) => {
    //         var marker = new this.AMap.Marker({
    //             position: new this.AMap.LngLat(point.lng, point.lat),
    //             title: "青岛"
    //         });
    //         this.map.add(marker);
    //     });
    // }
    // async setTab2() {
    //     this.map.clearMap();
    //     const points = await CityApi.getVehicleList()
    //         .then(res => res.json())
    //         .then(res => res.data);

    //     const res = await Promise.all(
    //         points.map((vehicle: any) => {
    //             return CityApi.getVehicleLocation(vehicle.id)
    //                 .then(res => res.json())
    //                 .then(res =>
    //                     res.data ? { ...vehicle, position: res.data } : null
    //                 );
    //         })
    //     );

    //     const result = res.filter(Boolean);

    //     console.log(result);
        
    // }

    // setTab3() {}
}
</script>

<style lang="stylus" scoped>
.posi-item {
    position absolute
    top 24px
    right 24px
    bottom 24px
    left 24px

    ul.tabs {
        position: absolute;
        top: 36px;
        left: 42px;
        z-index 2

    }

    .tab {
        width:320px;
        height:132px;
        display flex
        align-items center
        justify-content center
        border-radius 66px
        background-color: rgba(1, 107,255, .2);
        text-align: center;
        margin-right 42px
        span {
            font-size:50px;
            font-weight:400;
            color:rgba(0,108,255,1);
        }

        &.active {
            background-color: rgba(1, 107,255, 1);
            span {
                color:rgba(246,247,247,1);
            }
        }
    }
}

#map {
    width: 400%;
    height: 400%;
    transform: scale(0.25);
    transform-origin: 0 0;
}


</style>