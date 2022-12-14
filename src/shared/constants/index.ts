export const routes = {
    mainView: '/',
    createView: 'create-view',
    cartView: 'cart-view',
    editView: (productId?: string) => {
        const route = 'edit-view/:productId';
        if (productId) {
            return route.replace(':productId', productId);
        }

        return route;
    },
} as const;

export const PRODUCTS_PER_PAGE = 10;

export const API_URL = 'http://localhost:3004/';

export const productFormFields = ['title', 'price', 'description'] as const;
