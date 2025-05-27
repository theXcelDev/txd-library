import type { Booking, Loan, User } from '../types';

export const user: User = {
  id: 'asg0-7fsg-7df8gas-0d87-fg',
  username: 'matheus.viana',
  firstName: 'Matheus',
  lastName: 'Viana',
  fullName: 'Matheus Viana',
  nickname: 'Matheus',
  role: 'customer'
};

export const loans: Loan[] = [
  {
    id: 'a8hf-0asg-7f0sgf-8asg-fd',
    collectionItem: {
      id: 'a0s7-fd08-7sagf0-9ags-da',
      name: 'O Código da Vinci',
      author: {
        id: 'g7sd-08fy-7gs0d7-fygs-7d',
        fullName: 'Dan Brown'
      }
    },
    expirationDate: new Date(2025, 4, 30, 18), // '30/05/2025 18h00',
    user: {
      id: 'asg0-7fsg-7df8gas-0d87-fg',
      username: 'matheus.viana',
      role: 'customer'
    },
    status: 'ongoing'
  },
  {
    id: 'a8hf-0asg-7f0sgf-8asg-fe',
    collectionItem: {
      id: 'a0s7-fd08-7sagf0-9ags-db',
      name: 'Inferno',
      author: {
        id: 'g7sd-08fy-7gs0d7-fygs-7d',
        fullName: 'Dan Brown'
      }
    },
    expirationDate: new Date(2025, 5, 2, 18), // '02/06/2025 18h00',
    user: {
      id: 'asg0-7fsg-7df8gas-0d87-fg',
      username: 'matheus.viana',
      role: 'customer'
    },
    status: 'ongoing'
  },
  {
    id: 'a8hf-0asg-7f0sgf-8asg-ff',
    collectionItem: {
      id: 'a0s7-fd08-7sagf0-9ags-dc',
      name: 'Anjos e Demônios',
      author: {
        id: 'g7sd-08fy-7gs0d7-fygs-7d',
        fullName: 'Dan Brown'
      }
    },
    expirationDate: new Date(2025, 5, 3, 18), // '03/06/2025 18h00',
    user: {
      id: 'asg0-7fsg-7df8gas-0d87-fg',
      username: 'matheus.viana',
      role: 'customer'
    },
    status: 'ongoing'
  }
];

export const bookings: Booking[] = [
  {
    id: 'a8hf-0asg-7f1sgf-8asg-fd',
    collectionItem: {
      id: 'a0s7-fd08-7sagf0-9ags-da',
      name: 'Fortaleza Digital',
      author: {
        id: 'g7sd-08fy-7gs0d7-fygs-7d',
        fullName: 'Dan Brown'
      }
    },
    expirationDate: new Date(2025, 5, 5, 12), // '05/06/2025 12h00',
    user: {
      id: 'asg0-7fsg-7df8gas-0d87-fg',
      username: 'matheus.viana',
      role: 'customer'
    },
    status: 'pending'
  },
  {
    id: 'a8hf-0asg-7f2sgf-8asg-fe',
    collectionItem: {
      id: 'a0s7-fd08-7sagf0-9ags-db',
      name: 'Ponto de Impacto',
      author: {
        id: 'g7sd-08fy-7gs0d7-fygs-7d',
        fullName: 'Dan Brown'
      }
    },
    expirationDate: new Date(2025, 5, 6, 12), // '06/06/2025 12h00',
    user: {
      id: 'asg0-7fsg-7df8gas-0d87-fg',
      username: 'matheus.viana',
      role: 'customer'
    },
    status: 'pending'
  }
];
