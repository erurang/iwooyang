import IntroduceFieldComponent from "@/components/IntroduceField";

export default function Field() {
  return (
    <div className="container mx-auto p-4 md:py-20">
      {/* 적용분야 */}
      <p className="text-[40px] font-bold md:text-base md:font-normal md:hidden">
        적용분야
      </p>

      <div className="md:text-5xl md:font-bold text-[#666666] md:text-black pt-2 flex md:items-center flex-col py-20">
        <p className="md:animate-slideUp">
          각각의 산업에 필요한 섬세한 마무리와 특성을 고려하여,
        </p>
        <br className="hidden md:block" />
        <p className="md:pt-2 md:animate-slideUp">
          우리는 맞춤형 소재와 부품을 제공합니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 보호복 분야 */}
        <IntroduceFieldComponent
          content={[
            "기능성 내열 용접복 소재",
            "방탄/방검/방침용 기능성 코팅소재",
            "내절단용 산업용 안전복 소재",
          ]}
          src={"/assets/field/01.jpg"}
          title={"보호복 분야"}
        />

        {/* 산업용 분야 */}
        <IntroduceFieldComponent
          content={[
            "건설산업",
            "스크린 방화셔터용 실리카코팅직물",
            "고온재봉사",
          ]}
          src={"/assets/field/02.jpg"}
          title={"산업용 분야"}
        />

        <IntroduceFieldComponent
          content={[
            "의료장비용 케이블보호 호스",
            "대전방지 및 생체정보 측정용 전도성 섬유",
          ]}
          src={"/assets/field/03.jpg"}
          title={"의료용 분야"}
        />

        <IntroduceFieldComponent
          content={[
            "고기능 플라스틱 (PI, PBI, PEI, PAI, PEEK 등)",
            "범용 플라스틱 (MC, PA, PE, PVC, PC 등)",
            "CFRP (PLATE, PIPE, ROLLER 등)",
            "산업용 벨트 및 풀리",
            "플렉시블호스 및 단열섬유 등",
          ]}
          src={"/assets/field/04.jpg"}
          title={"장비부품 분야"}
        />

        <IntroduceFieldComponent
          content={[
            "평판디스플레이(FPD) 및 반도체산업 클린룸장비용 부품소재",
            "클린룸용 플렉시블호스 (PU,PTFE,Silicone 등)",
            "히팅자켓소재 (PTFE 직물 등)",
            "클린룸 무빙 케이블보호용커버 (무분진 케이블포드)",
            "정전기방지커버 등",
          ]}
          src={"/assets/field/05.jpg"}
          title={"클린룸 분야"}
        />
      </div>
    </div>
  );
}
