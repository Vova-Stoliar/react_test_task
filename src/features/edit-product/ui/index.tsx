import { productFormFields } from '@/shared/constants';
import { capitalize } from '@/shared/lib';
import { Button, FormContainer, Input } from '@/shared/ui';
import { useEditProduct } from '../hooks/useEditProduct';

export const EditProduct = () => {
    const { handleSubmit, handleChange, getProductValue } = useEditProduct();

    return (
        <FormContainer>
            <FormContainer.Title>Edit Product</FormContainer.Title>

            <FormContainer.Form onSubmit={handleSubmit}>
                {productFormFields.map((field) => (
                    <FormContainer.LabelContainer key={field}>
                        <label htmlFor={field}>{capitalize(field)}</label>
                        <Input
                            id={field}
                            name={field}
                            value={getProductValue(field)}
                            onChange={handleChange}
                            required
                        />
                    </FormContainer.LabelContainer>
                ))}

                <Button>Save</Button>
            </FormContainer.Form>
        </FormContainer>
    );
};
