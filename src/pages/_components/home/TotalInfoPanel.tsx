import { Link } from 'react-router-dom';
import type { Booking, Loan } from 'txd-library/types';
import { capitalize, formatNumber } from 'txd-library/utils';
import type { CardType } from './_types';

type Props = {
  href: string;
  type: CardType;
  data: Booking[] | Loan[];
};

export default function TotalInfoPanel({ href, type, data }: Props) {
  const text = type === 'loan' ? 'empréstimo' : 'agendamento';
  const isEmpty = data.length === 0;
  const moreThanOneAnother = data.length - 1 > 1;
  const classNames =
    'align-center flex w-1/2 flex-col justify-center gap-2 rounded-md border-1 border-blue-950 text-center';

  if (isEmpty) {
    return (
      <div className={classNames}>
        <p>{`Você não possui outros ${text}s.`}</p>
      </div>
    );
  }

  return (
    <div className={classNames}>
      <p>{`Você possui mais ${formatNumber(data.length - 1)} ${text}${moreThanOneAnother ? 's' : ''}.`}</p>
      <Link to={href} className="font-bold">
        Ir para {`${capitalize(text)}s`}
      </Link>
    </div>
  );
}
