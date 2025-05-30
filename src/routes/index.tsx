import { createBrowserRouter } from 'react-router-dom';
import MainLayout from 'txd-library/layouts';
import AuthorDetails from 'txd-library/pages/AuthorDetails';
import Authors from 'txd-library/pages/Authors';
import Bookings from 'txd-library/pages/Bookings';
import Collection from 'txd-library/pages/Collection';
import CollectionItem from 'txd-library/pages/CollectionItem';
import Home from 'txd-library/pages/Home';

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
