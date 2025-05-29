import { useState } from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Search from '../components/Search';
import { authors } from '../mocks';
import Grid from './_components/authors/Grid';

export default function Authors() {
  const [items, setItems] = useState(authors);

  const handleSearch = (search: string) => {
    const lowerCaseSearch = search.toLowerCase();

    const newAuthorsItems = authors.filter((author) => {
      const { firstName, lastName, fullName, nickname } = author;

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

      return false;
    });

    setItems(newAuthorsItems);
  };

  return (
    <Container>
      <Header text="Autores" />
      <Search
        placeholder="Pesquise por nome, sobrenome, etc."
        onSearch={handleSearch}
      />
      <Grid authors={items} />
    </Container>
  );
}
