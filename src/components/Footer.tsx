export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t-[1px] border-gray-200 text-sm mt-10">
      <div className="flex justify-center items-center py-2 space-x-4">
        <p>개인정보취급방침</p>
        <p>이메일무단수집거부</p>
        <p>사이트맵</p>
      </div>

      <div className="flex justify-center items-center border-t-[1px] border-gray-200">
        <footer className="pt-4 px-6 text-left">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-10">
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-bold">본사 .</div>
                <p>경상북도 구미시 산동면 첨단기업3로 81 Tel. 054-476-3100</p>
              </div>
              <div className="pl-10">
                <p>Fax. 053-383-5283</p>
                <p>E-mail. info@iwooyang.com</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="font-bold">공장 .</div>
                <p>대구광역시 북구 유통단지로8길 21 Tel. 053-383-5287</p>
              </div>
              <div className="pl-10">
                <p>Fax. 054-476-3104</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-3">
            COPYRIGHT © {currentYear} WOOYANG ADVANCED MATERIAL CO. ALL RIGHTS
            RESERVED.
          </div>
        </footer>
      </div>
    </div>
  );
}
