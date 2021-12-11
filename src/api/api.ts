import { Route } from "./routes";

export async function api(route: Route, body: JSON){
    return await fetch(route.url, {
        mode:'cors',
        headers: route.headers,
        method: route.method,
        body: JSON.stringify(body)
    })
}
