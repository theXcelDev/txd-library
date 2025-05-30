import Card from 'txd-library/components/Card';
import type { Booking, Loan } from 'txd-library/types';
import RecentInfoPanel from './RecentInfoPanel';
import TotalInfoPanel from './TotalInfoPanel';

type CardType = 'loan' | 'booking';

type Props = {
  type: CardType;
  loans?: Loan[];
  bookings?: Booking[];
};

export default function DashboardCard({ type, loans, bookings }: Props) {
  const title = type === 'loan' ? 'Empréstimos' : 'Agendamentos';
  const href = type === 'loan' ? '/loans' : '/bookings';
  const data = type === 'loan' ? loans : bookings;

  return (
    <Card>
      <h2 className="pb-4 text-center text-2xl font-bold">{title}</h2>
      <div className="flex flex-row gap-8">
        <RecentInfoPanel href={href} type={type} data={data![0]} />
        <TotalInfoPanel href={href} type={type} data={data!} />
      </div>
    </Card>
  );
}
