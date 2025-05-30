import { useNavigate } from 'react-router-dom';
import Button from 'txd-library/components/Button';
import type { Author } from 'txd-library/types';

type Props = {
  author: Author;
};

export default function AuthorDetailsInfo({ author }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <p className="text-lg font-light text-gray-500">{author.fullName}</p>
        <p className="text-2xl font-bold">{author.fullName}</p>
      </div>
      <div>
        <p className="text-lg font-bold text-gray-500 italic">{author.bio}</p>
      </div>
      <div className="self-end">
        <Button
          type="outline"
          label="Voltar aos Autores"
          onClick={() => navigate('/authors')}
        />
      </div>
    </>
  );
}
