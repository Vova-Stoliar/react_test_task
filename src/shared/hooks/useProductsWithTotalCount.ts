import { useContext, useEffect, useState } from 'react';
import { productsApi } from '../api';
import { GetProductsPayload } from '../api/products/types';
import { GlobalAppContext } from '../context';
import { Nullable, ProductsWithTotalCount } from '../types';

export const useProductsWithTotalCount = () => {
    const globalAppContext = useContext(GlobalAppContext);
    const { products: contextProducts } = globalAppContext ?? {};

    const [productsWithTotalCount, setProductsWithTotalCount] = useState<Nullable<ProductsWithTotalCount>>(null);

    const refetchProductsWithTotalCount = async (params?: GetProductsPayload['params']) => {
        const data = await productsApi.getProducts({ params });

        setProductsWithTotalCount(data);
    };

    useEffect(() => {
        if (contextProducts) {
            setProductsWithTotalCount(contextProducts);
        }
    }, [contextProducts]);

    useEffect(() => {
        if (globalAppContext) {
            refetchProductsWithTotalCount();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { productsWithTotalCount, refetchProductsWithTotalCount };
};
