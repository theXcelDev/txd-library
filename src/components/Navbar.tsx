import { Link } from 'react-router-dom';

export default function Navbar() {
  const menus = [
    {
      to: '/',
      label: 'Início'
    },
    {
      to: '/collection',
      label: 'Acervo'
    },
    {
      to: '/authors',
      label: 'Autores'
    },
    {
      to: '/bookings',
      label: 'Agendamentos'
    },
    {
      to: '/loans',
      label: 'Empréstimos'
    }
  ];

  return (
    <nav className="flex flex-row items-center justify-between py-2 px-4 bg-blue-950">
      <h1 className="text-xl font-bold text-white">TXD Library</h1>
      <ul className="flex flex-row space-x-4 text-white">
        {menus.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="p-2 rounded-sm cursor-pointer hover:bg-blue-200 hover:text-blue-950 hover:font-bold"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/profile"
          className="p-2 rounded-sm cursor-pointer hover:bg-blue-200 hover:text-blue-950 hover:font-bold"
        >
          Meu perfil
        </Link>
      </ul>
    </nav>
  );
}
