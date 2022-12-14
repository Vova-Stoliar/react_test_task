import { productFormFields } from '@/shared/constants';
import { FormFields } from '@/shared/types';

export const getFormFieldsValue = () => {
    return productFormFields.reduce(
        (previousValue, currentValue) => ({ [currentValue]: '', ...previousValue }),
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        {} as FormFields,
    );
};
