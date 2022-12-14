import { FormEvent, useState, ChangeEvent, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { productsApi } from '@/shared/api';
import { Nullable, Product } from '@/shared/types';
import { getProductIdFrom } from '../lib/getProductIdFrom';
import { routes } from '@/shared/constants';

export const useEditProduct = () => {
    const [productToEdit, setProductToEdit] = useState<Nullable<Product>>(null);
    const { state, pathname } = useLocation();
    const navigate = useNavigate();

    const getProductById = useRef(async () => {
        const productById = await productsApi.getProductById({ id: getProductIdFrom(pathname) });

        setProductToEdit(productById);
    });

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!productToEdit) return;

        productsApi.updatedProduct(productToEdit).then(() => {
            navigate(routes.mainView);
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setProductToEdit((currentState) => {
            if (!currentState) return currentState;

            return {
                ...currentState,
                [name]: value,
            };
        });
    };

    const getProductValue = (productField: keyof Product) => {
        if (!productToEdit) return '';

        return productToEdit[productField] ? String(productToEdit[productField]) : '';
    };

    useEffect(() => {
        if (state) {
            setProductToEdit(state);
        } else {
            getProductById.current();
        }
    }, [pathname, state]);

    return { handleSubmit, handleChange, getProductValue, productToEdit };
};
