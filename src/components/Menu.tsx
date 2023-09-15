"use client";

import Image from "next/image";
import { useState } from "react";

export default function MenuComponent() {
  const [isDimmed, setIsDimmed] = useState(false);

  return (
    <div className="relative">
      <Image
        onClick={() => setIsDimmed(!isDimmed)}
        className="pt-1 cursor-pointer"
        alt="menu_icon"
        src="/assets/menu.png"
        width={30}
        height={30}
      />

      {isDimmed && (
        <div
          className={`fixed top-0 h-full z-30 bg-[#F5F5F5] w-full left-0 p-4 overflow-scroll`}
        >
          <Image
            onClick={() => setIsDimmed(false)}
            className="fixed top-8 right-8 z-50"
            alt="search_icon"
            src="/assets/close.png"
            width={20}
            height={20}
          />
          <div className="grid grid-rows-[1fr,1fr,1fr] gap-10 cursor-pointer overflow-y-scroll">
            <div>
              <p className="border-b-2 mb-2 py-2 border-[#9D9D9D] text-[#1077b9] font-bold text-2xl">
                제품소개
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl   flex justify-between">
                산업용호스 및 벨로우즈
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                메디칼호스
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                산업용섬유
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                엔지니어링 플라스틱
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                산업용벨트
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                무분진 케이블포드
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                CFRP/플라스틱 가공
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                복합소재 응용품
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
            </div>
            <div>
              <p className="border-b-2 mb-2 py-2 border-[#9D9D9D] text-[#1077b9] font-bold text-2xl">
                회사소개
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                인사말
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                주요사업
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                적용분야
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                연혁
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                지적재산권 및 인증서
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                찾아오시는 길
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
            </div>
            <div>
              <p className="border-b-2 mb-2 py-2 border-[#9D9D9D] text-[#1077b9] font-bold text-2xl">
                고객지원
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                공지사항
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                온라인문의
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
              <p className="opacity-60 indent-4 py-1 hover:opacity-100 text-xl flex justify-between  ">
                고객센터
                <Image
                  alt="next"
                  src="/assets/next.svg"
                  width="15"
                  height="15"
                />
              </p>
            </div>
            {/* <div>채용</div> */}
          </div>
        </div>
      )}
    </div>
  );
}
