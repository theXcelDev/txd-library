import { useState } from 'react';
import Search from 'txd-library/components/Search';
import { collectionItems } from 'txd-library/mocks';
import Grid from './_components/collection/Grid';
import Page from './_components/common/Page';

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
    <Page title="Acervo">
      <Search
        placeholder="Pesquise por nome de obra, autor, sinopse, etc."
        onSearch={handleSearch}
      />
      <Grid collectionItems={items} />
    </Page>
  );
}
