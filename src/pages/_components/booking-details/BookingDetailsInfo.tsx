import { useNavigate } from 'react-router-dom';
import Button from 'txd-library/components/Button';
import type { Booking } from 'txd-library/types';

type Props = {
  booking: Booking;
};

export default function BookingDetailsInfo({ booking }: Props) {
  const navigate = useNavigate();

  const { collectionItem, status } = booking;
  const { author } = collectionItem;

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
    <>
      <div className="flex flex-row justify-between gap-4">
        <div>
          <p className="text-lg font-light text-gray-500">{author.fullName}</p>
          <p className="text-2xl font-bold">{collectionItem.name}</p>
        </div>
        <div>
          <p className={classNames}>{statusText}</p>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-500 italic">
          {collectionItem.description}
        </p>
      </div>
      <div className="self-end">
        <Button
          type="outline"
          label="Voltar aos Agendamentos"
          onClick={() => navigate('/bookings')}
        />
      </div>
    </>
  );
}
