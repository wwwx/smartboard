<template>
    <div class="revenue d-flex justify-content-center" v-if="orderData">
        <div class="revenue-amount d-flex justify-content-center">
            <div>
                <NumberCard :num="orderData.avgYield" />
                <div class="revenue-title">平均公交盈收（元）</div>
            </div>
        </div>
        <div class="revenue-rate d-flex justify-content-center">
            <div>
                <div class="rate-number">{{ 100 * orderData.fillRate }}%</div>
                <div class="rate-title">完单率</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import NumberCard from './NumberCard.vue'
import { CityApi } from '@/api/city-api';
@Component({
    components: {
        NumberCard
    }
})
export default class  extends Vue {
    orderData: any = null

    async created() {

        try {
            const { code, data } = await CityApi.getOrderYield({ orderType: 3 });
            this.orderData = data; 

        } catch (error) {
            
        }

    }

}
</script>

<style lang="stylus" scoped>
.revenue-amount {
    margin-right 220px
}
.revenue-amount,
.revenue-rate {
    min-width: 200px;
    margin-top 20px
    text-align center
}
.revenue-title,
.rate-title {
    margin-top 20px
    font-size:26px;
    font-weight:200;
    color:rgba(255,255,255,1);
}
.rate-number {
    font-size:54px;
    font-weight:300;
    color:rgba(0,255,255,1);
}

</style>