import type { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

export default function Grid({ children }: Props) {
  return <div className="grid grid-cols-3 gap-4">{children}</div>;
}
