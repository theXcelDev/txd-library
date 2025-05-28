import Container from '../components/Container';
import { bookings, loans } from '../mocks';
import HomeDashboardCard from './_components/HomeDashboardCard';
import HomeGreetingCard from './_components/HomeGreetingCard';

export default function Home() {
  return (
    <Container>
      <HomeGreetingCard />
      <HomeDashboardCard type="loan" loans={loans} />
      <HomeDashboardCard type="booking" bookings={bookings} />
    </Container>
  );
}
