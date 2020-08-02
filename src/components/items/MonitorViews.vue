<template>
    <div class="monitor-views">
        <div
            class="video-item"
            v-for="i in [1,5,3,4,2,6]"
            :key="i"
        >
            <video
                style="object-fit: cover;width:360px; height: 170px;"
                autoplay
                loop
                muted
            >
                <source
                    :src="'https://zhcxtest.oss-cn-shanghai.aliyuncs.com/zhanshi/' + i +'.mp4'"
                    type="video/mp4"
                >
            </video>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MonitorViews extends Vue {}
</script>

<style lang="stylus" scoped>
.monitor-views {
    position: absolute;
    top: 12px;
    left: 12px;
}

.video-item {
    float: left;
    margin-bottom: 5px;
    // margin-left: 24px;
    background-color: black;
}
</style>