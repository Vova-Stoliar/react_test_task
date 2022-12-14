import { PropsWithChildren } from 'react';
import { Cart } from '@/shared/types';
import { ProductCart } from '@/shared/ui';

interface CartItemProps {
    cartItem: Cart;
}

export const CartItem = (props: PropsWithChildren<CartItemProps>) => {
    const { children, cartItem } = props;

    const { description, price, title } = cartItem;

    return (
        <li>
            <ProductCart>
                <ProductCart.Title>{title}</ProductCart.Title>
                <ProductCart.Description>{description}</ProductCart.Description>
                <ProductCart.Price>{price}</ProductCart.Price>
                {children}
            </ProductCart>
        </li>
    );
};
