import { cartsApi, productsApi } from '@/shared/api';
import { Cart, Product } from '@/shared/types';
import { useCartsData } from '@/shared/hooks/useCartsData';

export const useCarts = () => {
    const { carts, refetchCarts } = useCartsData();

    const handleDelete = (id: Product['id']) => {
        Promise.all([productsApi.updatedProduct({ inCart: false, id }), cartsApi.deleteCart({ id })]).then(() => {
            refetchCarts();
        });
    };

    const handleIncreaseCartAmount = (cart: Cart) => {
        const { id, quantity } = cart;

        cartsApi.updatedCart({ id, quantity: quantity + 1 }).then(() => {
            refetchCarts();
        });
    };

    const handleDecreaseCartAmount = (cart: Cart) => {
        const { id, quantity } = cart;

        if (quantity === 1) return;

        cartsApi.updatedCart({ id, quantity: quantity - 1 }).then(() => {
            refetchCarts();
        });
    };

    return {
        carts,
        handleDelete,
        handleIncreaseCartAmount,
        handleDecreaseCartAmount,
    };
};
