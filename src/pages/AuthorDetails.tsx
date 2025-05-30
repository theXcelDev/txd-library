import { useParams } from 'react-router-dom';
import Container from 'txd-library/components/Container';
import Header from 'txd-library/components/Header';
import { authors } from 'txd-library/mocks';
import AuthorDetailsCard from './_components/author-details/AuthorDetailsCard';

export default function AuthorDetails() {
  const { id } = useParams();

  const author = authors.find((item) => item.id === id)!;

  return (
    <Container>
      <Header text="Autores" />
      <AuthorDetailsCard author={author} />
    </Container>
  );
}
