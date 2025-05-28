import { useState } from 'react';
import Card from '../../../components/Card';
import type { CollectionItem } from '../../../types';
import ItemCustomerActions from './ItemCustomerActions';
import ItemDetailsInfo from './ItemDetailsInfo';
import ItemPreviewCard from './ItemPreviewCard';

type Props = {
  item: CollectionItem;
};

export default function ItemDetailsCard({ item }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div className="flex flex-col justify-between gap-16 h-full">
        <ItemDetailsInfo item={item} onShowItemPreview={() => setOpen(true)} />
        <ItemPreviewCard
          hidden={!open}
          item={item}
          onClose={() => setOpen(false)}
        />
        <ItemCustomerActions item={item} />
      </div>
    </Card>
  );
}
