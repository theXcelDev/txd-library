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
    <nav className="flex flex-row items-center justify-between bg-blue-950 px-4 py-2">
      <h1 className="text-xl font-bold text-white">TXD Library</h1>
      <ul className="flex flex-row space-x-4 text-white">
        {menus.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="cursor-pointer rounded-sm p-2 font-semibold hover:bg-blue-200 hover:font-bold hover:text-blue-950"
          >
            {item.label}
          </Link>
        ))}
        <Link
          to="/profile"
          className="cursor-pointer rounded-sm p-2 font-semibold hover:bg-blue-200 hover:font-bold hover:text-blue-950"
        >
          Meu perfil
        </Link>
      </ul>
    </nav>
  );
}
