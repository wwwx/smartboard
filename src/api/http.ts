class Http {
    static $get(url: string, params: any) {  
        if (params) {  
            let paramsArray: string[] = [];  
            //拼接参数  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
            if (url.search(/\?/) === -1) {  
                url += '?' + paramsArray.join('&')  
            } else {  
                url += '&' + paramsArray.join('&')  
            }  
        }  
        //fetch请求  
        return fetch(url,{  
            method: 'GET',  
        })  
            .then((response) => response.json())
            .catch((error) => {  
                alert(error)  
            })  
    } 
}

export default Http