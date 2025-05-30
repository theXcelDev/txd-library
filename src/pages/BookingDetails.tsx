import { useParams } from 'react-router-dom';
import { bookings } from 'txd-library/mocks';
import BookingDetailsCard from './_components/booking-details/BookingDetailsCard';
import Page from './_components/common/Page';

export default function BookingDetails() {
  const { id } = useParams();

  const booking = bookings.find((item) => item.id === id)!;

  return (
    <Page title="Agendamentos">
      <BookingDetailsCard booking={booking} />
    </Page>
  );
}
