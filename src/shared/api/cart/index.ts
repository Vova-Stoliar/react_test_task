import { API_URL } from '@/shared/constants';
import { Cart } from '@/shared/types';
import { UpdateCartPayload } from './types';

export const addProductToCart = async (payload: Cart) => {
    return fetch(`${API_URL}cart`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const getCarts = async () => {
    const carts: Cart[] = await (await fetch(`${API_URL}cart`)).json();

    return carts;
};

export const deleteCart = async ({ id }: Pick<Cart, 'id'>) => {
    return fetch(`${API_URL}cart/${id}`, { method: 'DELETE' });
};

export const updatedCart = async (payload: UpdateCartPayload) => {
    const { id, ...rest } = payload;

    return fetch(`${API_URL}cart/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(rest),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
