import type { Author, Booking, CollectionItem, Loan, User } from '../types';

export const user: User = {
  id: 'asg0-7fsg-7df8gas-0d87-fg',
  username: 'matheus.viana',
  firstName: 'Matheus',
  lastName: 'Viana',
  fullName: 'Matheus Viana',
  nickname: 'Matheus',
  role: 'customer'
};

export const authors: Author[] = [
  {
    id: 'g7sd-08fy-7gs0d7-fygs-7d',
    firstName: 'Dan',
    lastName: 'Brown',
    fullName: 'Dan Brown'
  },
  {
    id: 'g7sd-08fy-7gs0d8-fygs-7d',
    firstName: 'Oliver',
    lastName: 'Bowden',
    fullName: 'Oliver Bowden'
  }
];

export const collectionItems: CollectionItem[] = [
  {
    id: 'a0s7-fd08-7sagf0-9ags-da',
    name: 'O Código da Vinci',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-db',
    name: 'Inferno',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dc',
    name: 'Anjos e Demônios',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-de',
    name: 'Fortaleza Digital',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-df',
    name: 'Ponto de Impacto',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dg',
    name: `Assassin's Creed: Brotherhood`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dh',
    name: `Assassin's Creed: The Secret Crusade`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-di',
    name: `Assassin's Creed: Revelations`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dj',
    name: `Assassin's Creed: Forsaken`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dk',
    name: `Assassin's Creed: Black Flag`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dl',
    name: `Assassin's Creed: Unity`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dm',
    name: `Assassin's Creed: Underworld`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dn',
    name: `Assassin's Creed Origins: Desert Oath`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-do',
    name: `Assassin's Creed: Odyssey`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dp',
    name: `Assassin's Creed: Valhalla - Geirmund's saga`,
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  }
];

export const loans: Loan[] = [
  {
    id: 'a8hf-0asg-7f0sgf-8asg-fd',
    collectionItem: collectionItems.filter(
      (item) => item.id === 'a0s7-fd08-7sagf0-9ags-da'
    )[0],
    expirationDate: new Date(2025, 4, 30, 18), // '30/05/2025 18h00',
    user: user,
    status: 'ongoing'
  },
  {
    id: 'a8hf-0asg-7f0sgf-8asg-fe',
    collectionItem: collectionItems.filter(
      (item) => item.id === 'a0s7-fd08-7sagf0-9ags-db'
    )[0],
    expirationDate: new Date(2025, 5, 2, 18), // '02/06/2025 18h00',
    user: user,
    status: 'ongoing'
  },
  {
    id: 'a8hf-0asg-7f0sgf-8asg-ff',
    collectionItem: collectionItems.filter(
      (item) => item.id === 'a0s7-fd08-7sagf0-9ags-dc'
    )[0],
    expirationDate: new Date(2025, 5, 3, 18), // '03/06/2025 18h00',
    user: user,
    status: 'ongoing'
  }
];

export const bookings: Booking[] = [
  {
    id: 'a8hf-0asg-7f1sgf-8asg-fd',
    collectionItem: collectionItems.filter(
      (item) => item.id === 'a0s7-fd08-7sagf0-9ags-da'
    )[0],
    expirationDate: new Date(2025, 5, 5, 12), // '05/06/2025 12h00',
    user: user,
    status: 'pending'
  },
  {
    id: 'a8hf-0asg-7f2sgf-8asg-fe',
    collectionItem: collectionItems.filter(
      (item) => item.id === 'a0s7-fd08-7sagf0-9ags-db'
    )[0],
    expirationDate: new Date(2025, 5, 6, 12), // '06/06/2025 12h00',
    user: user,
    status: 'pending'
  }
];
