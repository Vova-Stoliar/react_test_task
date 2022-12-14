import { productFormFields } from '@/shared/constants';
import { capitalize } from '@/shared/lib';
import { Button, FormContainer, Input } from '@/shared/ui';
import { useCreateProduct } from '../hooks/useCreateProduct';

export const CreateProduct = () => {
    const { handleSubmit, handleChange, formFieldValue } = useCreateProduct();

    return (
        <FormContainer>
            <FormContainer.Title>Create Product</FormContainer.Title>

            <FormContainer.Form onSubmit={handleSubmit}>
                {productFormFields.map((field) => (
                    <FormContainer.LabelContainer key={field}>
                        <label htmlFor={field}>{capitalize(field)}</label>
                        <Input value={formFieldValue[field]} onChange={handleChange} id={field} name={field} required />
                    </FormContainer.LabelContainer>
                ))}

                <Button>Save</Button>
            </FormContainer.Form>
        </FormContainer>
    );
};
