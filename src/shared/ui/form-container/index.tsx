import { ComponentProps, InputHTMLAttributes, PropsWithChildren } from 'react';
import { Title } from '../title';
import styles from './styles.module.css';

interface LabelContainerProps extends InputHTMLAttributes<HTMLDivElement> {}
interface FormContainerProps extends InputHTMLAttributes<HTMLDivElement> {}
interface FormProps extends InputHTMLAttributes<HTMLFormElement> {}
interface TitleProps extends ComponentProps<typeof Title> {}

export const FormContainer = (props: PropsWithChildren<FormContainerProps>) => {
    const { children, className = '', ...attributes } = props;

    return (
        <div className={`${className}`} {...attributes}>
            {children}
        </div>
    );
};

FormContainer.Title = (props: PropsWithChildren<TitleProps>) => {
    const { children, className = '', ...attributes } = props;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Title className={`${styles.formTitle} ${className}`} {...attributes}>
            {children}
        </Title>
    );
};

FormContainer.Form = (props: PropsWithChildren<FormProps>) => {
    const { children, className = '', ...attributes } = props;

    return (
        <form className={`${className}`} {...attributes}>
            {children}
        </form>
    );
};

FormContainer.LabelContainer = (props: PropsWithChildren<LabelContainerProps>) => {
    const { children, className = '', ...attributes } = props;

    return (
        <div className={`${styles.labelContainer} ${className}`} {...attributes}>
            {children}
        </div>
    );
};
