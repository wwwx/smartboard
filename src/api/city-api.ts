import Http from './http';
const BASE =
  process.env.NODE_ENV === "production"
    ? "https://realtime-test.zhcscx.top/realtime"
    : "https://realtime-test.zhcscx.top/realtime";

export class CityApi {
  static getAllOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/all-order-num`, params);
  }

  static getTodayOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/today-order-num`, params);
  }

  static getHolidayOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/holiday-order-num`, params);
  }

  static getLineOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/line-order-num`, params);
  }

  static getOrderYield(params = {}) {
    return Http.$get(`${BASE}/order/order-yield`, params);
  }

  static getUserNum(params = {}) {
    return Http.$get(`${BASE}/order/user-num`, params);
  }

  static getOrderDayLive(params = {}) {
    return Http.$get(`${BASE}/order/order-day-live`, params);
  }

  static getVehicleList(params = {}) {
    return Http.$post(`${BASE}/schedule/vehicle-list`, params);
  }

  static getTodayVehicle(params = {}) {
    return Http.$get(`${BASE}/schedule/today-vehicle`, params);
  }

  static getTodayTripInfos(params = {}) {
    return Http.$get(`${BASE}/schedule/today-tripInfos`, params);
  }

  static getAvgVehicleNum(params = {}) {
    return Http.$get(`${BASE}/schedule/avg-vehicle-num`, params);
  }

  static getLoadRate(params = {}) {
    return Http.$get(`${BASE}/schedule/load-rate`, params);
  }

  static getTurnOverNum(params = {}) {
    return Http.$get(`${BASE}/schedule/turnover-num`, params);
  }

  static getSeatPeakRate(params = {}) {
    return Http.$get(`${BASE}/schedule/seat-peak-rate`, params);
  }

  static getVehicleStatus(params = {}) {
    return Http.$get(`${BASE}/schedule/vehicle-status`, params);
  }

  static getSeatNum(params = {}) {
    return Http.$get(`${BASE}/schedule/seat-num`, params);
  }

  static getLineCollect(params = {}) {
    return Http.$get(`${BASE}/schedule/line-collect`, params);
  }

  static getLineRate(params = {}) {
    return Http.$get(`${BASE}/schedule/line-rate`, params);
  }

}
