import { useState } from 'react';
import Search from 'txd-library/components/Search';
import { bookings, user } from 'txd-library/mocks';
import Grid from './_components/bookings/Grid';
import Page from './_components/common/Page';

export default function Bookings() {
  const [items, setItems] = useState(bookings);

  const handleSearch = (search: string) => {
    const lowerCaseSearch = search.toLowerCase();

    const newBookingsItems = bookings.filter((booking) => {
      const { collectionItem, user: bookingUser } = booking;
      const { name, description, preview, author } = collectionItem;
      const { firstName, lastName, fullName, nickname } = author;

      if (bookingUser.id !== user.id) {
        return false;
      }

      if (name.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (description.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (preview.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (firstName?.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (lastName?.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (fullName?.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (nickname?.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }
    });

    setItems(newBookingsItems);
  };

  return (
    <Page title="Agendamentos">
      <Search
        placeholder="Pesquise por nome de obra, autor, sinopse, etc."
        onSearch={handleSearch}
      />
      <Grid bookings={items} />
    </Page>
  );
}
