import type { Booking, Loan } from 'txd-library/types';
import type { CardType } from './_types';

type Props = {
  type: CardType;
  data: Booking | Loan;
};

export default function RecentInfoPanelDescription({ type, data }: Props) {
  const itemName = data.collectionItem.name;
  const itemAuthorName = data.collectionItem.author.fullName;

  const text = type === 'loan' ? 'empréstimo' : 'agendamento';
  const loanText = `Seu ${text} do item "${itemName}" (${itemAuthorName}) está vencendo!`;
  const bookingText = `O dia de execução do seu ${text} do item "${itemName}" (${itemAuthorName}) está chegando!`;
  const finalText = type === 'loan' ? loanText : bookingText;

  return (
    <div className="align-center flex w-3/4 flex-col justify-center px-2 text-center">
      {finalText}
    </div>
  );
}
