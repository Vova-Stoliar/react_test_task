import { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { getClassNames } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { routes } from '@/shared/constants';
import { Cart } from '@/shared/types';
import { getProductsInBasket } from '../lib/getProductsInBasket';

interface ProductBasketProps {
    carts: Cart[];
}

export const ProductBasket = (props: PropsWithChildren<ProductBasketProps>) => {
    const { carts } = props;
    const navigate = useNavigate();

    const productsInBasket = getProductsInBasket(carts);

    return (
        <Button className={styles.button} onClick={() => navigate(routes.cartView)}>
            <span className={styles.basket} />
            <span className={getClassNames(styles.total, { [styles.smallTotal]: productsInBasket < 10 })}>
                {productsInBasket}
            </span>
        </Button>
    );
};
