import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import { authors } from '../mocks';
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
