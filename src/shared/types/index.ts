export type Nullable<T> = T | null;
export type PartialExcept<T, K extends keyof T> = Partial<Omit<T, K>> & Pick<T, K>;

export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    inCart: boolean;
}

export interface Cart extends Omit<Product, 'inCart'> {
    quantity: number;
}

export interface ProductsWithTotalCount {
    products: Product[];
    totalProductsCount: number;
}

export type FormFields = Pick<Product, 'description' | 'price' | 'title'>;
