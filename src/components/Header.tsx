"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import DropdownContentComponent from "./DropdownContent";
import DropdownTitleComponent from "./DropdownTitle";
import LanguageComponent from "./Language";
import SearchDimmed from "./SearchDimmed";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [underlineAnimation, setUnderlineAnimation] =
    useState("shrinkToCenter");
  const headerHeight = 80;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > headerHeight && currentScrollY > scrollY) {
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
      } z-10 md:border-b-[1px] md:border-gray-200`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="grid grid-cols-[1fr,1fr] lg:grid-cols-[1fr,3fr,1fr] justify-between items-center p-4">
        <Link href={"/"}>
          <Image
            width={500}
            height={10}
            alt="logo.png"
            src="/assets/logo.jpg"
            className="hidden lg:inline-block "
          />
          <img className="lg:hidden " src="assets/short_logo.png" />
        </Link>

        <div className="lg:space-x-8 hidden lg:flex justify-center">
          {/* 이부분은 나중에 i18n적용후 처리 */}
          {["기업정보", "제품소개", "고객지원", "채용"].map((menu: any) => (
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
          className="fixed top-15 left-0 right-0 h-full bg-white border-t-[1px] border-gray-100
          "
          onMouseEnter={() => setUnderlineAnimation("shrinkToCenter")}
          onMouseLeave={() => setUnderlineAnimation("growFromCenter")}
        >
          {activeDropdown === "기업정보" && (
            <div className="flex px-16 py-4 bg-white justify-center">
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="CEO" />
                <DropdownContentComponent title="인사말" href="/greeting" />
              </div>
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="회사소개" />
                <DropdownContentComponent title="소개" href="/greeting" />
                <DropdownContentComponent title="연혁" />
                <DropdownContentComponent title="지적재산권 및 인증서" />
                {/* <DropdownContentComponent title="회사소개영상" /> */}
                <DropdownContentComponent title="찾아오시는 길" />
              </div>

              <div className="pl-6 pr-12 ">
                <DropdownTitleComponent title="사업소개" />
                <DropdownContentComponent title="주요사업" />
                <DropdownContentComponent title="적용분야" />
              </div>
            </div>
          )}
          {activeDropdown === "제품소개" && (
            <div className="flex px-16 py-4 bg-white justify-center">
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="호스" />
                <div className="indent-4">
                  <p className="font-semibold pb-3">산업용호스 및 벨로우즈</p>

                  <div className="pl-4">
                    <DropdownContentComponent title="흡입 및 이송용 호스" />
                    <DropdownContentComponent title="흡입 및 송풍용 호스" />
                    <DropdownContentComponent title="호스 연결 제품" />
                    <DropdownContentComponent title="벨로우즈" />
                  </div>
                </div>
                <div className="indent-4">
                  <p className="font-semibold pb-3">메디컬호스</p>
                  <div className="pl-4">
                    <DropdownContentComponent title="케이블 보호용 호스" />
                    <DropdownContentComponent title="안전장비 에어 이송용 호스" />
                  </div>
                </div>
              </div>
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="산업용 섬유" />
                <div className="indent-4">
                  <DropdownContentComponent title="파라 아라미드 섬유" />
                  <DropdownContentComponent title="메타 아라미드 섬유" />
                  <DropdownContentComponent title="금속 섬유" />
                  <DropdownContentComponent title="LCP 섬유" />
                  <DropdownContentComponent title="탄소섬유" />
                  <DropdownContentComponent title="PBO 섬유" />
                  <DropdownContentComponent title="유리 섬유" />
                  <DropdownContentComponent title="실리카 섬유" />
                  <DropdownContentComponent title="탄화 섬유" />
                  <DropdownContentComponent title="탄화/아라미드 혼방섬유" />
                  <DropdownContentComponent title="PTFE 섬유" />
                  <DropdownContentComponent title="탄화규소 섬유" />
                  <DropdownContentComponent title="고온용 재봉사" />
                </div>
              </div>
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="산업용 벨트" />
                <div className="indent-4">
                  <p className="font-semibold pb-3">타이밍 벨트</p>
                  <div className="indent-8">
                    <p className="font-semibold pb-3">고무</p>
                    <div className="indent-12">
                      <DropdownContentComponent title="일반/HTD/HTPD" />
                      <DropdownContentComponent title="Open-end" />
                      <DropdownContentComponent title="Gates power grip GT" />
                    </div>
                    <p className="font-semibold pb-3">우레탄</p>
                    <div className="indent-12">
                      <DropdownContentComponent title="Unitta power grip GT" />
                      <DropdownContentComponent title="Urethane Open type" />
                      <DropdownContentComponent title="Urethane Endless type" />
                      <DropdownContentComponent title="Urethane NOK Iron rubber" />
                    </div>
                  </div>

                  <DropdownContentComponent title="Poly 벨트" />
                  <DropdownContentComponent title="Mesh 벨트" />
                </div>
              </div>
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="무분진" />
                <DropdownContentComponent title="케이블 포드" />
              </div>
              {/* <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="CFRP/플라스틱 가공" />
                <DropdownContentComponent title="?????" />
              </div> */}
              <div className="pl-6 pr-12 ">
                <DropdownTitleComponent title="복합소재 응용품" />
                <DropdownContentComponent title="방탄 방검용 보호복 소재" />
                <DropdownContentComponent title="구조용 스트레처 백" />
              </div>
            </div>
          )}
          {activeDropdown === "고객지원" && (
            <div className="flex px-16 py-4 bg-white justify-center">
              <div className="pl-6 pr-12 border-r-[1px] border-gray-200">
                <DropdownTitleComponent title="안내" />
                <DropdownContentComponent title="공지사항" />
              </div>
              <div className="pl-6 pr-12 ">
                <DropdownTitleComponent title="문의" />
                <DropdownContentComponent title="온라인문의" />
                <DropdownContentComponent title="고객센터" />
              </div>
            </div>
          )}
          {activeDropdown === "채용" && (
            <div className="flex px-16 py-4 bg-white justify-center">
              <div className="pl-6 pr-12">
                <DropdownTitleComponent title="지원" />
                <DropdownContentComponent title="채용" />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
