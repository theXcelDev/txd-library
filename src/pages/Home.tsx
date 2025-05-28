import Container from '../components/Container';
import { bookings, loans } from '../mocks';
import DashboardCard from './_components/home/DashboardCard';
import GreetingCard from './_components/home/GreetingCard';

export default function Home() {
  return (
    <Container>
      <GreetingCard />
      <DashboardCard type="loan" loans={loans} />
      <DashboardCard type="booking" bookings={bookings} />
    </Container>
  );
}
