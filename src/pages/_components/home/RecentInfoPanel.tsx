import { Link } from 'react-router-dom';
import type { Booking, Loan } from 'txd-library/types';
import type { CardType } from './_types';
import RecentInfoPanelDescription from './RecentInfoPanelDescription';
import RecentInfoPanelDueDate from './RecentInfoPanelDueDate';

type Props = {
  href: string;
  type: CardType;
  data: Booking | Loan;
};

export default function RecentInfoPanel({ href, type, data }: Props) {
  const text = type === 'loan' ? 'empréstimo' : 'agendamento';

  return (
    <div className="w-1/2 rounded-md border-1 border-blue-950 p-4 shadow-md">
      <div className="flex w-full flex-row border-b-1 border-b-blue-950">
        <RecentInfoPanelDescription type={type} data={data} />
        <RecentInfoPanelDueDate type={type} data={data} />
      </div>

      <div className="pt-4 text-center">
        <Link to={`${href}/${data.id}`} className="font-bold">
          Ver {`${text}`}
        </Link>
      </div>
    </div>
  );
}
