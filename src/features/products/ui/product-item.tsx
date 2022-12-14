import { PropsWithChildren } from 'react';
import { Product } from '@/shared/types';
import { ProductCart } from '@/shared/ui';

interface ProductItemProps {
    productItem: Product;
}

export const ProductItem = (props: PropsWithChildren<ProductItemProps>) => {
    const { children, productItem } = props;

    const { description, price, title } = productItem;

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
