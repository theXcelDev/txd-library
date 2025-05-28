import Card from '../components/Card';
import Container from '../components/Container';
import Header from '../components/Header';
import { collectionItems } from '../mocks';

export default function Collection() {
  return (
    <Container>
      <Header text="Acervo" />
      <div className="grid grid-cols-3 gap-4">
        {collectionItems.map((item) => (
          <Card key={item.id}>
            <p>
              {item.name} - {item.author.fullName}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
