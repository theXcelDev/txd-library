type Props = {
  type: 'primary' | 'secondary' | 'outline' | 'link';
  label: string;
  onClick?: () => void;
};

export default function Button({ type, label, onClick }: Props) {
  let classNames = '';

  classNames =
    type === 'primary'
      ? 'cursor-pointer rounded-sm px-4 py-2 font-semibold border-1 border-blue-950 bg-blue-950 text-white hover:bg-blue-200 hover:font-bold hover:text-blue-950'
      : classNames;

  classNames =
    classNames === '' && type === 'secondary'
      ? 'cursor-pointer rounded-sm px-4 py-2 font-semibold border-1 border-blue-950 bg-blue-800 text-white hover:bg-blue-200 hover:font-bold hover:text-blue-950'
      : classNames;

  classNames =
    classNames === '' && type === 'outline'
      ? 'cursor-pointer rounded-sm px-4 py-2 font-semibold border-1 border-blue-950 hover:bg-blue-200 hover:font-bold hover:text-blue-950'
      : classNames;

  classNames =
    classNames === '' && type === 'link'
      ? 'cursor-pointer rounded-sm px-4 py-2 font-bold underline hover:font-bold hover:text-blue-800'
      : classNames;

  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
}
