import Card from 'txd-library/components/Card';
import type { Booking } from 'txd-library/types';
import BookingDetailsInfo from './BookingDetailsInfo';

type Props = {
  booking: Booking;
};

export default function BookingDetailsCard({ booking }: Props) {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-16 h-full">
        <BookingDetailsInfo booking={booking} />
      </div>
    </Card>
  );
}
