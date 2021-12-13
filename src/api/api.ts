import { Route } from "./routes";

export async function api(route: Route, body: JSON | null) {
    let options: RequestInit = {
        mode: 'cors',
        headers: route.headers,
        method: route.method
    }
    if(body !== null)
        options.body = JSON.stringify(body); 
    return await fetch(route.url, options);
}
