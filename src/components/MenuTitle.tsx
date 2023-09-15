interface IProps {
  title: string;
}

export default function MenuTitleComponent({ title }: IProps) {
  return (
    <p className="border-b-2 mb-2 py-2 border-[#9D9D9D] text-[#1077b9] font-bold text-2xl">
      {title}
    </p>
  );
}
