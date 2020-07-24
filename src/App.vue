<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="stylus">
body {
    margin: 0;
    color: white;
    line-height: 1;
    font-family: Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Heiti SC', 'Microsoft YaHei', 'WenQuanYi Micro Hei';
}
* {
    margin: 0;
    padding: 0;
}
ul, li {
    list-style: none;
}
.ps { position: absolute; }
.pr { position: relative; }
.highcharts-background { fill: #021140 }

.chart-container {
    position: relative
    flex 1 1 auto

    display flex
    justify-content center
}
.border-none { border: 0 !important; position: relative; top: -100px; }
</style>
