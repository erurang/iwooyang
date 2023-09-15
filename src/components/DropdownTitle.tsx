interface IProps {
  title: string;
}

export default function DropdownTitleComponent({ title }: IProps) {
  return <p className="font-bold pb-6">{title}</p>;
}
