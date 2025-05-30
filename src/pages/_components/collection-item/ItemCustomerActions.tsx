import { useNavigate } from 'react-router-dom';
import Button from 'txd-library/components/Button';
import { bookings, user } from 'txd-library/mocks';
import type { CollectionItem } from 'txd-library/types';
import { formatDate } from 'txd-library/utils';

type Props = {
  item: CollectionItem;
};

export default function ItemCustomerActions({ item }: Props) {
  const navigate = useNavigate();

  const booking = bookings.find((i) => {
    if (i.collectionItem.id !== item.id) {
      return false;
    }

    if (i.user.id !== user.id) {
      return false;
    }

    if (i.status === 'executed' || i.status === 'overdue') {
      return false;
    }

    return true;
  });

  return (
    <div className="flex justify-between">
      <div>
        {booking && (
          <p>{`Você possui um agendamento deste item para o dia ${formatDate(booking.expirationDate)}.`}</p>
        )}
      </div>
      <div className="flex gap-4">
        {!booking && (
          <Button
            type="primary"
            label="Fazer agendamento"
            onClick={() => navigate(`/bookings/new?collectionItem=${item.id}`)}
          />
        )}
        {booking && (
          <Button
            type="primary"
            label="Cancelar agendamento"
            onClick={() => navigate(`/bookings/delete/${item.id}`)}
          />
        )}
        <Button
          type="outline"
          label="Voltar ao Acervo"
          onClick={() => navigate('/collection')}
        />
      </div>
    </div>
  );
}
