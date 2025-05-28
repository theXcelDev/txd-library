import type { CollectionItem } from '../../../types';
import GridCard from './GridCard';

type Props = {
  collectionItems: CollectionItem[];
};

export default function Grid({ collectionItems }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {collectionItems.map((item) => (
        <GridCard key={item.id} item={item} />
      ))}
    </div>
  );
}
