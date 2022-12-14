import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = (props: PropsWithChildren<ButtonProps>) => {
    const { children, className = '', ...buttonAttributes } = props;

    return (
        <button className={`${styles.button} ${className}`} {...buttonAttributes}>
            {children}
        </button>
    );
};
