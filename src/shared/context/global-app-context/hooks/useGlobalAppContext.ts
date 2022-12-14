import { useEffect, useRef, useState } from 'react';
import { Nullable } from '@/shared/types';
import { AppContext } from '../types';
import { productsApi, cartsApi } from '@/shared/api';
import { getTitleToSearch, getTransformedData } from '../lib';

export const useGlobalAppContext = () => {
    const [globalAppContext, setGlobalAppContext] = useState<Nullable<AppContext>>(null);

    async function getFetchContextData() {
        return Promise.allSettled([
            { products: productsApi.getProducts({ params: { title_like: getTitleToSearch() } }) },
            { carts: cartsApi.getCarts() },
        ]);
    }

    const getGlobalContextData = useRef(async () => {
        const fetchedContextData = await getFetchContextData();
        const transformedData = await getTransformedData(fetchedContextData);

        return transformedData;
    });

    useEffect(() => {
        getGlobalContextData.current().then((contextData) => {
            setGlobalAppContext(contextData);
        });
    }, []);

    return { globalAppContext };
};
