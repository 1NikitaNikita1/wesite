import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Main } from './page';
import { YoonaSpace } from './yoona-space';

const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <Main />
            },
            // {
            //     path: 'yoona-space',
            //     element: <YoonaSpace />
            // }
        ]
    }
]);

export function AppRouting() {
    return <RouterProvider router={router} />;
}
