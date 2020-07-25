<template>
    <div class="route-line">
        <h3 class="title">今日排班</h3>

        <div class="line-title 1-1" style="width: 280px; top: 144px;">庄子—百果山 森林公园</div>
        <div class="line-title 1-2" style="width: 270px; top: 444px;">百果山森林公园—庄子</div>
        <div class="line-title 2-0" style="width: 259px; top: 750px; font-size: 61px;">605路</div>
        <div class="line-title 2-1" style="width: 259px; top: 860px; left: 30px; color: white;">上行</div>
        <div class="line-title 2-2" style="width: 259px; top: 1200px; left: 30px; color: white;">下行</div>

        <div class="line-container">


            <div class="line line-1-1 line-right">
                <div class="line-inner">
                    <div v-for="(node, index) in nodeList" :key="index">
                        <div class="line-node" :style="{ left: 172 * index + 'px' }"> 
                            <span></span>
                        </div>
                        <div class="line-station" :style="{ left: 172 * index + 10 + 'px' }">
                            {{ node.title }}
                        </div>
                    </div>
                </div>
                <div class="line-end"></div>
                <div class="line-buses up">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index - 2 + 'px', visibility: ([5,7].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
                
            </div>


            <div class="line line-1-2 line-left">
                <div class="line-inner">
                    <div class="line-node" v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index + 80 + 'px' }"
                    > 
                        <span></span>
                    </div>
                </div>
                <div class="line-start"></div>
                <div class="line-buses down">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index+ 78 + 'px', visibility: ([3].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
            </div>


            <div class="line line-2-1 line-right">
                <div class="line-inner">
                    <div v-for="(node, index) in nodeList" :key="index">
                        <div class="line-node" :style="{ left: 172 * index + 'px' }"> 
                            <span></span>
                        </div>
                        <div class="line-station" :style="{ left: 172 * index + 10 + 'px' }">
                            {{ node.title }}
                        </div>
                    </div>
                </div>
                <div class="line-end"></div>
                <div class="line-buses up">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index - 2 + 'px', visibility: ([2,7].indexOf(index) > -1) && 'visible' }"
                    ></span>
                </div>
            </div>


            <div class="line line-2-2 line-left">
                <div class="line-inner">
                    <div class="line-node" v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index + 80 + 'px' }"
                    > 
                        <span></span>
                    </div>
                </div>
                <div class="line-start"></div>
                <div class="line-buses down">
                    <span v-for="(node, index) in nodeList" :key="index"
                        :style="{ left: 172 * index+ 78 + 'px', visibility: ([6,9].indexOf(index) > -1) && 'visible' }"
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
    font-size:61px;
    font-weight:400;
    color:rgba(246,247,247,1);
}
.line-title {
    font-size:46px;
    font-weight:400;
    color:rgba(0,255,255,1);
    position absolute
    line-height 1.2em
}
.line {
    margin-top: 80px;
    width: 2138px;
    height: 5px;
    background-color: #02FFFF;
    position: relative;
    left: 300px;

}
.line-1-2,
.line-2-2 {
    left: 224px;
}
.line-1-1 {
    margin-top: 140px;
}
.line-1-2,
.line-2-1,
.line-2-2 {
    margin-top: 340px;
}
.line-inner {
    position: relative;
    left: 120px;
}

.line-end {
    margin-top: 80px;
    width: 120px;
    height: 5px;
    background-color: #02FFFF;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: rotate(24deg);
    transform-origin right;
}
.line-start {
    margin-top: 80px;
    width: 120px;
    height: 5px;
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
    width: 54px;
    height: 54px;
    border: 2px solid #02FFFF;
    border-radius: 50%;
    position: absolute;
    top: -24px;

    // padding: 10px;
    span {
        position: absolute;
        top: 12px;
        left: 12px;
        display: inline-block;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background-color: #02FFFF;
    }
}

.line-station {
    display inline-block;
    position: absolute;
    top: 48px;
    height 270px
    font-size:36px;
    font-weight:400;
    color:rgba(255,255,255,1);
    writing-mode: tb-rl; 
    line-height 1.1em;

    
}

.line-buses {
    position: relative;
    left: 108px;

    span {
        position: absolute;
        top: 0;
        width: 80px;
        height: 80px;
        background-image: url('~@/assets/bus.png');
        background-repeat: no-repeat;
        background-size: contain;
        visibility hidden
    }

    &.up {
        top:-96px;
    }

    &.down {
        top:26px;

        span {
            transform rotate(180deg)
        }
    }
}
</style>