import Grid from '../../../components/Grid';
import type { Author } from '../../../types';
import GridCard from './GridCard';

type Props = {
  authors: Author[];
};

export default function MyGrid({ authors }: Props) {
  return (
    <Grid>
      {authors.map((author) => (
        <GridCard key={author.id} author={author} />
      ))}
    </Grid>
  );
}
