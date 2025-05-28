import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import type { CollectionItem } from '../../../types';

type Props = {
  item: CollectionItem;
};

export default function GridCard({ item }: Props) {
  const { description } = item;
  const maxLengthForDescription = 200;
  return (
    <Card key={item.id}>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div>
          <p className="text-sm font-light text-gray-500">
            {item.author.fullName}
          </p>
          <p className="text-lg font-bold">{item.name}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-500 italic">
            {description.length > maxLengthForDescription &&
              `${description.substring(0, maxLengthForDescription)}...`}
            {description.length <= maxLengthForDescription && description}
          </p>
        </div>
        <div className="self-end">
          <Link
            to={`/collection/${item.id}`}
            className="text-sm font-bold underline"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </Card>
  );
}
