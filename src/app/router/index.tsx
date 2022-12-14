import { createBrowserRouter } from 'react-router-dom';
import { MainView } from '@/pages/main-view';
import { CreateView } from '@/pages/create-view';
import { routes } from '@/shared/constants';
import { EditView } from '@/pages/edit-view';
import { CartView } from '@/pages/cart-view';

export const router = createBrowserRouter([
    {
        path: routes.mainView,
        element: <MainView />,
        errorElement: <div>Something wrong happened</div>,
    },
    {
        path: routes.createView,
        element: <CreateView />,
    },
    {
        path: routes.editView(),
        element: <EditView />,
    },
    {
        path: routes.cartView,
        element: <CartView />,
    },
    {
        path: '*',
        element: <div>Not found 404</div>,
    },
]);
