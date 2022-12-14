import { Cart } from '@/shared/types';
import { Title } from '@/shared/ui/title';
import styles from './styles.module.css';

interface TotalPriceProps {
    carts: Cart[];
}

const getTotalPrice = (carts: Cart[]) => {
    return carts.reduce((previousValue, currentValue) => {
        const { price, quantity } = currentValue;

        return previousValue + price * quantity;
    }, 0);
};

export const TotalPrice = (props: TotalPriceProps) => {
    const { carts } = props;

    return (
        <div className={styles.totalPrice}>
            <Title>Total price: </Title>
            <span>{getTotalPrice(carts)}</span>
        </div>
    );
};
