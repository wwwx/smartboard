<template>
    <div class="route-line">
        <h3 class="title">今日排班</h3>

        <div class="line-title 1-1" style="width: 140px; top: 76px;">青岛院士港</div>
        <div class="line-title 1-2" style="width: 140px; top: 210px;">青岛院士港</div>
        <div class="line-title 2-0" style="width: 140px; top: 350px; font-size: 28px;">605路</div>
        <div class="line-title 2-1" style="width: 140px; top: 410px; left: 30px; color: white;">上行</div>
        <div class="line-title 2-2" style="width: 140px; top: 567px; left: 30px; color: white;">下行</div>

        <div class="line-container">


            <div class="line line-1-1 line-right">
                <div class="line-inner">
                    <div v-for="(node, index) in nodeList" :key="index">
                        <div class="line-node" :style="{ left: 84 * index + 'px' }"> 
                            <span></span>
                        </div>
                        <div class="line-station" :style="{ left: 84 * index+ 3 + 'px' }">
                            {{ node.title }}
                        </div>
                    </div>
                </div>
                <div class="line-end"></div>
                <div class="line-buses up">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index - 9 + 'px', visibility: ([1,7].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
                
            </div>


            <div class="line line-1-2 line-left">
                <div class="line-inner">
                    <div class="line-node" v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index + 32 + 'px' }"
                    > 
                        <span></span>
                    </div>
                </div>
                <div class="line-start"></div>
                <div class="line-buses down">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index+ 28 + 'px', visibility: ([3, 8].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
            </div>


            <div class="line line-2-1 line-right">
                <div class="line-inner">
                    <div v-for="(node, index) in nodeList" :key="index">
                        <div class="line-node" :style="{ left: 84 * index + 'px' }"> 
                            <span></span>
                        </div>
                        <div class="line-station" :style="{ left: 84 * index+ 3 + 'px' }">
                            {{ node.title }}
                        </div>
                    </div>
                </div>
                <div class="line-end"></div>
                <div class="line-buses up">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index - 9 + 'px', visibility: ([2,5].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
            </div>


            <div class="line line-2-2 line-left">
                <div class="line-inner">
                    <div class="line-node" v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index + 32 + 'px' }"
                    > 
                        <span></span>
                    </div>
                </div>
                <div class="line-start"></div>
                <div class="line-buses down">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 84 * index+ 28 + 'px', visibility: ([4,6,9].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
            </div>


        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RouteLine extends Vue {
    nodeList = [
        {title: '狮子营'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '森林公园北站旅客送积分'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '森林公园北站'},
        {title: '汽车北站 '},
    ]
}
</script>

<style lang="stylus" scoped>
.route-line {
    // font-size: 58px;
}
.title {
    font-size:28px;
    font-weight:400;
    color:rgba(246,247,247,1);
}
.line-title {
    font-size:22px;
    font-weight:400;
    color:rgba(0,255,255,1);
    position absolute
    line-height 1.2em
}
.line {
    margin-top: 40px;
    width: 990px;
    height: 2px;
    background-color: #02FFFF;
    position: relative;
    left: 150px;

}
.line-1-2,
.line-2-2 {
    left: 120px;
}
.line-1-1 {
    margin-top: 80px;
}
.line-1-2,
.line-2-1,
.line-2-2 {
    margin-top: 158px;
}
.line-inner {
    position: relative;
    left: 50px;
}

.line-end {
    margin-top: 40px;
    width: 60px;
    height: 2px;
    background-color: #02FFFF;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(24deg);
    transform-origin right;
}
.line-start {
    margin-top: 40px;
    width: 60px;
    height: 2px;
    background-color: #02FFFF;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: rotate(-24deg);
    transform-origin left;
}
.line-node {
    box-sizing: border-box;
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid #02FFFF;
    border-radius: 50%;
    position: absolute;
    top: -11px;

    // padding: 10px;
    span {
        position: absolute;
        top: 4px;
        left: 4px;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: #02FFFF;
    }
}

.line-station {
    display inline-block;
    position: absolute;
    top: 24px;
    
    height 124px
    font-size:16px;
    font-weight:400;
    color:rgba(255,255,255,1);
    writing-mode: tb-rl; 
    line-height 1.1em;

    
}

.line-buses {
    position: relative;
    left: 48px;

    span {
        position: absolute;
        top: 0;
        width: 40px;
        height: 40px;
        background-image: url('~@/assets/bus.png');
        background-repeat: no-repeat;
        background-size: contain;
        visibility hidden
    }

    &.up {
        top:-42px;
    }

    &.down {
        top:4px;

        span {
            transform rotate(180deg)
        }
    }
}
</style>