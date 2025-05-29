import type { ReactElement } from 'react';

type Props = {
  columns?: number;
  rows?: number;
  children: ReactElement | ReactElement[];
};

export default function Grid({ columns, rows, children }: Props) {
  const classNames = `grid ${columns ? 'grid-cols-' + columns : ''} ${rows ? 'grid-rows-' + rows : ''} gap-4`;
  return <div className={classNames}>{children}</div>;
}
