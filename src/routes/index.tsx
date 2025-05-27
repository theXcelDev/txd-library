import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts';

export const MainRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Início</h1>
      },
      {
        path: 'collection',
        element: <h1>Acervo</h1>
      },
      {
        path: 'authors',
        element: <h1>Autores</h1>
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
