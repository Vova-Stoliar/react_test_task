import { Cart, PartialExcept } from '@/shared/types';

export type UpdateCartPayload = PartialExcept<Cart, 'id'>;
