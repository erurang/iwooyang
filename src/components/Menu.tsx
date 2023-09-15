"use client";

import Image from "next/image";

import MenuItemComponent from "./MenuItem";
import MenuTitleComponent from "./MenuTitle";

export default function MenuComponent() {
  return (
    <div
      className={`fixed top-0 h-full z-30 bg-[#F5F5F5] w-full left-0 p-4 overflow-scroll`}
    >
      <Image
        onClick={() => window.history.back()}
        className="fixed top-8 right-8 z-50 cursor-pointer"
        alt="search_icon"
        src="/assets/close.png"
        width={20}
        height={20}
      />

      <div className="grid grid-rows-[1fr,1fr,1fr] gap-10 cursor-pointer ">
        <div>
          <MenuTitleComponent title="제품소개" />
          <MenuItemComponent title="산업용호스 및 벨로우즈" />
          <MenuItemComponent title="메디칼호스" />
          <MenuItemComponent title="산업용섬유" />
          <MenuItemComponent title="엔지니어링 플라스틱" />
          <MenuItemComponent title="산업용벨트" />
          <MenuItemComponent title="무분진 케이블포드" />
          <MenuItemComponent title="CFRP/플라스틱 가공" />
          <MenuItemComponent title="복합소재 응용품" />
        </div>
        <div>
          <MenuTitleComponent title="회사소개" />
          <MenuItemComponent title="인사말" />
          <MenuItemComponent title="주요사업" />
          <MenuItemComponent title="적용분야" />
          <MenuItemComponent title="연혁" />
          <MenuItemComponent title="지적재산권 및 인증서" />
          <MenuItemComponent title="찾아오시는 길" />
        </div>
        <div>
          <MenuTitleComponent title="고객지원" />
          <MenuItemComponent title="공지사항" />
          <MenuItemComponent title="온라인문의" />
          <MenuItemComponent title="고객센터" />
        </div>
      </div>
    </div>
  );
}
