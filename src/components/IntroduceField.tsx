import Image from "next/image";

interface IProps {
  title: string;
  content: string[];
  src: string;
}

export default function IntroduceFieldComponent({
  content,
  src,
  title,
}: IProps) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center hover:border-gray-300 border rounded-md shadow">
      {/* Image Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          alt=""
          src={src}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full"
        />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <ul className="mb-6">
          {content.map((item) => (
            <li className="mb-2" key={item}>
              - {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
