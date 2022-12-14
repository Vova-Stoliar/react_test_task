import { ProductItem } from './product-item';
import { Button, ButtonGroup, Input, CartGroup } from '@/shared/ui';
import { useProducts } from '../hooks/useProducts';
import { Pagination } from './pagination';
import { ProductBasket } from './product-basket';
import styles from './styles.module.css';

export const Products = () => {
    const {
        products,
        totalProductsCount,
        carts,
        valueToSearchProduct,
        handleChange,
        handleSelectPage,
        handleDelete,
        handleAddToCart,
        handleEditProduct,
    } = useProducts();

    return (
        <div className={styles.products}>
            <div className={styles.filterAndBasketContainer}>
                <Input value={valueToSearchProduct} onChange={handleChange} />
                <ProductBasket carts={carts} />
            </div>

            <CartGroup className={styles.list}>
                {products.map((productItem) => {
                    const { id, inCart } = productItem;

                    return (
                        <ProductItem productItem={productItem} key={id}>
                            <ButtonGroup>
                                <Button onClick={() => handleEditProduct(productItem)}>Edit</Button>
                                <Button onClick={async () => handleDelete(id)}>Delete</Button>
                                <Button disabled={inCart} onClick={async () => handleAddToCart(productItem)}>
                                    Add to cart
                                </Button>
                            </ButtonGroup>
                        </ProductItem>
                    );
                })}
            </CartGroup>

            <Pagination totalProductsCount={totalProductsCount} onSelectPage={handleSelectPage} />
        </div>
    );
};
