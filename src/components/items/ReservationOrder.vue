<template>
    <div class="reservation-order">
        <div class="title">实时预约订单</div>
        <div v-if="order">
            <div class="block-head d-flex justify-content-between">
                <span>预约时间：{{ order.expectStartTime }}</span>
                <span>乘客：{{ order.seatNum }}人</span>
            </div>
            <div class="block-body">
                <ul>
                    <li class="style1">{{ order.originAddress }}</li>
                    <li class="style2">{{ order.destinationAddress }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { CityApi } from '../../api/city-api';
import { EventBus } from '../../eventBus';

@Component
export default class extends Vue {
    order: any = null

    mounted() {
        this.getData();

        EventBus.$on('refresh_5s', () => {
            this.getData();
        });
    }

    async getData() {
        const { data } = await CityApi.getRealtimeOrder({ orderType: 3 });
        // console.log(data)
        this.order = data
    }
}
</script>

<style lang="stylus" scoped>
.reservation-order {
    .title {
        margin: 0;
        margin-bottom: 24px;
        line-height: 1;
        font-size:26px;
        font-weight:400;
        color:rgba(0,202,222,1);

    }
    .block-head {
        font-size: 20px;
        font-weight:400;
        color:rgba(246,247,247,1);
        margin-bottom: 34px;
    }
    .block-body {

        ul {
            padding-left: 34px;
            li {
                font-size: 25px;
                font-weight:400;
                color:rgba(246,247,247,1);
                margin-bottom: 34px;
                position: relative;

                &:before {
                    content: ""
                    position: absolute;
                    top: 5px;
                    left: -30px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                }
            }

            li.style1:before {  background-color:#01FFFF; }

            li.style2:before {  background-color:#FF9F03; }
        }
    }
}
</style>