import type { ReactElement } from 'react';
import Container from 'txd-library/components/Container';
import Header from 'txd-library/components/Header';

type Props = {
  title?: string;
  children: ReactElement | ReactElement[];
};

export default function Page({ title, children }: Props) {
  return (
    <Container>
      <>{title && <Header text={title} />}</>
      <>{children}</>
    </Container>
  );
}
