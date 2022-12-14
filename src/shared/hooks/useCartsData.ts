import { useContext, useEffect, useState } from 'react';
import { cartsApi } from '../api';
import { GlobalAppContext } from '../context';
import { Cart } from '../types';

// TODO: set generic
export const useCartsData = () => {
    const globalAppContext = useContext(GlobalAppContext);
    const { carts: contextCarts } = globalAppContext ?? {};

    const [carts, setCarts] = useState<Cart[]>([]);

    const refetchCarts = async () => {
        const data = await cartsApi.getCarts();

        setCarts(data);
    };

    useEffect(() => {
        if (contextCarts) {
            setCarts(contextCarts);
        }
    }, [contextCarts]);

    useEffect(() => {
        if (globalAppContext) {
            refetchCarts();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { carts, refetchCarts };
};
