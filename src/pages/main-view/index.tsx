import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui';
import { routes } from '@/shared/constants';
import { Products } from '@/features/products';
import styles from './styles.module.css';

export const MainView = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.createView}>
            <div className={styles.buttonContainer}>
                <Button onClick={() => navigate(routes.createView)}>Create</Button>
            </div>
            <Products />
        </section>
    );
};
