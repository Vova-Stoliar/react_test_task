import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { cartsApi, productsApi } from '@/shared/api';
import { Product, ProductsWithTotalCount } from '@/shared/types';
import { GetProductsPayload } from '@/shared/api/products/types';
import { useCartsData } from '@/shared/hooks/useCartsData';
import { debounce } from '@/shared/lib';
import { useProductsWithTotalCount } from '@/shared/hooks';
import { getAddToCartPayload, getSearParams } from '../lib';
import { routes } from '@/shared/constants';

export const useProducts = () => {
    const { productsWithTotalCount, refetchProductsWithTotalCount } = useProductsWithTotalCount();
    const { carts, refetchCarts } = useCartsData();
    const navigate = useNavigate();

    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState<ProductsWithTotalCount['products']>([]);
    const [valueToSearchProduct, setValueToSearchProduct] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;

        setSearchParams(getSearParams(value));
        setValueToSearchProduct(value);
        debounce(async () => refetchProductsWithTotalCount({ title_like: value }), 1000);
    };

    const handleDelete = async (id: Product['id']) => {
        await Promise.all([cartsApi.deleteCart({ id }), productsApi.deleteProduct({ id })]);
        await Promise.all([refetchProductsWithTotalCount(), refetchCarts()]);
    };

    // TODO: don't send request clicking in the same page
    const handleSelectPage = (params: GetProductsPayload['params']) => {
        refetchProductsWithTotalCount(params);
    };

    const handleEditProduct = (product: Product) => {
        navigate(`${routes.editView(product.id)}`, { state: product });
    };

    const handleAddToCart = async (product: Product) => {
        const { inCart, ...restProductFields } = product;

        await Promise.all([
            productsApi.updatedProduct({ ...product, inCart: true }),
            cartsApi.addProductToCart(getAddToCartPayload(restProductFields)),
        ]);
        await Promise.all([refetchProductsWithTotalCount(), refetchCarts()]);
    };

    useEffect(() => {
        if (productsWithTotalCount) {
            setProducts(productsWithTotalCount.products);
        }
    }, [productsWithTotalCount]);

    useEffect(() => {
        setValueToSearchProduct(searchParams.get('title') ?? '');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        products,
        totalProductsCount: productsWithTotalCount?.totalProductsCount ?? 0,
        carts,
        valueToSearchProduct,
        handleChange,
        handleDelete,
        handleSelectPage,
        handleAddToCart,
        refetchCarts,
        handleEditProduct,
    };
};
