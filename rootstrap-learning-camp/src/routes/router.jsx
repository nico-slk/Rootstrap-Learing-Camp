import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import { ClaseSiete } from '../elements/ClaseSiete';
import { ClaseOcho } from '../elements/ClaseOcho';
import { ClaseDiez } from '../elements/ClaseDiez';
import { ClaseOnce } from '../elements/clase-once/ClaseOnce';
import { ClaseOnceContextProvider } from '../elements/clase-once/ClaseOnceContext';
import { Home } from '../Home';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'clase-diez',
                element: <ClaseDiez />
            },
            {
                path: 'clase-siete',
                element: <ClaseSiete />
            },
            {
                path: 'clase-ocho',
                element: <ClaseOcho />
            },
            {
                path: 'clase-once',
                element:
                    <ClaseOnceContextProvider >
                        <ClaseOnce />
                    </ClaseOnceContextProvider>
            },
        ],
        errorElement: <div>Wrong path! ❌</div>
    },
]);
