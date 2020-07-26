// 数字格式化千分位
export function toThousands(num: number) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}