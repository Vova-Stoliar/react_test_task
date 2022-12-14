import { Fragment } from 'react';
import { CartItem } from './cart-item';
import { Button, ButtonGroup, CartGroup } from '@/shared/ui';
import { useCarts } from '../hooks/useCarts';
import { TotalPrice } from './total-price';

export const Carts = () => {
    const { carts, handleDelete, handleDecreaseCartAmount, handleIncreaseCartAmount } = useCarts();

    return (
        <div>
            <CartGroup>
                {carts.map((cartItem) => {
                    const { id, quantity } = cartItem;

                    return (
                        <Fragment key={id}>
                            {[...new Array(quantity)].map(() => (
                                <CartItem cartItem={cartItem} key={crypto.randomUUID()}>
                                    <ButtonGroup>
                                        <Button onClick={() => handleDelete(id)}>Delete</Button>
                                        <Button onClick={() => handleDecreaseCartAmount(cartItem)}>-1</Button>
                                        <Button onClick={() => handleIncreaseCartAmount(cartItem)}>+1</Button>
                                    </ButtonGroup>
                                </CartItem>
                            ))}
                        </Fragment>
                    );
                })}
            </CartGroup>

            <TotalPrice carts={carts} />
        </div>
    );
};
