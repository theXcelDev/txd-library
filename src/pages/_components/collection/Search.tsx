import { useState } from 'react';
import Button from '../../../components/Button';

type Props = {
  onSearch: (_: string) => void;
};

export default function Search({ onSearch }: Props) {
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-row gap-4 bg-gray-300 rounded-sm p-2">
      <input
        type="text"
        name="search"
        placeholder="Pesquise por nome de obra, autor, sinopse, etc."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white py-2 px-4 rounded-md w-2/3"
      />

      <div className="w-1/3">
        <Button
          type="primary"
          label="Buscar"
          onClick={() => onSearch(search)}
        />
      </div>
    </div>
  );
}
