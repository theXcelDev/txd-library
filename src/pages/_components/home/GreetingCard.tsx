import Card from '../../../components/Card';
import { user } from '../../../mocks';

export default function GreetingCard() {
  const { nickname, firstName } = user;
  const name = nickname || firstName;
  const greeting = `Olá, ${name}! Bem-vindo à TXD Library!`;
  return (
    <Card>
      <p className="text-center text-lg font-bold">{greeting}</p>
    </Card>
  );
}
