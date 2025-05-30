import type { Booking } from 'txd-library/types';
import { formatDate, formatTime } from 'txd-library/utils';

type Props = {
  booking: Booking;
};

export default function GridCardDateInfo({ booking }: Props) {
  const { status, expirationDate, executionDate, cancellationDate } = booking;

  const expirationDateText = `${formatDate(expirationDate)} às ${formatTime(expirationDate)}`;

  const executionDateText = executionDate
    ? `${formatDate(executionDate)} às ${formatTime(executionDate)}`
    : '';

  const cancellationDateText = cancellationDate
    ? `${formatDate(cancellationDate)} às ${formatTime(cancellationDate)}`
    : '';

  return (
    <div className="py-4">
      {status === 'pending' && (
        <p className="text-center font-bold">
          O agendamento vai expirar em {expirationDateText}.
        </p>
      )}
      {status === 'overdue' && (
        <p className="text-center font-bold">
          O agendamento expirou em {expirationDateText}.
        </p>
      )}
      {status === 'executed' && (
        <p className="text-center font-bold">
          O agendamento foi executado em {executionDateText}.
        </p>
      )}
      {status === 'cancelled' && (
        <p className="text-center font-bold">
          O agendamento foi cancelado em {cancellationDateText}.
        </p>
      )}
    </div>
  );
}
