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
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-db',
    name: 'Inferno',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dc',
    name: 'Anjos e Demônios',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-de',
    name: 'Fortaleza Digital',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-df',
    name: 'Ponto de Impacto',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d7-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dg',
    name: `Assassin's Creed: Brotherhood`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dh',
    name: `Assassin's Creed: The Secret Crusade`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-di',
    name: `Assassin's Creed: Revelations`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dj',
    name: `Assassin's Creed: Forsaken`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dk',
    name: `Assassin's Creed: Black Flag`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dl',
    name: `Assassin's Creed: Unity`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dm',
    name: `Assassin's Creed: Underworld`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dn',
    name: `Assassin's Creed Origins: Desert Oath`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-do',
    name: `Assassin's Creed: Odyssey`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
    author: authors.filter((item) => item.id === 'g7sd-08fy-7gs0d8-fygs-7d')[0]
  },
  {
    id: 'a0s7-fd08-7sagf0-9ags-dp',
    name: `Assassin's Creed: Valhalla - Geirmund's saga`,
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque provident aut neque aspernatur numquam odit sit odio ullam eos quas excepturi nesciunt blanditiis aliquid ipsum, maxime enim exercitationem eveniet hic qui, adipisci ut, reiciendis tenetur? Pariatur, aliquid fugiat! Ipsum quibusdam nisi iusto architecto, tenetur, error tempora nam temporibus itaque id earum quos! Architecto consectetur sequi iure atque debitis maiores, voluptate facere doloremque fuga ut at illum numquam eos quis officiis possimus. Veritatis nisi totam magnam ex praesentium. Doloribus autem consectetur animi repudiandae, adipisci aliquam veniam ratione? Excepturi, corrupti. Atque voluptate exercitationem officia iure tempore facere architecto aliquid ad dolorem voluptates.',
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
