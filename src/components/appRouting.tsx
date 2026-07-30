import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './page';
import { YoonaSpace } from './yoona-space';
import { AppContainer } from './addContainer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <AppContainer />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'yoona-space',
                element: <YoonaSpace />
            }
        ]
    }
]);

export function AppRouting() {
    return <RouterProvider router={router} />;
}
