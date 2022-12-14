import { API_URL } from '@/shared/constants';
import { Product } from '@/shared/types';
import { getProductsHelper } from './lib';
import { GetProductsPayload, UpdateProductPayload } from './types';

export const getProducts = async (payload?: GetProductsPayload) => {
    const { options = {}, params = {} } = payload ?? {};
    const { getSearchparams, getTotalProductsCountFromHeader } = getProductsHelper();

    const response = await fetch(`${API_URL}products?${getSearchparams(params)}`, options);
    const products: Product[] = await response.json();

    return { products, totalProductsCount: getTotalProductsCountFromHeader(response) };
};

export const getProductById = async ({ id }: Pick<Product, 'id'>) => {
    const productById: Product = await (await fetch(`${API_URL}products/${id}`)).json();

    return productById;
};

export const deleteProduct = async ({ id }: Pick<Product, 'id'>) => {
    return fetch(`${API_URL}products/${id}`, { method: 'DELETE' });
};

export const updatedProduct = async (payload: UpdateProductPayload) => {
    const { id, ...rest } = payload;

    return fetch(`${API_URL}products/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(rest),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const creteProduct = async (payload: Product) => {
    return fetch(`${API_URL}products`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
