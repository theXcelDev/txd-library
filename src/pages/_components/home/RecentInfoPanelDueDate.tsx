import type { Booking, Loan } from 'txd-library/types';
import {
  getDayOfMonth,
  getHours,
  getMinutes,
  getMonth,
  getYear
} from 'txd-library/utils';
import type { CardType } from './_types';

type Props = {
  type: CardType;
  data: Booking | Loan;
};

export default function RecentInfoPanelDueDate({ type, data }: Props) {
  const date = data.expirationDate;

  const dayOfMonth = getDayOfMonth(date);
  const month = getMonth(date).toUpperCase();
  const year = getYear(date);
  const hours = getHours(date);
  const minutes = getMinutes(date);

  return (
    <div className="align-center flex w-1/4 flex-col justify-center gap-2 border-l-1 border-l-blue-950 px-2 py-4 text-center">
      <p>Data de {type === 'loan' ? 'entrega' : 'retirada'}</p>
      <div>
        <p>{dayOfMonth}</p>
        <p>{month}</p>
        <p>{year}</p>
        <p>Até {`${hours}h${minutes}`}</p>
      </div>
    </div>
  );
}
