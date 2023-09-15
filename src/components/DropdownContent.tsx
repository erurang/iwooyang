interface IProps {
  title: string;
}

export default function DropdownContentComponent({ title }: IProps) {
  return (
    <p className="pb-2 hover:underline hover:text-[#00B1E2] cursor-pointer">
      {title}
    </p>
  );
}
