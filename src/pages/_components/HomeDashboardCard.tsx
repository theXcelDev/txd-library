import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import type { Booking, Loan } from '../../types';
import {
  capitalize,
  formatNumber,
  getDayOfMonth,
  getHours,
  getMinutes,
  getMonth,
  getYear
} from '../../utils';

type CardType = 'loan' | 'booking';

type Props = {
  type: CardType;
  loans?: Loan[];
  bookings?: Booking[];
};

export default function HomeDashboardCard({ type, loans, bookings }: Props) {
  const title = type === 'loan' ? 'Empréstimos' : 'Agendamentos';

  const getRecentInfoPanel = (
    href: string,
    type: CardType,
    data: Booking | Loan
  ) => {
    const itemName = data.collectionItem.name;
    const itemAuthorName = data.collectionItem.author.fullName;
    const date = data.expirationDate;

    const dayOfMonth = getDayOfMonth(date);
    const month = getMonth(date).toUpperCase();
    const year = getYear(date);
    const hours = getHours(date);
    const minutes = getMinutes(date);

    const text = type === 'loan' ? 'empréstimo' : 'agendamento';
    const loanText = `Seu ${text} do item "${itemName}" (${itemAuthorName}) está vencendo!`;
    const bookingText = `O dia de execução do seu ${text} do item "${itemName}" (${itemAuthorName}) está chegando!`;
    const finalText = type === 'loan' ? loanText : bookingText;

    return (
      <div className="w-1/2 rounded-md border-1 border-blue-950 p-4">
        <div className="flex w-full flex-row border-b-1 border-b-blue-950">
          <div className="align-center flex w-3/4 flex-col justify-center px-2 text-center">
            {finalText}
          </div>
          <div className="align-center flex w-1/4 flex-col justify-center gap-2 border-l-1 border-l-blue-950 px-2 py-4 text-center">
            <p>Data de {type === 'loan' ? 'entrega' : 'retirada'}</p>
            <div>
              <p>{dayOfMonth}</p>
              <p>{month}</p>
              <p>{year}</p>
              <p>Até {`${hours}h${minutes}`}</p>
            </div>
          </div>
        </div>

        <div className="pt-4 text-center">
          <Link to={`${href}/${data.id}`} className="font-bold">
            Ver {`${text}`}
          </Link>
        </div>
      </div>
    );
  };

  const getTotalInfoPanel = (
    href: string,
    type: CardType,
    data: Booking[] | Loan[]
  ) => {
    const text = type === 'loan' ? 'empréstimo' : 'agendamento';
    const isEmpty = data.length === 0;
    const moreThanOneAnother = data.length - 1 > 1;
    const className =
      'align-center flex w-1/2 flex-col justify-center gap-2 rounded-md border-1 border-blue-950 text-center';

    if (isEmpty) {
      return (
        <div className={className}>
          <p>{`Você não possui outros ${text}s.`}</p>
        </div>
      );
    }

    return (
      <div className={className}>
        <p>{`Você possui mais ${formatNumber(data.length - 1)} ${text}${moreThanOneAnother ? 's' : ''}.`}</p>
        <Link to={href} className="font-bold">
          Ir para {`${capitalize(text)}s`}
        </Link>
      </div>
    );
  };

  return (
    <Card>
      <h2 className="pb-4 text-center text-2xl font-bold">{title}</h2>
      <div className="flex flex-row gap-2">
        {type === 'loan' && getRecentInfoPanel('/loans', 'loan', loans![0])}
        {type === 'booking' &&
          getRecentInfoPanel('/bookings', 'booking', bookings![0])}

        {type === 'loan' && getTotalInfoPanel('/loans', 'loan', loans!)}
        {type === 'booking' &&
          getTotalInfoPanel('/bookings', 'booking', bookings!)}
      </div>
    </Card>
  );
}
