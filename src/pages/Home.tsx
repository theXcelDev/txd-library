import { bookings, loans } from 'txd-library/mocks';
import Page from './_components/common/Page';
import DashboardCard from './_components/home/DashboardCard';
import GreetingCard from './_components/home/GreetingCard';

export default function Home() {
  return (
    <Page>
      <GreetingCard />
      <DashboardCard type="loan" loans={loans} />
      <DashboardCard type="booking" bookings={bookings} />
    </Page>
  );
}
