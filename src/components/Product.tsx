import Image from "next/image";
interface IProps {
  title: string;
  content: string[];
  img: string;
}

export default function ProductComponent({ content, title, img }: IProps) {
  return (
    <>
      <div className="p-8 flex items-center justify-center w-full min-h-52">
        <div className="flex flex-col md:flex-row justify-between items-center hover:border-gray-300 border rounded-md p-8">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              alt={title}
              src={img}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full max-h-52"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <ul className="mb-6">
              {content?.map((item) => (
                <li className="mb-2">- {item}</li>
              ))}
            </ul>

            <button className="bg-blue-500 text-white py-2 px-6 rounded">
              제품 상세보기
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
