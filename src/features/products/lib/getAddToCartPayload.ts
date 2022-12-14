import { Product, Cart } from '@/shared/types';

export function getAddToCartPayload(product: Omit<Product, 'inCart'>): Cart {
    return {
        ...product,
        quantity: 1,
    };
}
