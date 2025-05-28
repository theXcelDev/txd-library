import { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { collectionItems } from '../mocks';
import Grid from './_components/collection/Grid';
import Search from './_components/collection/Search';

export default function Collection() {
  const [items, setItems] = useState(collectionItems);

  const handleSearch = (search: string) => {
    const lowerCaseSearch = search.toLowerCase();

    const newCollectionItems = collectionItems.filter((item) => {
      const { name, description, preview, author } = item;
      const { firstName, lastName, nickname, fullName } = author;

      if (name.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (description.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (preview.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (firstName!.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (lastName!.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (fullName!.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      if (nickname?.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }

      return false;
    });

    setItems(newCollectionItems);
  };

  return (
    <Container>
      <Header text="Acervo" />
      <Search onSearch={handleSearch} />
      <Grid collectionItems={items} />
    </Container>
  );
}
