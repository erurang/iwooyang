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
            우양신소재의 세계에 오신 것을 진심으로 환영합니다.
            <br />
            <br />
            우양신소재는 1994년의 설립 이후로 무한한 가능성의 세계를
            꿈꿔왔습니다. 다양한 산업 현장의 목소리를 수용하며, 귀하의 문제점을
            우리의 도전으로 바라보았습니다. 이로 인해 단순 지식을 넘어 실질적인
            경험과 혁신으로 저온에서 1000°C 이상의 극한 환경에서도 성능을
            발휘하는 소재를 전달하며, 원스톱 솔루션의 실현을 꿈꿨습니다. <br />
            <br />
            우리는 변화를 두려워하지 않습니다. 시대가 요구하는 필요에 따라,
            빠르고 정확한 솔루션을 제공하는 것이 우리의 목표입니다. 이러한 약속
            아래, 우양신소재는 언제나 귀하의 성공을 위해 나아갈 것입니다.
            <br />
            <br />
            대표 윤주영
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
