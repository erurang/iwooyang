import IntroduceFieldComponent from "@/components/IntroduceField";

export default function MajorBusiness() {
  return (
    <>
      <div className="container mx-auto p-4 md:py-20">
        <p className="text-[40px] font-bold md:text-base md:font-normal md:hidden">
          주요사업
        </p>

        <div className="md:text-5xl md:font-bold text-[#666666] md:text-black pt-2 flex md:items-center flex-col py-20">
          <p className="md:animate-slideUp">
            각 분야의 필수 요소를 고려하여 최적화된 소재와 부품을 제공하며,
          </p>
          <br className="hidden md:block" />
          <p className="md:pt-2 md:animate-slideUp">
            안전과 성능을 최우선으로 생각합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IntroduceFieldComponent
            content={[
              "다양한 기능성 섬유 소재들에 대한 융복합 기술 및 코팅,라미네이팅, 봉제가공 등",
              "내절단 장갑, 보호복, 방탄방검, 스크린 방화셔터 등",
            ]}
            src={"/assets/major-business/01.jpg"}
            title={"산업용섬유 가공 및 응용"}
          />

          <IntroduceFieldComponent
            content={[
              "평판디스플레이(FPD)",
              "반도체 클린룸 장비에 적합한 고내구성 실리콘호스 자체 제조",
            ]}
            src={"/assets/major-business/02.jpg"}
            title={"내열 플렉시블호스 전문제작"}
          />

          <IntroduceFieldComponent
            content={[
              "유리기판 연마용 CFRP Fram 지지대",
              "연마용 사이드패드",
              "기타 부품 소재",
            ]}
            src={"/assets/major-business/03.jpg"}
            title={"디스플레이용 부품소재 및 가공"}
          />

          <IntroduceFieldComponent
            content={[
              "디스플레이 산업에 적용가능한 플렉시블호스",
              "반도체,무분진 케이블포드, 기능성 플라스틱",
              "산업용벨트,정전기방지커버 등 제공",
            ]}
            src={"/assets/major-business/04.jpg"}
            title={"다양한 클린룸 장비용 부품소재"}
          />
        </div>
      </div>
    </>
  );
}
