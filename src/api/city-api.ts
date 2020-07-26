import Http from './http';
const BASE =
  process.env.NODE_ENV === "production"
    ? "https://realtime-test.zhcscx.top/realtime"
    : "https://realtime-test.zhcscx.top/realtime";

export class CityApi {
  static getAllOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/all-order-num`, { ...params });
  }

  static getTodayOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/today-order-num`, { ...params });
  }

  static getHolidayOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/holiday-order-num`, { ...params });
  }

  static getLineOrderNum(params = {}) {
    return Http.$get(`${BASE}/order/line-order-num`, { ...params });
  }

  static getTodayVehicle(params = {}) {
    return Http.$get(`${BASE}/schedule/today-vehicle`, { ...params });
  }

  static getTodayTripInfos(params = {}) {
    return Http.$get(`${BASE}/schedule/today-tripInfos`, { ...params });
  }

}
