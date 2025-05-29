import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import type { Booking } from '../../../types';
import GridCardBadge from './GridCardBadge';
import GridCardDateInfo from './GridCardDateInfo';

type Props = {
  booking: Booking;
};

export default function GridCard({ booking }: Props) {
  const { collectionItem } = booking;

  const { author } = collectionItem;
  const lastName = author.lastName!.toUpperCase();
  const firstName = author.firstName!.toUpperCase();
  const firstNameAbbr = firstName.substring(0, 1);

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div className="flex flex-row justify-between gap-4">
          <div>
            <p className="text-sm font-light text-gray-500">
              {`${lastName}, ${firstNameAbbr}.`}
            </p>
            <p className="text-lg font-bold">{booking.collectionItem.name}</p>
          </div>

          <GridCardBadge booking={booking} />
        </div>

        <GridCardDateInfo booking={booking} />

        <div className="self-end">
          <Link
            to={`/bookings/${booking.id}`}
            className="text-sm font-bold underline"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </Card>
  );
}
