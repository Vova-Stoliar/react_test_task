import { Button } from '@/shared/ui';
import { PRODUCTS_PER_PAGE } from '@/shared/constants';
import { GetProductsPayload } from '@/shared/api/products/types';
import styles from './styles.module.css';

interface ProductItemProps {
    totalProductsCount: number;
    onSelectPage: (params: GetProductsPayload['params']) => void;
}

export const Pagination = (props: ProductItemProps) => {
    const { totalProductsCount, onSelectPage } = props;

    const numberOfPages = Math.ceil(totalProductsCount / PRODUCTS_PER_PAGE);
    const pageNumbers = [...new Array(numberOfPages)].map((_, i) => i + 1);

    return (
        <ul className={styles.pagesList}>
            {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                    <Button onClick={() => onSelectPage({ _page: String(pageNumber) })}>{pageNumber}</Button>
                </li>
            ))}
        </ul>
    );
};
