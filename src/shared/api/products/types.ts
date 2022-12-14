import { PartialExcept, Product } from '@/shared/types';

// TODO: add payload ending
export interface GetProductsPayload {
    options?: RequestInit;
    params?: {
        _page?: string;
        _limit?: string;
        title_like?: string;
    };
}

export type UpdateProductPayload = PartialExcept<Product, 'id'>;
