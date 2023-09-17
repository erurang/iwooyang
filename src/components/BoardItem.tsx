interface IProps {
  title: string;
  date: string;
}

export default function BoardItemComponent({ date, title }: IProps) {
  return (
    <div className="border-b border-gray-300 py-4 px-6 flex justify-between items-center hover:bg-gray-200 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer">
      <p className="font-bold text-lg leading-tight">{title}</p>
      <div className="flex items-center">
        {/* md 브레이크포인트 이상에서만 날짜를 표시 */}
        <span className="hidden md:inline mr-3 text-gray-500">{date}</span>
        <svg
          className="h-5 w-5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 5l7 7-7 7"></path>
        </svg>
      </div>
    </div>
  );
}
