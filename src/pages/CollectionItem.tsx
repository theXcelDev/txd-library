import { useParams } from 'react-router-dom';
import Container from '../components/Container';
import Header from '../components/Header';
import { collectionItems } from '../mocks';
import ItemDetailsCard from './_components/collection-item/ItemDetailsCard';

export default function CollectionItem() {
  const { id } = useParams();

  const collectionItem = collectionItems.find((item) => item.id === id)!;

  return (
    <Container>
      <Header text="Acervo" />
      <ItemDetailsCard item={collectionItem} />
    </Container>
  );
}
