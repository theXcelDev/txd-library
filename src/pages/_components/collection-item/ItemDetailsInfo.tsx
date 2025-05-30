import type { CollectionItem } from 'txd-library/types';

type Props = {
  item: CollectionItem;
  onShowItemPreview: () => void;
};

export default function ItemDetailsInfo({ item, onShowItemPreview }: Props) {
  return (
    <>
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
          onClick={onShowItemPreview}
        >
          Ver prévia
        </button>
      </div>
    </>
  );
}
