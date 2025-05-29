import type { Booking } from '../../../types';

type Props = {
  booking: Booking;
};

export default function GridCardBadge({ booking }: Props) {
  const { status } = booking;

  let classNames = '';

  classNames =
    status === 'pending'
      ? 'rounded-md border-1 border-gray-800 bg-gray-500 text-white px-2'
      : classNames;

  classNames =
    status === 'overdue'
      ? 'rounded-md border-1 border-red-950 bg-red-300 text-red-900 font-bold px-2'
      : classNames;

  classNames =
    status === 'executed'
      ? 'rounded-md border-1 border-green-950 bg-green-300 text-green-900 font-bold px-2'
      : classNames;

  classNames =
    status === 'cancelled'
      ? 'rounded-md border-1 border-red-950 text-red-900 font-bold px-2'
      : classNames;

  let statusText = '';

  statusText = status === 'pending' ? 'Pendente' : statusText;
  statusText = status === 'overdue' ? 'Expirado' : statusText;
  statusText = status === 'executed' ? 'Executado' : statusText;
  statusText = status === 'cancelled' ? 'Cancelado' : statusText;

  return (
    <div>
      <p className={classNames}>{statusText}</p>
    </div>
  );
}
