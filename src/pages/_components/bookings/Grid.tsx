import Grid from '../../../components/Grid';
import type { Booking } from '../../../types';
import GridCard from './GridCard';

type Props = {
  bookings: Booking[];
};

export default function MyGrid({ bookings }: Props) {
  return (
    <Grid>
      {bookings.map((booking) => (
        <GridCard key={booking.id} booking={booking} />
      ))}
    </Grid>
  );
}
