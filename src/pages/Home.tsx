import { Link } from 'react-router-dom';
import Card from '../components/Card';

export default function Home() {
  return (
    <section className="flex flex-col gap-4 px-4 py-2">
      <Card>
        <p className="text-center text-lg font-bold">
          Olá, Wesley! Bem-vindo à TXD Library!
        </p>
      </Card>

      <Card>
        <h2 className="pb-4 text-center text-lg font-bold">Empréstimos</h2>
        <div className="flex flex-row gap-2">
          <div className="w-1/2 rounded-md border-1 border-blue-950 p-4">
            <div className="flex w-full flex-row border-b-1 border-b-blue-950">
              <div className="mx-2 my-auto w-3/4 text-center">
                Seu empréstimo do item "O Código da Vinci (Dan Brown)" está
                vencendo!
              </div>
              <div className="m-2 w-1/4 border-l-1 border-l-blue-950 text-center">
                <p>Data de entrega</p>
                <p>30</p>
                <p>MAIO</p>
                <p>2025</p>
                <p>Até 18h</p>
              </div>
            </div>

            <div className="pt-4 text-center">
              <Link to="/loans/1">Ver empréstimo</Link>
            </div>
          </div>

          {/* TODO align text to center */}
          <div className="w-1/2 rounded-md border-1 border-blue-950 p-4">
            <div className="mx-2 text-center">
              <div className="my-auto">
                <p>Você possui outros três empréstimos.</p>
                <Link to="/loans">Ir para Empréstimos</Link>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* TODO show bookings */}
    </section>
  );
}
