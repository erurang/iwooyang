import Image from "next/image";

interface IProps {
  title: string;
  content: string[];
  img: string;
}

export default function ProductComponent({ content, title, img }: IProps) {
  return (
    <div
      className="relative p-8 w-full min-h-[13rem] border hover:border-gray-300 hover:shadow-2xl rounded-md shadow overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Image Container */}
      <div className="absolute inset-0 bg-cover bg-center transform transition-transform duration-300 ease-in-out hover:scale-120"></div>

      {/* Dimmed Layer */}
      <div className="absolute inset-0 bg-black opacity-60 transition-opacity duration-300 hover:opacity-50"></div>

      {/* Content on Image */}
      <div className="relative z-10 p-4 transition-colors duration-300">
        <h2 className="text-2xl font-bold mb-4 text-white hover:text-gray-300">
          {title}
        </h2>
        <ul className="mb-6 text-white hover:text-gray-300">
          {content?.map((item, index) => (
            <li className="mb-2" key={index}>
              - {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Button positioned at the bottom right */}
      <button className="absolute right-4 bottom-4 bg-blue-500 text-white py-2 px-6 rounded">
        제품 상세보기
      </button>
    </div>
  );
}
