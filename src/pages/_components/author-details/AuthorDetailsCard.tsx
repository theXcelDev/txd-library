import Card from '../../../components/Card';
import type { Author } from '../../../types';
import AuthorDetailsInfo from './AuthorDetailsInfo';

type Props = {
  author: Author;
};

export default function AuthorDetailsCard({ author }: Props) {
  return (
    <Card>
      <div className="flex flex-col justify-between gap-16 h-full">
        <AuthorDetailsInfo author={author} />
      </div>
    </Card>
  );
}
