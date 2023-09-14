"use client";

import Image from "next/image";
import LanguageComponent from "./Language";
import MenuComponent from "./Menu";
import SearchDimmed from "./SearchDimmed";

export default function Header() {
  return (
    <header className="h-14 p-2 bg-white md:pt-5 md:px-4 md:h-20 border-[#E5E5E5] border-b-2 grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,2fr,1fr,1fr]">
      {/* 1번  */}

      <Image
        width={100}
        height={10}
        alt="logo.png"
        src="/assets/logo.jpg"
        className="hidden lg:inline-block"
      />
      <img className="lg:hidden h-11" src="assets/short_logo.png" />

      <div className="hidden lg:block" />
      {/* 2번 */}
      <div className="hidden lg:flex lg:justify-between lg:items-center bg-blue w-full">
        <span>기업정보</span>
        <span>제품소개</span>
        <span>고객지원</span>
        <span>채용</span>
      </div>

      <div className="hidden lg:block" />
      {/* 3번 */}
      <div className="flex justify-between items-center w-full relative">
        <div className="flex absolute right-4">
          <LanguageComponent />
          <SearchDimmed />
          <MenuComponent />
        </div>
      </div>
    </header>
  );
}
