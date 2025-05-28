import type { ReactElement } from 'react';

type Props = {
  children: ReactElement | ReactElement[];
};

export default function Container({ children }: Props) {
  return (
    <section className="flex flex-col gap-4 px-4 py-2">{children}</section>
  );
}
