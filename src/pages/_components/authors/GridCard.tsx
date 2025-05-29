import { Link } from 'react-router-dom';
import Card from '../../../components/Card';
import type { Author } from '../../../types';

type Props = {
  author: Author;
};

export default function GridCard({ author }: Props) {
  const lastName = author.lastName!.toUpperCase();
  const firstName = author.firstName!.toUpperCase();
  const bio = author.bio!;
  const firstNameAbbr = firstName.substring(0, 1);
  const maxLengthForBio = 200;

  return (
    <Card>
      <div className="flex flex-col justify-between gap-4 h-full">
        <div>
          <p className="text-sm font-light text-gray-500">
            {`${lastName}, ${firstNameAbbr}.`}
          </p>
          <p className="text-lg font-bold">{author.fullName}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-500 italic">
            {bio.length > maxLengthForBio &&
              `${bio.substring(0, maxLengthForBio)}...`}
            {bio.length <= maxLengthForBio && bio}
          </p>
        </div>
        <div className="self-end">
          <Link
            to={`/authors/${author.id}`}
            className="text-sm font-bold underline"
          >
            Ver mais
          </Link>
        </div>
      </div>
    </Card>
  );
}
