import Grid from 'txd-library/components/Grid';
import type { Author } from 'txd-library/types';
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
