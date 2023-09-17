export default function PromotionalMaterials() {
  return (
    <div>
      <div className="px-4 md:hidden">
        <p className="text-[40px] font-bold md:text-base md:font-normal">
          회사홍보자료
        </p>
      </div>

      <div className="pb-10 md:py-20 px-4">
        <div className="md:text-5xl md:font-bold text-[#666666] md:text-black pt-2 flex md:items-center flex-col">
          <p className="md:animate-slideUp">우리 회사를 대표하는 자료들,</p>
          <br className="hidden md:block" />
          <p className="md:pt-2 md:animate-slideUp">
            다양한 프로모션 자료를 확인해보세요.
          </p>
        </div>

        {/*  */}
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="border-b border-gray-300 py-4 px-6 flex justify-between items-center hover:bg-gray-200 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer">
            <p className="font-bold text-lg leading-tight">홍보자료 제목1</p>
            <div className="flex items-center">
              {/* md 브레이크포인트 이상에서만 날짜를 표시 */}
              <span className="hidden md:inline mr-3 text-gray-500">
                2023-09-01
              </span>
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
          {/*  */}
          <div className="border-b border-gray-300 py-4 px-6 flex justify-between items-center hover:bg-gray-200 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer">
            <p className="font-bold text-lg leading-tight">홍보자료 제목2</p>
            <div className="flex items-center">
              {/* md 브레이크포인트 이상에서만 날짜를 표시 */}
              <span className="hidden md:inline mr-3 text-gray-500">
                2023-08-23
              </span>
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
          {/*  */}
        </div>
        {/*  */}
      </div>
    </div>
  );
}
