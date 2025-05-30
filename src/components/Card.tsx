import type { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

export default function Card({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 rounded-sm border-1 border-gray-400 p-8 shadow-lg">
      {children}
    </div>
  );
}
