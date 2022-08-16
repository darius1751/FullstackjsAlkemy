export class HttpService<T>{
    private async httpRequest(url:string,options:RequestInit):Promise<T>{
        const abortController = new AbortController();
        options.signal = abortController.signal;
        options.headers = {};
        options.headers['accept'] = 'application/json';
        options.headers['content-type'] = 'application/json';
        if(options.method === 'GET')
            delete options.body;
        else
            options.body = JSON.stringify(options.body);
            setTimeout(
            () => {
                abortController.abort();
            },3000);
        let response = await fetch(url,options);
        if(response.ok)
            return await response.json();
        else
            return Promise.reject(await response.json() || 
                {
                    status:response.status || 500,
                    statusText:response.statusText || '',
                    error: 'Error del lado del servidor'
                }
            );

    }
    public async httpGet(url:string,options:RequestInit = {}):Promise<T>{
        options.method = 'GET';
        return await this.httpRequest(url,options);
    }
    public async httpPost(url:string,options:RequestInit):Promise<T>{
        options.method = 'POST';
        return await this.httpRequest(url,options);
    }
    public async httpPut(url:string,options:RequestInit):Promise<T>{
        options.method = 'PUT';
        return await this.httpRequest(url,options);
    }
    public async httpDelete(url:string,options:RequestInit):Promise<T>{
        options.method = 'DELETE';
        return await this.httpRequest(url,options);
    }
    
}