import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap-4-grid";
import highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import highcharts3d from 'highcharts/highcharts-3d'
import SolidGauge from 'highcharts/modules/solid-gauge.js';

highcharts3d(highcharts) 
HighchartsMore(highcharts);
SolidGauge(highcharts)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
