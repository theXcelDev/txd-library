import { useParams } from 'react-router-dom';
import Container from 'txd-library/components/Container';
import Header from 'txd-library/components/Header';
import { bookings } from 'txd-library/mocks';
import BookingDetailsCard from './_components/booking-details/BookingDetailsCard';

export default function BookingDetails() {
  const { id } = useParams();

  const booking = bookings.find((item) => item.id === id)!;

  return (
    <Container>
      <Header text="Agendamentos" />
      <BookingDetailsCard booking={booking} />
    </Container>
  );
}
