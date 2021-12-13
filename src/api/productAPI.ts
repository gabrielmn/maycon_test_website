const { api } = require('./api');
const { routes } = require('./routes');

export async function registerCategory(name: string, image: string) {
    const result = await api(routes.REGISTER_CATEGORY, { name: name, image: image });
    return result;
}

export async function registerProduct(categoryId: string, name: string, image: string) {
    const result = await api(routes.REGISTER_PRODUCT, {
        categoryId: categoryId,
        name: name,
        image: image
    });
    return result;
}

export async function getAllProduct() {
    const result = await api(routes.GET_ALL_PRODUCTS, null);
    return result;
}

export async function getAllCategories() {
    const result = await api(routes.GET_ALL_CATEGORIES, null);
    return result;
}
