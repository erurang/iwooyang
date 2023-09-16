"use client";

// import VideoComponent from "@/components/Video";
import Image from "next/image";

export default function Home() {
  //

  //
  return (
    <main>
      {/* <VideoComponent /> */}

      <div className="pb-10 md:py-20 px-4">
        <div className="text-3xl font-bold md:text-5xl md:text-black pt-2 flex-col flex items-center md:flex-col">
          <p className="animate-slideUp">어제보다 나은 오늘을</p>
          <p className="md:pt-2 animate-slideUp">오늘보다 나은 내일을</p>
        </div>
      </div>

      <Image
        alt="greeting_bg"
        src="/assets/greeting_company3.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-72 mb-16 md:mb-32 hidden md:block"
      />
      <Image
        alt="greeting_bg"
        src="/assets/greeting_company_short.png"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full h-72 mb-16 md:mb-32 md:hidden"
      />
      <div className="md:grid md:items-start grid-cols-[1fr,1fr,2fr,1fr]">
        <div className="hidden md:block" />
        <div className="font-bold text-2xl px-4 pb-6">
          <p>소재 국산화를 선도하는</p>
          <p>Solution Provider</p>
        </div>
        <div className="px-4 md:items-center">
          <p className="text-[#666666] pb-10">
            저희 우양신소재는 1994년 창립 이래 다양한 현장의 목소리에 귀 기울여
            언제나 현장의 문제 해결사 역할을 자처해 왔습니다. <br />
            <br />
            덕분에 단순한 이론으로 습득한 지식이 아닌 현장 중심의 생생한
            살아있는 정보들을 바탕으로 저온에서 1000°C 이상의 고온에 이르기까지
            맞춤형 소재 선택에서부터 가공 및 응용제품에 이르기까지 원스톱
            솔루션이 가능한 복합 신소재 전문 회사로 거듭날 수 있었습니다. <br />
            <br />늘 현재에 안주하지 않고, 끊임없이 분석하고 도전하여 적재적소에
            꼭 필요한 고객 맞춤형 솔루션을 그 누구보다 정확하고 빠르게 전달드릴
            수 있도록 오늘도 발로 뛰는 우양신소재가 될 것임을 약속드립니다.
          </p>
          <div className="border-y-2 border-black py-6 px-4 grid gap-6">
            <div>
              <p className="font-bold">기업명</p>
              <p className="text-[#666666]">우양신소재</p>
            </div>
            <div>
              <p className="font-bold">대표이사</p>
              <p className="text-[#666666]">윤주영</p>
            </div>
            <div>
              <p className="font-bold">업종</p>
              <p className="text-[#666666]">제조와 판매</p>
            </div>
            <div>
              <p className="font-bold">본사 소재</p>
              <p className="text-[#666666]">
                경상북도 구미시 산동면 첨단기업3로 81
              </p>
            </div>
            <div>
              <p className="font-bold">공장 소재</p>
              <p className="text-[#666666]">달성달성달성</p>
            </div>
            <div>
              <p className="font-bold">제품 및 서비스</p>
              <ul>
                <li className="text-[#666666]">1</li>
                <li className="text-[#666666]">2</li>
                <li className="text-[#666666]">3</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
      <div className="mt-20">
        {/*  */}

        {/* 
        <Image
          alt=""
          src="/assets/greeting.png"
          width={770}
          height={500}
          className="w-full h-full"
        /> */}
      </div>
    </main>
  );
}
