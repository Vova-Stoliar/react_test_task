import { RouterProvider } from 'react-router-dom';
import { GlobalAppContext, useGlobalAppContext } from '@/shared/context';
import { router } from './router';

const { Provider: GlobalAppContextProvider } = GlobalAppContext;

export const App = () => {
    const { globalAppContext } = useGlobalAppContext();

    return (
        <GlobalAppContextProvider value={globalAppContext}>
            <RouterProvider router={router} />
        </GlobalAppContextProvider>
    );
};
