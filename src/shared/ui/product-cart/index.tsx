import { PropsWithChildren } from 'react';
import { Title } from '../title';
import styles from './styles.module.css';

export const ProductCart = (props: PropsWithChildren) => {
    const { children } = props;

    return <div className={styles.productCart}>{children}</div>;
};

ProductCart.Title = (props: PropsWithChildren) => {
    const { children } = props;

    return <Title>{children}</Title>;
};
ProductCart.Description = (props: PropsWithChildren) => {
    const { children } = props;

    return <Title>{children}</Title>;
};
ProductCart.Price = (props: PropsWithChildren) => {
    const { children } = props;

    return <Title>{children}</Title>;
};
