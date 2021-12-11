const { api } = require('./api');
const { routes } = require('./routes');

export async function login(username: string, password: string) {
    const result = await api(routes.LOGIN, { username: username, password: password });
    return result;
}