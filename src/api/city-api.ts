const BASE =
  process.env.NODE_ENV === "production"
    ? "/realtime/v2"
    : "https://realtime-test.zhcscx.top/realtime/v2";

export class CityApi {
  static getReserveList() {
    return fetch(`${BASE}/order/list-line-num`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getOrderData() {
    return fetch(`${BASE}/order/list-month-num`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getAllUserData() {
    return fetch(`${BASE}/order/stat`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getSeatData() {
    return fetch(`${BASE}/schedule/trip-seat-ratio`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getRealTimeOrderData() {
    return fetch(`${BASE}/order/lately`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getTripList() {
    return fetch(`${BASE}/schedule/trip-list`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  static getToday() {
    return fetch(`${BASE}/order/today`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  // 地图模块-班车路线
  static getLineList() {
    return fetch(`${BASE}/schedule/line-list`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  // 地图模块-智慧站点-查看站点详情
  static getStopDetail(id: number) {
    return fetch(`${BASE}/schedule/stop-detail`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id }),
    });
  }

  // 地图模块-智慧站点-分页查询站点基本信息
  static getStopPage(current = 1, size = 20) {
    return fetch(`${BASE}/schedule/stop-page`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ current, size }),
    });
  }

  // 地图模块-班车位置-车辆乘客信息
  static getVehicleDetail(id: number) {
    return fetch(`${BASE}/schedule/vehicle-detail`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id }),
    });
  }
  // 地图模块-班车位置-车辆位置
  static getVehicleLocation(id: number) {
    return fetch(`${BASE}/schedule/vehicle-location`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id }),
    });
  }

  // 地图模块-班车位置-车辆列表
  static getVehicleList() {
    return fetch(`${BASE}/schedule/vehicle-list`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  // 地图模块-班车位置-车辆数量
  static getVehicleNum() {
    return fetch(`${BASE}/schedule/vehicle-num`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }

  // 在线平均运营车速模块
  static getVehicleReserve() {
    return fetch(`${BASE}/schedule/vehicle-reserve`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });
  }
}
