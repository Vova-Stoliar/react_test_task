import { InputHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface CartGroupProps extends InputHTMLAttributes<HTMLUListElement> {}

export const CartGroup = (props: PropsWithChildren<CartGroupProps>) => {
    const { children, className = '', ...attributes } = props;

    return (
        <ul className={`${styles.list} ${className}`} {...attributes}>
            {children}
        </ul>
    );
};
