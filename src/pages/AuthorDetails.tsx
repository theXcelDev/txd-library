import { useParams } from 'react-router-dom';
import { authors } from 'txd-library/mocks';
import AuthorDetailsCard from './_components/author-details/AuthorDetailsCard';
import Page from './_components/common/Page';

export default function AuthorDetails() {
  const { id } = useParams();

  const author = authors.find((item) => item.id === id)!;

  return (
    <Page title="Autores">
      <AuthorDetailsCard author={author} />
    </Page>
  );
}
