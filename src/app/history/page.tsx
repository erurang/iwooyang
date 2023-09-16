export default function History() {
  return (
    <div>
      <div className="px-4 md:hidden">
        <p className="text-[40px] font-bold md:text-base md:font-normal">
          연혁
        </p>
      </div>

      <div className="pb-10 md:py-20 px-4">
        <div className="md:text-5xl md:font-bold text-[#666666] md:text-black pt-2 flex md:items-center flex-col">
          <p className="md:animate-slideUp">1994년부터 지금까지,</p>
          <br className="hidden md:block" />
          <p className="md:pt-2 md:animate-slideUp">
            소재 국산화를 통해 성장한 우양신소재 입니다
          </p>
        </div>

        {/*  */}
        <div className="max-w-4xl mx-auto py-12 px-6">
          {/* 2011 ~ 현재 */}
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
            2011 ~ 현재
          </h2>
          <ul className="mb-8 pl-4">
            {[
              "2018. 05. 우양신소재 구미공장 확장이전 및 등록",
              "2018. 05. 대구스타플러스기업 선정",
              "2018. 02. 기술평가 우수기업 인증 (NICE TCB)",
              "2017. 10. 중소기업융합대전 대통령 표창장 수상 (대표 윤주영)",
              "2017. 08. Pre-스타기업 선정",
              "2016. 11.BITE 2016 최우수 퍼포먼스상 수상",
              "2016. 10.원 레이어 플렉시블 호스 및 원 레이어 플렉시블 호스의 제조방법 특허등록",
              "2016. 03.내열 플렉시블 실리콘 호스의 제조방법 및 그 내열 플렉시블 실리콘의 호스 특허 등록",
              "2015. 11.연마지지용 사이드 패드 및 이를 포함하는 연마지지 유닛 특허 등록",
              "2015. 06.Ringflex 상표등록",
              "2015. 06.Reelflex 상표등록",
              "2015. 01.탄소섬유를 포함한 전도성 선재 특허 출원",
              "2014. 11.SILIFLEX-N 상표등록",
              "2014. 12.SILIFLEX-P 상표등록",
              "2014. 02.DANOKYEO 상표등록",
              "2013. 11.한국섬유산업연합회 모범경영인 표창 (대표 윤주영)",
              "2012. 06.기술혁신개발사업 선정",
              "2011. 12.융합 모니터링 시스템 기술 개발 사업 선정",
              "2011. 12.고물성 산업용 벨트 개발 사업 선정",
              "2011. 06.에코웰 상표등록",
              "2011. 06.ENGINFLEX 상표등록",
              "2011. 06.SILIFLEX 상표등록",
              /* ... 여기에 다른 2011 ~ 현재 항목들을 추가 */
            ].map((item) => (
              <li className="mb-2" key={item}>
                <span className="text-blue-600 font-medium">
                  {item.split(" ")[0]}
                </span>{" "}
                {item.split(" ").slice(1).join(" ")}
              </li>
            ))}
          </ul>

          {/* 2001 ~ 2010 */}
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
            2001 ~ 2010
          </h2>
          <ul className="mb-8 pl-4">
            {[
              "2010. 12. 기업부설연구소 설립 인정 [한국산업기술진흥협회 : 제2010310773호]",
              "2009. 12. 대구광역시장 표창 (대표 윤주영)",
              "2009. 08.우양신소재로 상호 변경",
              "2009. 07.유망중소기업 선정 (중소기업은행)",
              "2008. 01.우양신소재 공장 확장이전 및 등록",
              "2007. 12.INNO-BIZ(기술혁신형중소기업) 인증",
              "2007. 10.벤처기업 인증",
              "2007. 10.부품소재전문기업 인증",
              "2007. 06.연구개발전담부서 등록",
              "2007. 05.지역특화기술개발사업 선정",
              "2007. 05.ISO 9001(품질경영시스템) 인증 획득",
              "2006. 12.중소기업진흥공단 대구 경북 지역 본부장 표창 (대표 윤주영)",
              "2006. 05.지역특화기술개발사업 선정",
              "2006. 01.우양신소재 상표등록",
              "2005. 04.패밀리기업 선정 (중소기업은행)",
              "2005. 03.사업 확장에 의한 본사 증축",
              "2002. 09.서울 영업 본부 신설",
              "2002. 09.독일 Masterflex社 한국총판 (Flexible Hoses)",
              "2001. 09.본사 신축 확장 이전",
              "2001. 08.우양신소재벨트로 상호변경",
            ].map((item) => (
              <li className="mb-2" key={item}>
                <span className="text-blue-600 font-medium">
                  {item.split(" ")[0]}
                </span>{" "}
                {item.split(" ").slice(1).join(" ")}
              </li>
            ))}
          </ul>

          {/* 1994 ~ 2000 */}
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-gray-200 pb-2">
            1994 ~ 2000
          </h2>
          <ul className="mb-8 pl-4">
            {[
              "1999. 01. 무역업신고필 (한국무역협회)",
              "1998. 05. 독일 TTS 파트너 (Aramid/ Metal Belt)",
              "1997. 05.본사 확장 이전",
              "1997. 01.브라운관 이송 콘베이어 벨트(VPM벨트) 의장등록",
              "1995. 07.우양통상 부품가공공장 신설",
              "1994. 10.우양통상창업 (대표 윤주영)",
            ].map((item) => (
              <li className="mb-2" key={item}>
                <span className="text-blue-600 font-medium">
                  {item.split(" ")[0]}
                </span>{" "}
                {item.split(" ").slice(1).join(" ")}
              </li>
            ))}
          </ul>
        </div>

        {/*  */}
      </div>
    </div>
  );
}
