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
import { loadJS } from '@/util.ts'
import { CityApi } from "../../api/city-api";
import { getLine } from '../../api/mock';
// import busImg from "@/assets/bus.png";

declare var AMapUI: any

@Component
export default class PositionMap extends Vue {
    active = 1;

    map: any;
    AMap: any;
    center: any;
    points: any;
    positionTimer: any;

    mounted() {
        this.init();
    }
    async init() {
        await this.loadMap();

        this.setTab1();
    }

    getCenter(points: any) {
        const center = points.reduce(
            (a: any, b: any, i: number) => {
                const { lat, lng } = a;
                const { lat: blat, lng: blng } = b;

                if (!i) return { lat: blat, lng: blng };
                return { lat: (lat + b.lat) / 2, lng: (lng + b.lng) / 2 };
            },
            { lat: 0, lng: 0 }
        );
        return center;
    }

    async getCarPosition() {
        const {code, data, msg} = await CityApi.getVehiclePosition({ vehicleIds: '1078,1079,1080,1081,1082,1083,1084,1085,1086,1087' });
        const AMap = this.AMap

        // console.log('getCarPosition:', data)
        var icon = new AMap.Icon({
            size: new AMap.Size(40, 40),    // 图标尺寸
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA8FBMVEVHcEz/1XD80VRCSVPi6O3q6OL/zlbUunn/z0v/zlT5zFRDSlRGTFVkaXJDSlRNUVQ/R1Lp4cz70GNzbFRUVVT/zlT/zlQPJlWfilLu3rTh4NpPwurn6u7+zlf/zlRES1X/zlFQwuhEwfJSw+pGwOn/z0w/RlH/1lVcxOB6zeo2QFFMwuzzzV7A3+s6r9rp5tpMwejCyoZCtuCz2+pexuqt2+1Av+nFy4ePf1TzzVv414SKxrju37Xj7Prm6ex4foXhuFTx3qyyv5A0seWZ099Wwt74+fvS3eNOuNZHsdFpZVTBolSPxrOqklS1ub+rk1Qt+8mUAAAAG3RSTlMA+3j5/YylA/yk/mMo96LRiYr9CPqnQSqr+0131O8lAAACKElEQVQ4y+WUe3OaQBTFt4BV0aiVvlJklwXlpSgVpGh9EDOaxCT9/h+n9y5Ek8aZtn/n7GOYM789lxn2QsjbVPWf9D+JUr3+/m/6JBFSNyg1DEM1cDcHx2EahrCFb6h1olKV1p7UfXdS7aUINejoO2iL2ySM4zi8gS1WfhxdIQBrD5ZlXV+nlpXOkmiX+rM0iqLQtoRtlULwp8Xt6ZhznsZ+n/f9uA/PYQIbH095KQAHBRhx3i/BVIDROZAX4AzAyJ9Boi3ACEEdp34CuUhMbUy0i0QdEwGCKRIfjqUh0cZEW7fPl4706biv6wCmPMV3jPQwGQ6HUHpYilCqbrnn3d7tPG8X+zyx/ThK7CT00Li79UoBSN0RaI5rqaB6uE26oyd7NFfnKoIGNU2YpjlYrtbrXg9Xb9JFR9gmXSwWCGKo68LHH1wBBJhYcBvQdsFerFYrgifcPMuy3FXNZW9dDkyk6mOW3WNJTJyAtk7gBOzeFaWLTADd/BCAMriHZs0kYN84DoPh5LVLZa2UgsRDACYLHl24lSqpKPuNw9iGsSBzL7FoIcXN4fDFheMcVKgOV/xbZeMEm/0m+NiWPlROkr7C+f2vgMmSJH0WXdORZUiUWedlM30BCxJZW4MmhDbUSJPJciAz1iTaswbVSJvJjiOzBtqisUkDKAZG0b1lD1dJsw3FWUt71tTNTqvTJK+6XGu0Oo0/fxbkNQfltTPeub9GlWhV8pb1G6usdVP3vJSkAAAAAElFTkSuQmCC',  // Icon的图像
            // imageOffset: new AMap.Pixel(0, -60),  // 图像相对展示区域的偏移量，适于雪碧图等
            imageSize: new AMap.Size(40, 40)   // 根据所设置的大小拉伸或压缩图片
        });
        const markerList = data.map((p: any) => new AMap.Marker({
            // icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAA8FBMVEVHcEz/1XD80VRCSVPi6O3q6OL/zlbUunn/z0v/zlT5zFRDSlRGTFVkaXJDSlRNUVQ/R1Lp4cz70GNzbFRUVVT/zlT/zlQPJlWfilLu3rTh4NpPwurn6u7+zlf/zlRES1X/zlFQwuhEwfJSw+pGwOn/z0w/RlH/1lVcxOB6zeo2QFFMwuzzzV7A3+s6r9rp5tpMwejCyoZCtuCz2+pexuqt2+1Av+nFy4ePf1TzzVv414SKxrju37Xj7Prm6ex4foXhuFTx3qyyv5A0seWZ099Wwt74+fvS3eNOuNZHsdFpZVTBolSPxrOqklS1ub+rk1Qt+8mUAAAAG3RSTlMA+3j5/YylA/yk/mMo96LRiYr9CPqnQSqr+0131O8lAAACKElEQVQ4y+WUe3OaQBTFt4BV0aiVvlJklwXlpSgVpGh9EDOaxCT9/h+n9y5Ek8aZtn/n7GOYM789lxn2QsjbVPWf9D+JUr3+/m/6JBFSNyg1DEM1cDcHx2EahrCFb6h1olKV1p7UfXdS7aUINejoO2iL2ySM4zi8gS1WfhxdIQBrD5ZlXV+nlpXOkmiX+rM0iqLQtoRtlULwp8Xt6ZhznsZ+n/f9uA/PYQIbH095KQAHBRhx3i/BVIDROZAX4AzAyJ9Boi3ACEEdp34CuUhMbUy0i0QdEwGCKRIfjqUh0cZEW7fPl4706biv6wCmPMV3jPQwGQ6HUHpYilCqbrnn3d7tPG8X+zyx/ThK7CT00Li79UoBSN0RaI5rqaB6uE26oyd7NFfnKoIGNU2YpjlYrtbrXg9Xb9JFR9gmXSwWCGKo68LHH1wBBJhYcBvQdsFerFYrgifcPMuy3FXNZW9dDkyk6mOW3WNJTJyAtk7gBOzeFaWLTADd/BCAMriHZs0kYN84DoPh5LVLZa2UgsRDACYLHl24lSqpKPuNw9iGsSBzL7FoIcXN4fDFheMcVKgOV/xbZeMEm/0m+NiWPlROkr7C+f2vgMmSJH0WXdORZUiUWedlM30BCxJZW4MmhDbUSJPJciAz1iTaswbVSJvJjiOzBtqisUkDKAZG0b1lD1dJsw3FWUt71tTNTqvTJK+6XGu0Oo0/fxbkNQfltTPeub9GlWhV8pb1G6usdVP3vJSkAAAAAElFTkSuQmCC',
            icon: icon,
            position: [p.lng, p.lat],
            offset: new AMap.Pixel(-13, -30)
        }));
        this.map.add(markerList)
        this.map.setFitView()
    }

    getLineData() {
        const data = getLine();
        const AMap = this.AMap
        const colors = [ "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477"]

        // console.log('getLineData: ', data)
        // const driving = new AMap.Driving({
        //     map: this.map,
        //     policy: AMap.DrivingPolicy.LEAST_TIME
        // });
        
        data.forEach((l: any, i: number) => {
            const stops = l.lineStops
            const len = stops.length
            const pathParam = stops.map((s: any) => [s.lng, s.lat])

            const line = new AMap.BezierCurve({
                path: pathParam,
                strokeWeight: 5,
                strokeStyle: 'solid',
                strokeOpacity: 1,
                strokeColor: colors[i % colors.length],
                showDir: true
            })
            this.map.add(line)

            // if(!this.graspRoad) {
            //     this.graspRoad = new AMap.GraspRoad()
            // }
            // this.graspRoad.driving(stops.map((s: any,idx:number)=>({x:s.lng,y:s.lat,sp:10,ag:0,tm: !idx?Date.now():idx+2})), (error: any, result: any) => {
            //     if(!error) {
            //         var path2 = [];
            //         var newPath = result.data.points;
            //         for(var i =0; i<newPath.length; i+=1) {
            //             path2.push([newPath[i].x, newPath[i].y])
            //         }
            //         var newLine = new AMap.Polyline({
            //             path: path2,
            //             strokeWeight: 6,
            //             strokeOpacity: 1,
            //             strokeColor: colors[i % colors.length],
            //             showDir: true
            //         })
            //         this.map.add(newLine)
            //     }
            // })
        })
        this.map.setFitView()
    }

    getLineData2() {
        const data = getLine();

        loadJS("//webapi.amap.com/ui/1.1/main.js", () => {
            AMapUI.loadUI(['misc/PathSimplifier'], (PathSimplifier: any) => {
                if (!PathSimplifier.supportCanvas) {
                    console.log('当前环境不支持 Canvas！');
                    return;
                }

                const colors = ['red', 'blue']
                var pathSimplifierIns = new PathSimplifier({
                    zIndex: 100,
                    map: this.map, //所属的地图实例
                    getPath: function(pathData: any, pathIndex: any) {
                        //返回轨迹数据中的节点坐标信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng|number,lat|number],...]
                        return pathData.path;
                    },
                    // getHoverTitle: function(pathData, pathIndex, pointIndex) {
                    //     //返回鼠标悬停时显示的信息
                    //     if (pointIndex >= 0) {
                    //         //鼠标悬停在某个轨迹节点上
                    //         return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length;
                    //     }
                    //     //鼠标悬停在节点之间的连线上
                    //     return pathData.name + '，点数量' + pathData.path.length;
                    // },
                    renderOptions: {
                        //轨迹线的样式
                        pathLineStyle: {
                            // strokeStyle: 'red',
                            // lineWidth: 6,
                            dirArrowStyle: true
                        },
                        getPathStyle: function(pathItem: any, zoom: any) {
                            var color = colors[pathItem.pathIndex % colors.length],
                                lineWidth = 6   // Math.round(4 * Math.pow(1.1, zoom - 3));

                            return {
                                pathLineStyle: {
                                    strokeStyle: color,
                                    lineWidth: lineWidth
                                },
                                pathLineSelectedStyle: {
                                    lineWidth: lineWidth + 2
                                },
                                pathNavigatorStyle: {
                                    fillStyle: color
                                }
                            };
                        }
                    }
                });
                const paths = data.map((d: any, i: number) => {
                    return {
                        name: d.lineName,
                        path: d.lineStops.map((s: any) => {
                            return [s.lng, s.lat]
                        })
                    }
                })
                // this.pathList = pathSimplifierIns;
                pathSimplifierIns.setData(paths);
            })
        })
    }

    // async getData() {
    //     return await CityApi.getStopPage()
    //         .then(res => res.json())
    //         .then(res => res.data.records);
    // }

    selectTab(index: number) {
        this.active = index;
        this.setTab(index);
    }

    async loadMap() {
        await AMapLoader.load({
            // key: "4ad9857374f6170a018c5d382813980c", // 申请好的Web端开发者Key，首次调用 load 时必填
            key: "529521f9a1c1351f14d75f0aa61b8d96",
            version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
            plugins: ['AMap.Driving', 'AMap.GraspRoad'] //插件列表
        }).then(AMap => {
            this.AMap = AMap;
            this.map = new AMap.Map("map", {
                mapStyle: "",
                zoom: 12,
                center: [120.432948, 36.145834]
            });

            // this.setTab(this.active);
            this.active === 1 ? this.getCarPosition() : this.getLineData();
            this.positionTimer = setInterval(() => this.getCarPosition(), 3000);

            // this.getLineData()
        })
        .catch(e => {
            console.log(e);
        });
    }

    setTab(index: number) {
        switch (index) {
            case 1:
                this.setTab1();
                break;
            case 2:
                this.setTab2();
                break;

            default:
                break;
        }
    }

    setTab1() {
        this.map.clearMap();
        // this.lineList ? this.lineList.forEach((l:any) => l.hide()) : null;
        this.getCarPosition();
        if (!this.positionTimer){
            this.positionTimer = setInterval(() => this.getCarPosition(), 3000);
        }
    }

    setTab2() {
        clearInterval(this.positionTimer);
        this.positionTimer = null
        this.map.clearMap();
        this.getLineData();
        // this.lineList.length > 0 ? this.lineList.forEach((l:any) => l.show()) : this.getLineData();
    }


}
</script>

<style lang="stylus" scoped>
.posi-item {
    position absolute
    top 12px
    right 12px
    bottom 12px
    left 12px

    ul.tabs {
        position: absolute;
        top: 16px;
        left: 20px;
        z-index 2

    }

    .tab {
        width:150px;
        height:60px;
        display flex
        align-items center
        justify-content center
        border-radius 30px
        background-color: rgba(1, 107,255, .2);
        text-align: center;
        margin-right 20px
        span {
            font-size:24px;
            font-weight:400;
            color:rgba(0,108,255,1);
            user-select none
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
    width: 100%;
    height: 100%;
    // transform: scale(0.125);
    // transform-origin: 0 0;
}


</style>