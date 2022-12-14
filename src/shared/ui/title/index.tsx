import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface TitleProps extends ButtonHTMLAttributes<HTMLParagraphElement> {}

export const Title = (props: PropsWithChildren<TitleProps>) => {
    const { children, className = '', ...paragraphAttributes } = props;

    return (
        <p className={`${styles.title} ${className}`} {...paragraphAttributes}>
            {children}
        </p>
    );
};
