type Props = {
  text: string;
};

export default function Header({ text }: Props) {
  return (
    <header className="bg-blue-950 py-2 text-center text-2xl font-bold text-white">
      <h2>{text}</h2>
    </header>
  );
}
