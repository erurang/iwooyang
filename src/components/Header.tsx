"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownContentComponent from "./dropdownContent";
import DropdownTitleComponent from "./DropdownTitle";
import LanguageComponent from "./Language";
import MenuComponent from "./Menu";
import SearchDimmed from "./SearchDimmed";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [underlineAnimation, setUnderlineAnimation] =
    useState("shrinkToCenter");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={`bg-white fixed top-0 left-0 right-0 transition-transform duration-300 ${
        scrollDirection === "down"
          ? "transform -translate-y-full"
          : "transform translateY(0)"
      } z-10`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,3fr,1fr] justify-between items-center p-4">
        <Image
          width={500}
          height={10}
          alt="logo.png"
          src="/assets/logo.jpg"
          className="hidden lg:inline-block "
        />
        <img className="lg:hidden " src="assets/short_logo.png" />

        <div className="lg:space-x-8 hidden lg:flex justify-center">
          {/* 이부분은 나중에 i18n적용후 처리 */}
          {["기업정보", "제품정보", "고객지원", "채용"].map((menu: any) => (
            <div
              className="pt-2 text-lg"
              key={menu}
              onMouseEnter={() => {
                setActiveDropdown(menu);
                setUnderlineAnimation("growFromCenter");
              }}
              onMouseLeave={() => setUnderlineAnimation("shrinkToCenter")}
            >
              <span>
                {menu}
                <div
                  className={`h-1 mt-1 bg-[#00B1E2] transition-all duration-300 transform scaleX-0 ${
                    activeDropdown === menu
                      ? "animate-" + underlineAnimation
                      : "animate-shrinkToCenter"
                  }`}
                ></div>
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-end items-center">
          <LanguageComponent />
          <div className="hidden lg:block">
            <SearchDimmed />
          </div>
          <Link href={"/sitemap"}>
            <Image
              className="pt-1 cursor-pointer"
              alt="menu_icon"
              src="/assets/menu.png"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      {activeDropdown && (
        <div
          className="fixed top-15 left-0 right-0 h-full bg-white border-t-[1px] border-gray-100"
          onMouseEnter={() => setUnderlineAnimation("shrinkToCenter")}
          onMouseLeave={() => setUnderlineAnimation("growFromCenter")}
        >
          {activeDropdown === "기업정보" && (
            <div className="flex px-16 py-4 bg-white justify-center">
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="CEO" />
                <DropdownContentComponent title="인사말" />
              </div>
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="회사소개" />
                <DropdownContentComponent title="연혁" />
                <DropdownContentComponent title="지적재산권 및 인증서" />
                <DropdownContentComponent title="회사소개영상" />
                <DropdownContentComponent title="찾아오시는 길" />
              </div>

              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="사업소개" />
                <DropdownContentComponent title="주요사업" />
                <DropdownContentComponent title="적용분야" />
              </div>
            </div>
          )}
          {activeDropdown === "제품정보" && <div></div>}
          {activeDropdown === "고객지원" && <div></div>}
          {activeDropdown === "채용" && <div></div>}
        </div>
      )}
    </div>
  );
}

// function Header() {
//   return (
//     <>
//       <header className="h-14 p-2 bg-white md:pt-5 md:px-4 md:h-20 border-[#E5E5E5] border-b-[1px] grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,2fr,1fr,1fr] w-full">
//         {/* 1번  */}

// <Image
//   width={800}
//   height={10}
//   alt="logo.png"
//   src="/assets/logo.jpg"
//   className="hidden lg:inline-block h-11 w-full"
// />
// <img className="lg:hidden h-11" src="assets/short_logo.png" />

// <div className="hidden lg:block" />
//         {/* 2번 */}

//         <div className="relative hidden lg:flex lg:justify-between lg:items-center bg-blue w-full">
//           <div className="relative group px-2 py-4 ">
//             <span>회사소개</span>
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00B1E2] group-hover:w-full transition-width duration-300 ease-in-out mt-3" />
//             <div
//               className="absolute mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300
//             border-t-[1px] border-gray-100 z-10"
//             >
//               <div className="p-4 bg-white">회사소개 </div>
//             </div>
//           </div>

//           <div className="relative group px-2 py-4">
//             <span>제품소개</span>
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00B1E2] group-hover:w-full transition-width duration-300 ease-in-out mt-3" />
//             <div className="absolute left-0 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full border-t-[1px] border-gray-100 z-10">
//               <div className="p-4 bg-white">제품소개 </div>
//             </div>
//           </div>

//           <div className="relative group px-2 py-4">
//             <span>고객지원</span>
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#00B1E2] group-hover:w-full transition-width duration-300 ease-in-out mt-3" />
//             <div className="absolute left-0 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-full border-t-[1px] border-gray-100 z-10">
//               <div className="p-4 bg-white">고객지원 </div>
//             </div>
//           </div>

//           <span>채용</span>
//         </div>

//         <div className="hidden lg:block" />
//         {/* 3번 */}
//         <div className="flex justify-between items-center w-full relative">
//           <div className="flex absolute right-4">
// <LanguageComponent />
// <SearchDimmed />
// <MenuComponent />
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }
