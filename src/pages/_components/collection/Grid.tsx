import Grid from '../../../components/Grid';
import type { CollectionItem } from '../../../types';
import GridCard from './GridCard';

type Props = {
  collectionItems: CollectionItem[];
};

export default function MyGrid({ collectionItems }: Props) {
  return (
    <Grid>
      {collectionItems.map((item) => (
        <GridCard key={item.id} item={item} />
      ))}
    </Grid>
  );
}
