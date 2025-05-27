import { bookings, loans } from '../mocks';
import HomeDashboardCard from './_components/HomeDashboardCard';
import HomeGreetingCard from './_components/HomeGreetingCard';

export default function Home() {
  return (
    <section className="flex flex-col gap-4 px-4 py-2">
      <HomeGreetingCard />
      <HomeDashboardCard type="loan" loans={loans} />
      <HomeDashboardCard type="booking" bookings={bookings} />
    </section>
  );
}
