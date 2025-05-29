import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts';
import Authors from '../pages/Authors';
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
        path: 'bookings',
        element: <h1>Agendamentos</h1>
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
