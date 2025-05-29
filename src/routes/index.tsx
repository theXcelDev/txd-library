import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts';
import AuthorDetails from '../pages/AuthorDetails';
import Authors from '../pages/Authors';
import Bookings from '../pages/Bookings';
import Collection from '../pages/Collection';
import CollectionItem from '../pages/CollectionItem';
import Home from '../pages/Home';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'collection',
        element: <Collection />
      },
      {
        path: 'collection/:id',
        element: <CollectionItem />
      },
      {
        path: 'authors',
        element: <Authors />
      },
      {
        path: 'authors/:id',
        element: <AuthorDetails />
      },
      {
        path: 'bookings',
        element: <Bookings />
      },
      {
        path: 'loans',
        element: <h1>Empréstimos</h1>
      },
      {
        path: 'profile',
        element: <h1>Meu perfil</h1>
      }
    ]
  }
]);
