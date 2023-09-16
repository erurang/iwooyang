"use client";

import Image from "next/image";
import MenuItemComponent from "./MenuItem";
import MenuTitleComponent from "./MenuTitle";

export default function MenuComponent() {
  return (
    <div className="fixed top-0 h-full z-30 bg-white w-full left-0 p-6 overflow-scroll">
      <Image
        onClick={() => window.history.back()}
        className="absolute top-6 right-6 z-50 cursor-pointer"
        alt="close_icon"
        src="/assets/close.png"
        width={20}
        height={20}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 cursor-pointer">
        {sections.map((section, index) => (
          <div key={index} className="space-y-4">
            <MenuTitleComponent title={section.title} />
            {section.items.map((item) => (
              <MenuItemComponent key={item} title={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const sections = [
  {
    title: "기업정보",
    items: [
      "인사말",
      "주요사업",
      "적용분야",
      "연혁",
      "지적재산권 및 인증서",
      "찾아오시는 길",
    ],
  },
  {
    title: "제품소개",
    items: [
      "산업용호스 및 벨로우즈",
      "메디칼호스",
      "산업용섬유",
      "엔지니어링 플라스틱",
      "산업용벨트",
      "무분진 케이블포드",
      "CFRP/플라스틱 가공",
      "복합소재 응용품",
    ],
  },
  {
    title: "고객지원",
    items: ["공지사항", "온라인문의", "고객센터"],
  },
  {
    title: "채용",
    items: ["지원"],
  },
];
