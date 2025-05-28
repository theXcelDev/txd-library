import Container from '../components/Container';
import Header from '../components/Header';
import { collectionItems } from '../mocks';
import GridCard from './_components/collection/GridCard';

export default function Collection() {
  return (
    <Container>
      <Header text="Acervo" />
      <div className="grid grid-cols-3 gap-4">
        {collectionItems.map((item) => (
          <GridCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
