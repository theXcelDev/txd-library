import { useParams } from 'react-router-dom';
import { collectionItems } from 'txd-library/mocks';
import ItemDetailsCard from './_components/collection-item/ItemDetailsCard';
import Page from './_components/common/Page';

export default function CollectionItem() {
  const { id } = useParams();

  const collectionItem = collectionItems.find((item) => item.id === id)!;

  return (
    <Page title="Acervo">
      <ItemDetailsCard item={collectionItem} />
    </Page>
  );
}
