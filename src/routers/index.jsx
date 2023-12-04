// **** dependencies **** //
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

// **** layouts **** //
import Root from '@layouts/Root';

// **** pages **** //
import Admin from '@pages/Admin';
import Pokemons from '@pages/Pokemons';

const routes =  createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "admin-pockemon",
                element: <Admin />
            },
            {
                path: "app",
                element: <Pokemons />
            }
        ]
    },
])

function index() {
    return (
        <RouterProvider router={routes} />
    )
}

export default index