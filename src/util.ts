// 数字格式化千分位
export function toThousands(num: number) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

export function loadJS(url: any, callback: any){
    var script: any = document.createElement('script'),

    fn = callback || function(){};
    script.type = 'text/javascript';
    //IE
    if(script.readyState){
        script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn();
            }
        };
    }else{
        //其他浏览器
        script.onload = function(){
          fn();
        };
    }

    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}