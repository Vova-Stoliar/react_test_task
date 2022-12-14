import { FormFields, Product } from '@/shared/types';

export const getProductToCreate = (formFieldValue: FormFields): Product => ({
    ...formFieldValue,
    inCart: false,
    id: crypto.randomUUID(),
});
