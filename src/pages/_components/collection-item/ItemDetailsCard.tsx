import { useState } from 'react';
import Card from '../../../components/Card';
import type { CollectionItem } from '../../../types';

type Props = {
  item: CollectionItem;
};

export default function ItemDetailsCard({ item }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <Card>
      <div className="flex flex-col justify-between gap-16 h-full">
        <div>
          <p className="text-lg font-light text-gray-500">
            {item.author.fullName}
          </p>
          <p className="text-2xl font-bold">{item.name}</p>
        </div>
        <div>
          <p className="text-lg font-bold text-gray-500 italic">
            {item.description}
          </p>
        </div>
        <div className="self-end">
          <button
            className="text-sm font-bold underline cursor-pointer"
            onClick={() => setOpen(true)}
          >
            Ver prévia
          </button>
        </div>
        <div hidden={!open}>
          <Card>
            <div>
              <p className="text-sm font-bold text-gray-500 italic">
                {item.preview}
              </p>
            </div>
            <div className="self-end">
              <button
                className="text-sm font-bold underline cursor-pointer"
                onClick={() => setOpen(false)}
              >
                Fechar
              </button>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
