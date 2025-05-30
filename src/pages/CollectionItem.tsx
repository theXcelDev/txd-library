import { useParams } from 'react-router-dom';
import Container from 'txd-library/components/Container';
import Header from 'txd-library/components/Header';
import { collectionItems } from 'txd-library/mocks';
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
