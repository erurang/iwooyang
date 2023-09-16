import Link from "next/link";

interface IProps {
  title: string;
  href?: string;
}

export default function DropdownContentComponent({
  title,
  href = "/",
}: IProps) {
  return (
    <Link href={href}>
      <p className="pb-2 hover:underline hover:text-[#00B1E2] cursor-pointer">
        {title}
      </p>
    </Link>
  );
}
