import { FormEvent, useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from '@/shared/constants';
import { productsApi } from '@/shared/api';
import { getFormFieldsValue } from '../lib/getFormFieldsValue';
import { getProductToCreate } from '../lib/getProductToCreate';

export const useCreateProduct = () => {
    const [formFieldValue, setFormFieldValue] = useState(() => getFormFieldsValue());
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        productsApi.creteProduct(getProductToCreate(formFieldValue)).then(() => {
            navigate(routes.mainView);
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormFieldValue((currentState) => ({
            ...currentState,
            [name]: value,
        }));
    };

    return { handleSubmit, handleChange, formFieldValue };
};
