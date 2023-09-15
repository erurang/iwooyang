import Image from "next/image";

interface IProps {
  title: string;
}

export default function MenuItemComponent({ title }: IProps) {
  return (
    <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl   flex justify-between">
      {title}
      <Image alt="next" src="/assets/next.svg" width="15" height="15" />
    </p>
  );
}
