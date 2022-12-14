import { InputHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface InputProps extends InputHTMLAttributes<HTMLParagraphElement> {}

export const Input = (props: InputProps) => {
    const { className = '', ...inputAttributes } = props;

    return <input className={`${styles.input} ${className}`} type="text" {...inputAttributes} />;
};
