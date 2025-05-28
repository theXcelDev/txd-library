import Card from '../../../components/Card';
import type { CollectionItem } from '../../../types';

type Props = {
  hidden: boolean;
  item: CollectionItem;
  onClose: () => void;
};

export default function ItemPreviewCard({ hidden, item, onClose }: Props) {
  return (
    <div hidden={hidden}>
      <Card>
        <div>
          <p className="text-sm font-bold text-gray-500 italic">
            {item.preview}
          </p>
        </div>
        <div className="self-end">
          <button
            className="text-sm font-bold underline cursor-pointer"
            onClick={onClose}
          >
            Fechar
          </button>
        </div>
      </Card>
    </div>
  );
}
