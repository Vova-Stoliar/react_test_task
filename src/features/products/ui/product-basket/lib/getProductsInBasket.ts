import { Cart } from '@/shared/types';

export const getProductsInBasket = (carts: Cart[]) => {
    return carts.reduce((previousValue, { quantity }) => {
        return previousValue + quantity;
    }, 0);
};
