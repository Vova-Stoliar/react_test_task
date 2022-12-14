import { Cart, ProductsWithTotalCount } from '@/shared/types';

export interface AppContext {
    carts?: Cart[];
    products?: ProductsWithTotalCount;
}

export type FetchContextData = [
    PromiseSettledResult<{
        products: Promise<NonNullable<AppContext['products']>>;
    }>,
    PromiseSettledResult<{
        carts: Promise<NonNullable<AppContext['carts']>>;
    }>,
];
