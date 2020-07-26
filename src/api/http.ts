class Http {
    static $get(url: string, params: any) {  
        if (params) {  
            let paramsArray: string[] = [];  
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))  
            if (url.search(/\?/) === -1) {  
                url += '?' + paramsArray.join('&')  
            } else {  
                url += '&' + paramsArray.join('&')  
            }  
        } 
        return fetch(url,{  
            method: 'GET',  
        })  
            .then((response) => response.json())
            .catch((error) => {  
                alert(error)  
            })  
    } 

    static $post(url: string, params: any) {
        return fetch(url, {
            method: "POST",
            headers: new Headers({
              "Content-Type": "application/json",
            }),
            body: JSON.stringify({ ...params }),
        })  
            .then((response) => response.json())
            .catch((error) => {  
                alert(error)  
            });
    }
}

export default Http