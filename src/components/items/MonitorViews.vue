<template>
    <div class="monitor-views">
        <div class="video-item">
            <video
                style="width:730px; height: 348px;"
                autoplay
                loop
            >
                <source
                    src="https://dwgk-hlzf.oss-cn-hangzhou.aliyuncs.com/zhcx/1.mp4"
                    type="video/mp4"
                >
            </video>
        </div>
        <div class="video-item">
            <video
                style="width:730px; height: 348px;"
                autoplay
                loop
            >
                <source
                    src="https://dwgk-hlzf.oss-cn-hangzhou.aliyuncs.com/zhcx/1.mp4"
                    type="video/mp4"
                >
            </video>
        </div>
        <div class="video-item">
            <video
                style="width:730px; height: 348px;"
                autoplay
                loop
            >
                <source
                    src="https://dwgk-hlzf.oss-cn-hangzhou.aliyuncs.com/zhcx/1.mp4"
                    type="video/mp4"
                >
            </video>
        </div>
        <div class="video-item">
            <video
                style="width:730px; height: 348px;"
                autoplay
                loop
            >
                <source
                    src="https://dwgk-hlzf.oss-cn-hangzhou.aliyuncs.com/zhcx/1.mp4"
                    type="video/mp4"
                >
            </video>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class MonitorViews extends Vue {
    
}
</script>

<style lang="stylus" scoped>
.monitor-views {
    position: absolute;
    top: 24px;
    left: 24px;
}

.video-item {
    float: left;
    margin-bottom: 18px;
    // margin-left: 24px;
    background-color: black;
}

</style>