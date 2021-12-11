const HOST =  'http://20.195.198.55:3001'

enum Method {
    POST = "POST",
    GET = "GET",
    PATCH = "PATCH",
    DELETE = "DELETE"
}

export class Route {

    readonly url: string
    readonly params?: string | number
    readonly method: Method
    readonly headers: Headers

    constructor(url: string, method: Method, headers: Headers, params?: string | number) {
        this.url = `${HOST}${url}/${(params!== undefined)?params: ''}`;
        this.method = method
        this.headers = headers
    }
}

export const routes = Object.freeze({
    LOGIN: new Route(
        '/user/login',
        Method.POST,
        new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    ),
    REGISTER_CATEGORY: new Route(
        '/product/category',
        Method.POST,
        new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    ),
    REGISTER_PRODUCT: new Route(
        '/product',
        Method.POST,
        new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        })
    ),
})