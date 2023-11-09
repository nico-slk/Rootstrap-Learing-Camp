import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import { ClaseSiete } from '../components/ClaseSiete';
import { ClaseOcho } from '../components/ClaseOcho';
import { ClaseDiez } from '../components/ClaseDiez';
import { ClaseOnce } from '../components/clase-once/ClaseOnce';
import { Home } from '../Home';
import { ClaseNueve } from '../components/ClaseNueve';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/clase-siete',
                element: <ClaseSiete />
            },
            {
                path: '/clase-ocho',
                element: <ClaseOcho />
            },
            {
                path: '/clase-nueve',
                element: <ClaseNueve />
            },
            {
                path: '/clase-diez',
                element: <ClaseDiez />
            },
            {
                path: '/clase-once',
                element: <ClaseOnce />
            },
        ],
        errorElement: <div>Wrong path! ❌</div>
    },
]);
