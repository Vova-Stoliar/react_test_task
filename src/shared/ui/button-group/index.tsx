import { InputHTMLAttributes, PropsWithChildren } from 'react';
import styles from './styles.module.css';

interface ButtonGroupProps extends InputHTMLAttributes<HTMLDivElement> {}

export const ButtonGroup = (props: PropsWithChildren<ButtonGroupProps>) => {
    const { children, ...buttonGroupAttributes } = props;

    return (
        <div className={styles.buttonsGroup} {...buttonGroupAttributes}>
            {children}
        </div>
    );
};
