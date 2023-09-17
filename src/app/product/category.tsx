import ProductComponent from "@/components/Product";

type SubSubCategory = {
  name: string;
  data: JSX.Element[];
};

type SubCategory = {
  name: string;
  data?: JSX.Element[];
  subsubcategories?: SubSubCategory[];
};

type Category = {
  name: string;
  subcategories?: SubCategory[];
  data?: JSX.Element[];
};

export const categories: Category[] = [
  {
    name: "산업용 호스 및 벨로우즈",
    subcategories: [
      {
        name: "흡입 및 이송용 호스",
        subsubcategories: [
          {
            name: "방염성/내마모성 PU 호스",
            data: [
              <ProductComponent
                content={[
                  "마모성 고체 이송용 방염처리된 호스",
                  "집진기용 호스",
                  "목공사, 가구제조사 등의 목재가공 시 톱밥 이송용",
                  "물리적인 충격으로부터의 보호용",
                ]}
                img="/assets/product/hose/01/01/01.jpg"
                title="Flamex B-F se"
              />,
              <ProductComponent
                content={[
                  "목재가공산업",
                  "보호용 호스",
                  "고체, 기체, 가스의 흡배출 및 이송",
                  "바닥 등에 놓여 눌리는 등 열악한 작업환경에서도 변형, 파괴없이 사용가능",
                ]}
                img="/assets/product/hose/01/01/02.jpg"
                title="Master-PUR STEP"
              />,

              <ProductComponent
                content={[
                  "흡입 및 이송용 호스 (Suction, Transport Hoses)",
                  "방염성/내마..",
                ]}
                img="/assets/product/hose/01/01/13.jpg" // 이미지 경로는 예시입니다.
                title="Flamex B-F se"
              />,
              <ProductComponent
                content={[
                  "바닥 등에 놓여 눌리는 등 열악한 작업환경에서도 변형, 파괴없이 사용가능",
                  "목재가공..",
                ]}
                img="/assets/product/hose/01/01/14.jpg"
                title="Master-PUR STEP"
              />,
              // ... 각 제품 정보에 대한 ProductComponent를 추가합니다.
              <ProductComponent
                content={[
                  "방염성+정전기방지+항미생물성의 멀티기능성 호스",
                  "먼지, 가루, 분진 등의 이송용 ..",
                ]}
                img="/assets/product/hose/01/01/15.jpg"
                title="Master-PUR L"
              />,
            ],
          },
          {
            name: "집진기용 PU 호스",
            data: [
              <ProductComponent
                content={[
                  "C-Flamex",
                  "집진기용 반투명 호스",
                  "먼지, 파우더, 목분 이송용",
                  "종이와 섬유원료 흡배출용",
                ]}
                img="/assets/product/hose/01/02/01.jpg"
                title="C-Flamex"
              />,

              <ProductComponent
                content={[
                  "Flamex B-F se",
                  "마모성 고체 이송용 방염처리된 호스",
                  "집진기용 호스",
                  "목공사, 가구제조사 등의 ...",
                ]}
                img="/assets/product/hose/01/02/02.jpg"
                title="Flamex B-F se"
              />,

              <ProductComponent
                content={[
                  "J-PUR M",
                  "집진기용 호스",
                  "공업용 에어 이송용",
                  "마모성 입자 이송용 (먼지, 파우더, 섬유..",
                ]}
                img="/assets/product/hose/01/02/03.jpg"
                title="J-PUR M"
              />,
            ],
          },
          {
            name: "식품의약품용 PU 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-PUR L-F Food",
                  "식품산업용 석션 이송용",
                  "의약품 이송용",
                  "화공산업용",
                ]}
                img="/assets/product/hose/01/02/04.jpg"
                title="Master-PUR L-F Food"
              />,

              <ProductComponent
                content={[
                  "Master-PUR L Food",
                  "식품산업용 석션 이송용",
                  "의약품 이송용",
                  "화공산업용",
                ]}
                img="/assets/product/hose/01/02/05.jpg"
                title="Master-PUR L Food"
              />,

              <ProductComponent
                content={[
                  "Master-PUR H Food",
                  "식품산업용 석션 이송용",
                  "의약품 이송용",
                  "화공산업용",
                ]}
                img="/assets/product/hose/01/02/06.jpg"
                title="Master-PUR H Food"
              />,
            ],
          },
          {
            name: "대전방지 및 도전성 PU 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-PUR L-EL",
                  "도전성을 필요로 하는 위험구역에서 사용",
                  "폭발성 위험지역에서 산업용 진공청소기용 스",
                ]}
                img="/assets/product/hose/01/02/07.jpg"
                title="Master-PUR L-EL"
              />,

              <ProductComponent
                content={[
                  "Master-PUR H-EL",
                  "도전성을 필요로 하는 위험구역에서 사용",
                  "폭발성 위험지역에서 산업용 진공청소기용 스",
                ]}
                img="/assets/product/hose/01/02/08.jpg"
                title="Master-PUR H-EL"
              />,

              <ProductComponent
                content={[
                  "Master-PUR HX-EL",
                  "도전성이 꼭 필요한 매우 위험한 지역에서 사용",
                  "고체, 액체와 기체의 이송",
                ]}
                img="/assets/product/hose/01/02/09.jpg"
                title="Master-PUR HX-EL"
              />,
            ],
          },
          {
            name: "내열성 TPV 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-SANTO SL",
                  "스팀 흡배출",
                  "엔진구조내의 에어 흡배출",
                  "차량과 엔진의 온/냉 공기의 이송",
                ]}
                img="/assets/product/hose/01/02/10.jpg"
                title="Master-SANTO SL"
              />,

              <ProductComponent
                content={[
                  "Master-SANTO L",
                  "증기의 흡배출",
                  "엔진구조내의 에어 흡배출",
                  "차량과 엔진의 온/냉 공기의 수송",
                ]}
                img="/assets/product/hose/01/02/11.jpg"
                title="Master-SANTO L"
              />,

              <ProductComponent
                content={[
                  "Master-SANTO H",
                  "증기의 흡입",
                  "엔진구조내의 에어 흡배출",
                  "엔진 및 차량내의 온/냉 공기의 수송",
                ]}
                img="/assets/product/hose/01/02/12.jpg"
                title="Master-SANTO H"
              />,
            ],
          },
          {
            name: "꺾임(눌림) 방지용 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-PUR STEP",
                  "바닥 등에 놓여 눌리는 등 열악한 작업환경에서도 변형, 파괴없이 사용가능",
                  "목재가공..",
                ]}
                img="/assets/product/hose/01/02/13.jpg"
                title="Master-PUR STEP"
              />,

              <ProductComponent
                content={[
                  "Carflex SUPER",
                  "배기가스용 호스",
                  "보통 압력 하에 점화장치 및 디젤엔진 배기가스",
                  "외부공기가 충..",
                ]}
                img="/assets/product/hose/01/02/14.jpg"
                title="Carflex SUPER"
              />,

              <ProductComponent
                content={[
                  "Master-VAC",
                  "공업용 진공청소기",
                  "수동 기계",
                  "먼지 추출 장비",
                  "고체, 액체와 기체의 흡입..",
                ]}
                img="/assets/product/hose/01/02/15.jpg"
                title="Master-VAC"
              />,
            ],
          },
          {
            name: "PVC/EVA 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-PVC L-F",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원료의 흡입 및 이송",
                  "공조설비..",
                ]}
                img="/assets/product/hose/01/02/16.jpg"
                title="Master-PVC L-F"
              />,

              <ProductComponent
                content={[
                  "Master-PVC H-F",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원료의 흡입 및 이송",
                  "공조설비..",
                ]}
                img="/assets/product/hose/01/02/17.jpg"
                title="Master-PVC H-F"
              />,

              <ProductComponent
                content={[
                  "Master-PVC L",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원료의 흡입 및 이송",
                  "오일스프..",
                ]}
                img="/assets/product/hose/01/02/18.jpg"
                title="Master-PVC L"
              />,

              <ProductComponent
                content={[
                  "Master-PVC H",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원료의 흡입 및 이송",
                  "공조설비..",
                ]}
                img="/assets/product/hose/01/02/19.jpg"
                title="Master-PVC H"
              />,

              <ProductComponent
                content={[
                  "Polderflex",
                  "고체, 액체, 기체의 흡배출",
                  "진공펌프용",
                  "농업기계용",
                  "건축산업용",
                  "하수..",
                ]}
                img="/assets/product/hose/01/02/20.jpg"
                title="Polderflex"
              />,

              <ProductComponent
                content={[
                  "Master-PVC Flex",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원료의 흡입",
                  "가정 및 공업용 ..",
                ]}
                img="/assets/product/hose/01/02/21.jpg"
                title="Master-PVC Flex"
              />,

              <ProductComponent
                content={[
                  "Master-VAC A",
                  "집진 설비",
                  "수공 기계",
                  "고체, 액체, 기체의 흡배출",
                  "먼지 가루 등 미세원..",
                ]}
                img="/assets/product/hose/01/02/22.jpg"
                title="Master-VAC A"
              />,
            ],
          },
        ],
      },
      {
        name: "흡입 및 송풍용 호스",
        subsubcategories: [
          {
            name: "공조/통풍/용접흄용 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-Clip VINYL",
                  "공조용",
                  "배기 배출 장비",
                  "공기 흡배기",
                  "낮은 압력에 사용",
                ]}
                img="/assets/product/hose/01/02/23.jpg"
                title="Master-Clip VINYL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip VINYL EL",
                  "전기전도성을 요구하는 위험한 구역",
                  "높은 기계압력이 있는 경우",
                  "부식물, 폭발성..",
                ]}
                img="/assets/product/hose/01/02/24.jpg"
                title="Master-Clip VINYL EL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip VINYL B",
                  "공조용",
                  "흡입설비용",
                  "공기 닥트 및 흡배기용",
                  "안전요구가 있는 곳",
                  "텐트..",
                ]}
                img="/assets/product/hose/01/02/25.jpg"
                title="Master-Clip VINYL B"
              />,

              <ProductComponent
                content={[
                  "Master-Clip PE",
                  "석면섬유 흡배출설비",
                  "공조용",
                  "흡입설비용",
                  "공기의 흡입 및 이송",
                  "낮은 ..",
                ]}
                img="/assets/product/hose/01/02/26.jpg"
                title="Master-Clip PE"
              />,

              <ProductComponent
                content={[
                  "Master-Clip PUR",
                  "공조용",
                  "마모성 물질의 흡배출",
                  "낮은 압력에 이용",
                ]}
                img="/assets/product/hose/01/02/27.jpg"
                title="Master-Clip PUR"
              />,

              <ProductComponent
                content={[
                  "Master-Clip SPARK",
                  "용접흄의 흡배출",
                  "공조용",
                  "배기 설비",
                  "안전요구가 높은 곳",
                  "텐트 내 가..",
                ]}
                img="/assets/product/hose/01/02/28.jpg"
                title="Master-Clip SPARK"
              />,

              <ProductComponent
                content={[
                  "Master VENT2",
                  "방염 처리된 호스를 필요로 하는 흡배기 설비",
                  "공조 설비용",
                  "연기 배출 장치 ..",
                ]}
                img="/assets/product/hose/01/02/29.jpg"
                title="Master VENT2"
              />,
            ],
          },
          {
            name: "배기가스용 호스",
            data: [
              <ProductComponent
                content={[
                  "Carflex Super",
                  "배기가스용 호스",
                  "보통 압력 하에 점화장치 및 디젤엔진 배기가스",
                  "외부공기가 충..",
                ]}
                img="/assets/product/hose/01/02/30.jpg"
                title="Carflex Super"
              />,

              <ProductComponent
                content={[
                  "Carflex 200",
                  "보통 압력하에 휘발유 및 디젤엔진 배기가스",
                  "외부공기가 충분히(약50%선) 공급되는..",
                ]}
                img="/assets/product/hose/01/02/31.jpg"
                title="Carflex 200"
              />,

              <ProductComponent
                content={[
                  "Carflex 300",
                  "높은 압력 하의 점화장치 및 디젤엔진배기가스, 특히 트럭 및 건설 장비에 적합",
                  "외부..",
                ]}
                img="/assets/product/hose/01/02/32.jpg"
                title="Carflex 300"
              />,

              <ProductComponent
                content={[
                  "Master-Clip CAR",
                  "외부공기가 충분히(약50%선) 공급되는 경우 엔진 배기가스 300°C까지 사용가능",
                  "..",
                ]}
                img="/assets/product/hose/01/02/33.jpg"
                title="Master-Clip CAR"
              />,

              <ProductComponent
                content={[
                  "Master-Clip ISO CAR",
                  "외부공기가 충분히(약50%선) 공급되는 경우 엔진 배기가스 300°C까지 사용가능",
                  "..",
                ]}
                img="/assets/product/hose/01/02/34.jpg"
                title="Master-Clip ISO CAR"
              />,

              <ProductComponent
                content={[
                  "Master-Clip KAPTON®",
                  "저압의 흄 배출설비",
                  "차량 및 엔진 설비",
                  "자동차 산업의 테스트베드의 배기가스 ..",
                ]}
                img="/assets/product/hose/01/02/35.jpg"
                title="Master-Clip KAPTON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 450",
                  "배출속도가 빠른 디젤엔진 테스트베드용",
                  "보일러 파이프용",
                  "뜨거운 공기",
                  "흡배..",
                ]}
                img="/assets/product/hose/01/02/36.jpg"
                title="Master-Clip HT 450"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 650",
                  "자동차 성능 테스트 설비의 배기가스 배출용",
                  "보일러 배관",
                  "차량 및 엔진 설비 ..",
                ]}
                img="/assets/product/hose/01/02/37.jpg"
                title="Master-Clip HT 650"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 1100",
                  "최극고온",
                  "대형엔진의 배기가스 배출",
                  "불꽃이 튀는 환경에서의 흡배출",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/38.jpg"
                title="Master-Clip HT 1100"
              />,
            ],
          },
          {
            name: "고온용 호스 (최고1100℃)",
            data: [
              <ProductComponent
                content={[
                  "Master-Clip NEOPRENE",
                  "온/냉 공기의 수송",
                  "공조설비",
                  "차량설비",
                  "엔진설비",
                  "배기가스 배출 설비..",
                ]}
                img="/assets/product/hose/01/02/39.jpg"
                title="Master-Clip NEOPRENE"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HYPALON®",
                  "냉/온기의 이송",
                  "분체(가루) 건조기",
                  "에어컨",
                  "낮은 압력에 사용",
                  "공업..",
                ]}
                img="/assets/product/hose/01/02/40.jpg"
                title="Master-Clip HYPALON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip VITON®",
                  "높은 온도에서 자극성이 강한 성분을 뽑아냄",
                  "낮은 압력에 사용",
                  "화학설비",
                  "..",
                ]}
                img="/assets/product/hose/01/02/41.jpg"
                title="Master-Clip VITON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip SILICON",
                  "냉/온덕트",
                  "배출장치",
                  "차량",
                  "엔진",
                  "항공기산업",
                  "방위산업",
                  "일반..",
                ]}
                img="/assets/product/hose/01/02/42.jpg"
                title="Master-Clip SILICON"
              />,

              <ProductComponent
                content={[
                  "Master-Clip ISO-SILICON",
                  "냉/온덕트",
                  "배출성능이 향상된 흡입장치",
                  "차량",
                  "엔진",
                  "항공기산업",
                  "..",
                ]}
                img="/assets/product/hose/01/02/43.jpg"
                title="Master-Clip ISO-SILICON"
              />,

              <ProductComponent
                content={[
                  "Master-Clip CAR",
                  "외부공기가 충분히(약50%선) 공급되는 경우 엔진 배기가스 300°C까지 사용가능",
                  "..",
                ]}
                img="/assets/product/hose/01/02/44.jpg"
                title="Master-Clip CAR"
              />,

              <ProductComponent
                content={[
                  "Master-Clip ISO CAR",
                  "외부공기가 충분히(약50%선) 공급되는 경우 엔진 배기가스 300°C까지 사용가능",
                  "..",
                ]}
                img="/assets/product/hose/01/02/45.jpg"
                title="Master-Clip ISO CAR"
              />,

              <ProductComponent
                content={[
                  "Master-Clip KAPTON®",
                  "저압의 흄 배출설비",
                  "차량 및 엔진 설비",
                  "자동차 산업의 테스트베드의 배기가스 ..",
                ]}
                img="/assets/product/hose/01/02/46.jpg"
                title="Master-Clip KAPTON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 400",
                  "흡배출용으로 적합",
                  "뜨거운 공기",
                  "용광로",
                  "제철 제강 설비",
                  "엔진",
                  "..",
                ]}
                img="/assets/product/hose/01/02/47.jpg"
                title="Master-Clip HT 400"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 450",
                  "배출속도가 빠른 디젤엔진 테스트베드용",
                  "보일러 파이프용",
                  "뜨거운 공기",
                  "흡배..",
                ]}
                img="/assets/product/hose/01/02/48.jpg"
                title="Master-Clip HT 450"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 500",
                  "저압에서 배기가스 배출",
                  "차량 및 엔진 구조물",
                  "높은 온도의 자동차 배기가스 배..",
                ]}
                img="/assets/product/hose/01/02/49.jpg"
                title="Master-Clip HT 500"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 650",
                  "자동차 성능 테스트 설비의 배기가스 배출용",
                  "보일러 배관",
                  "차량 및 엔진 설비 ..",
                ]}
                img="/assets/product/hose/01/02/50.jpg"
                title="Master-Clip HT 650"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HT 1100",
                  "최극고온",
                  "대형엔진의 배기가스 배출",
                  "불꽃이 튀는 환경에서의 흡배출",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/51.jpg"
                title="Master-Clip HT 1100"
              />,
            ],
          },
          {
            name: "가황처리된 내열 호스",
            data: [
              <ProductComponent
                content={[
                  "Master NEO 1",
                  "상온, 뜨거운 공기 및 가스성분의 이송",
                  "자동차 산업",
                  "항공기 산업",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/52.jpg"
                title="Master NEO 1"
              />,

              <ProductComponent
                content={[
                  "Master NEO 2",
                  "상온, 뜨거운 공기 및 가스성분의 이송",
                  "자동차 산업",
                  "항공기 산업",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/53.jpg"
                title="Master NEO 2"
              />,

              <ProductComponent
                content={[
                  "Master SIL 1",
                  "상온, 뜨거운 공기 및 가스성분의 이송",
                  "자동차 산업",
                  "항공기 산업",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/54.jpg"
                title="Master SIL 1"
              />,

              <ProductComponent
                content={[
                  "Master SIL 2",
                  "상온, 뜨거운 공기 및 가스성분의 이송",
                  "자동차 산업",
                  "항공기 산업",
                  "조선공..",
                ]}
                img="/assets/product/hose/01/02/55.jpg"
                title="Master SIL 2"
              />,
            ],
          },
          {
            name: "내화학용 호스",
            data: [
              <ProductComponent
                content={[
                  "Master-Clip NEOPRENE",
                  "온/냉 공기의 수송",
                  "공조설비",
                  "차량설비",
                  "엔진설비",
                  "배기가스 배출 설비..",
                ]}
                img="/assets/product/hose/01/02/56.jpg"
                title="Master-Clip NEOPRENE"
              />,

              <ProductComponent
                content={[
                  "Master-Clip HYPALON®",
                  "냉/온기의 이송",
                  "분체(가루) 건조기",
                  "에어컨",
                  "낮은 압력에 사용",
                  "공업..",
                ]}
                img="/assets/product/hose/01/02/57.jpg"
                title="Master-Clip HYPALON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® H",
                  "중간 온도 범위에서 부식성 물질의 흡배출",
                  "용제(Solvents)류 흡배출",
                  "화..",
                ]}
                img="/assets/product/hose/01/02/58.jpg"
                title="Master-Clip TEFLON® H"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® H-EL",
                  "전기 전도성을 요구하는 위험지역",
                  "위험지역에서의 부식성, 폭발성 가스 및 흄의 흡배..",
                ]}
                img="/assets/product/hose/01/02/59.jpg"
                title="Master-Clip TEFLON® H-EL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip VITON®",
                  "높은 온도에서 자극성이 강한 성분을 추출",
                  "낮은 압력에 사용",
                  "화학설비",
                  "페..",
                ]}
                img="/assets/product/hose/01/02/60.jpg"
                title="Master-Clip VITON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON®",
                  "부식성 물질의 흡배출",
                  "화학설비",
                  "페인트분무 흡입",
                  "페인트, 목공, 종이산업..",
                ]}
                img="/assets/product/hose/01/02/61.jpg"
                title="Master-Clip TEFLON®"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® S",
                  "부식성 물질의 흡배출",
                  "화학설비",
                  "페인트분무 흡입",
                  "페인트, 목공, 종이산업..",
                ]}
                img="/assets/product/hose/01/02/62.jpg"
                title="Master-Clip TEFLON® S"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® S-EL",
                  "전기전도성이 요구되는 위험구역",
                  "위험지역에서의 부식성 가스와 흄의 흡배출",
                  "화학..",
                ]}
                img="/assets/product/hose/01/02/63.jpg"
                title="Master-Clip TEFLON® S-EL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip KAPTON®",
                  "저압의 흄 배출설비",
                  "차량 및 엔진 설비",
                  "자동차 산업의 테스트베드의 배기가스 ..",
                ]}
                img="/assets/product/hose/01/02/64.jpg"
                title="Master-Clip KAPTON®"
              />,
            ],
          },
          {
            name: "대전방지 및 도전성 클립호스",
            data: [
              <ProductComponent
                content={[
                  "Master-CLIP VINYL EL",
                  "전기전도성이 요구되는 위험한 구역",
                  "높은 기계압력이 있는 경우",
                  "부식물, 폭발성..",
                ]}
                img="/assets/product/hose/01/02/65.jpg"
                title="Master-CLIP VINYL EL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® H-EL",
                  "전기전도성이 요구되는 위험한 구역",
                  "위험지역에서 부식성, 폭발성 가스 및 흄의 흡배..",
                ]}
                img="/assets/product/hose/01/02/66.jpg"
                title="Master-Clip TEFLON® H-EL"
              />,

              <ProductComponent
                content={[
                  "Master-Clip TEFLON® S-EL",
                  "전기전도성이 요구되는 위험한 구역",
                  "위험지역에서 부식성 가스와 흄의 흡배출",
                  "화..",
                ]}
                img="/assets/product/hose/01/02/67.jpg"
                title="Master-Clip TEFLON® S-EL"
              />,
            ],
          },
          {
            name: "주문제작호스",
            data: [
              <ProductComponent
                content={[
                  "단열호스",
                  "공조",
                  "복사열 및 냉방 보온 단열",
                  "엔진 구조물",
                  "차량 구조물",
                ]}
                img="/assets/product/hose/01/02/68.jpg"
                title="단열호스"
              />,

              <ProductComponent
                content={[
                  "내부 주름형 호스",
                  "마모 및 스파크로부터 외벽을 보호해야하는 내벽구조가 필요할 때",
                  "배기가스 흡배출 ..",
                ]}
                img="/assets/product/hose/01/02/69.jpg"
                title="내부 주름형 호스"
              />,

              <ProductComponent
                content={[
                  "다층 구조 호스",
                  "내외벽 구조가 표준형 이외의 구조를 필요로 하는 가스성분의 흡배출",
                  "공조",
                  "화학..",
                ]}
                img="/assets/product/hose/01/02/70.jpg"
                title="다층 구조 호스"
              />,
            ],
          },
        ],
      },
      {
        name: "호스연결제품",
        subsubcategories: [
          {
            name: "커프",
            data: [
              <ProductComponent
                content={[
                  "PU 나사형 Cuff EL(도전성)",
                  "Master-PUR L/H, Master-PVC L/H호스용",
                  "공업용 진공청소기 ..",
                ]}
                img="/assets/product/hose/01/02/71.jpg"
                title="PU 나사형 Cuff EL(도전성)"
              />,

              <ProductComponent
                content={[
                  "PU 나사형 Cuff",
                  "Master-PUR L/H, Master-PVC L/H 호스용",
                  "공업용 진공청소기 ..",
                ]}
                img="/assets/product/hose/01/02/72.jpg"
                title="PU 나사형 Cuff"
              />,
            ],
          },
          {
            name: "플랜지",
            data: [
              <ProductComponent
                content={[
                  "Weding neck cone flange",
                  "Combiflex PU-cone flange를 다음에 연결하는 Quick-couplin..",
                ]}
                img="/assets/product/hose/01/02/73.jpg"
                title="Weding neck cone flange"
              />,

              <ProductComponent
                content={[
                  "Metal socket with cone flange",
                  "Combiflex PU-cone flange를 다음에 연결하는 Quick-couplin..",
                ]}
                img="/assets/product/hose/01/02/74.jpg"
                title="Metal socket with cone flange"
              />,

              <ProductComponent
                content={[
                  "Quick action clamp for cone flange",
                  "Combiflex PU-cone flange를 다음에 연결하는 Quick-couplin..",
                ]}
                img="/assets/product/hose/01/02/75.jpg"
                title="Quick action clamp for cone flange"
              />,
            ],
          },
          {
            name: "소켓",
            data: [
              <ProductComponent
                content={[
                  "Combiflex PU threaded socket",
                  "Master-PUR L",
                  "Master-PUR H",
                  "Master-PUR SH",
                  "...",
                ]}
                img="/assets/product/hose/01/02/76.jpg"
                title="Combiflex PU threaded socket"
              />,
            ],
          },
          {
            name: "클램프",
            data: [
              <ProductComponent
                content={[
                  "Clip-Grip hose clamp (스크류타입)",
                  "Master-Clip류의 클램프",
                ]}
                img="/assets/product/hose/01/02/77.jpg"
                title="Clip-Grip hose clamp (스크류타입)"
              />,

              <ProductComponent
                content={[
                  "Clip-Grip quick action clamp",
                  "Master-Clip류의 클램프",
                ]}
                img="/assets/product/hose/01/02/78.jpg"
                title="Clip-Grip quick action clamp"
              />,

              <ProductComponent
                content={[
                  "Car-Grip hose clamp(스크류 타입)",
                  "Carflex Super, Master-PUR STEP용",
                ]}
                img="/assets/product/hose/01/02/79.jpg"
                title="Car-Grip hose clamp(스크류 타입)"
              />,

              <ProductComponent
                content={[
                  "Car-Grip quick action clamp",
                  "두꺼운 호스류의 고정용",
                ]}
                img="/assets/product/hose/01/02/80.jpg"
                title="Car-Grip quick action clamp"
              />,

              <ProductComponent
                content={[
                  "Master-Grip hose clamp(스크류타입)",
                  "두꺼운 호스류의 고정용",
                ]}
                img="/assets/product/hose/01/02/81.jpg"
                title="Master-Grip hose clamp(스크류타입)"
              />,

              <ProductComponent
                content={[
                  "Master-Grip quick action clamp",
                  "두꺼운 호스류의 고정용",
                ]}
                img="/assets/product/hose/01/02/82.jpg"
                title="Master-Grip quick action clamp"
              />,

              <ProductComponent
                content={["Hose clamp, bolt clamp", "두꺼운 호스류의 고정용"]}
                img="/assets/product/hose/01/02/83.jpg"
                title="Hose clamp, bolt clamp"
              />,

              <ProductComponent
                content={[
                  "Hose clamp with worm gear drive",
                  "얇은 스파이럴 호스의 연결",
                ]}
                img="/assets/product/hose/01/02/84.jpg"
                title="Hose clamp with worm gear drive"
              />,
            ],
          },
          {
            name: "기타연결장치",
            data: [
              <ProductComponent
                content={["Hose connector", "얇은 호스의 확장 및 연결"]}
                img="/assets/product/hose/01/02/85.jpg"
                title="Hose connector"
              />,

              <ProductComponent
                content={[
                  "Hose reducer, symmetrical",
                  "얇은 호스의 확장 및 연결",
                ]}
                img="/assets/product/hose/01/02/86.jpg"
                title="Hose reducer, symmetrical"
              />,

              <ProductComponent
                content={[
                  "Heat shrink cuff",
                  "호스 간 연결 및 확장 시 밀봉할 수 있는 경제적 방법",
                ]}
                img="/assets/product/hose/01/02/87.jpg"
                title="Heat shrink cuff"
              />,
            ],
          },
        ],
      },
      {
        name: "벨로우즈",
        subsubcategories: [
          {
            name: "제품1",
            data: [
              <ProductComponent
                content={[
                  "벨로우즈 (주문제작)",
                  "내열 벨로우즈(자바라)",
                  "내마모 벨로우즈(자바라)",
                  "용도에 따른 주문제작가능",
                ]}
                img="/assets/product/hose/01/02/88.jpg"
                title="벨로우즈 (주문제작)"
              />,
            ],
          },
        ],
      },
    ],
  },
  {
    name: "메디칼 호스",
    subcategories: [
      {
        name: "치과 석션용 호스",
        data: [
          <ProductComponent
            content={[
              "치의료기 석션용 호스",
              "의료장비 케이블 보호용 (레이져, IPL, HIFU장비 등)...",
            ]}
            img="/path/to/Mediflex-L-PU/image.jpg"
            title="Mediflex (L)-PU"
          />,
          <ProductComponent
            content={[
              "치의료기 석션용 호스",
              "의료장비 케이블 보호용 (레이져, IPL치료기 등)",
              "일...",
            ]}
            img="/path/to/MediflexVOR/image.jpg"
            title="Mediflex VOR"
          />,
          <ProductComponent
            content={[
              "의료장비 케이블 보호용 (레이져, IPL, HIFU장비 등)",
              "일반 의료기 Air...",
            ]}
            img="/path/to/Mediflex-L-PU-variant/image.jpg"
            title="Mediflex(L)-PU"
          />,
          <ProductComponent
            content={[
              "치의료기 석션용 호스",
              "의료장비 케이블 보호용 (레이져, IPL치료기 등)",
              "일...",
            ]}
            img="/path/to/MediflexVOR2/image.jpg"
            title="Mediflex VOR"
          />,
          <ProductComponent
            content={[
              "산업용 케이블 보호용",
              "의료장비 케이블 보호용 (laser, IPL 등)",
              "마모...",
            ]}
            img="/path/to/MediflexST/image.jpg"
            title="Mediflex ST"
          />,
          <ProductComponent
            content={[
              "케이블 보호용",
              "의료 장비용",
              "레이져 장비용",
              "X-ray 장비용",
            ]}
            img="/path/to/MediflexSE/image.jpg"
            title="Mediflex SE"
          />,
          <ProductComponent
            content={[
              "산업용 케이블 보호용",
              "의료장비용 케이블 보호용 (X-ray 장비, 레이져장비 등)...",
            ]}
            img="/path/to/MediflexMI/image.jpg"
            title="Mediflex MI"
          />,
          <ProductComponent
            content={[
              "케이블 보호용 호스 (특히 X-ray 장비 전용호스 등)",
              "Air duct",
              "석...",
            ]}
            img="/path/to/MediflexMI2/image.jpg"
            title="Mediflex MI2"
          />,
          <ProductComponent
            content={[
              "기계장비 케이블 보호용 호스",
              "공학용 케이블 보호용 호스",
              "이송용 호스",
            ]}
            img="/path/to/MediflexVC/image.jpg"
            title="Mediflex VC"
          />,
          <ProductComponent
            content={[
              "전동식 호흡보호구 에어 이송용",
              "방독면 호흡기용",
              "기타 안전장비 호흡기용",
            ]}
            img="/path/to/MediflexVCS/image.jpg"
            title="Mediflex VCS"
          />,
        ],
      },
      {
        name: "케이블보호용",
        data: [
          <ProductComponent
            content={[
              "의료장비 케이블 보호용 (레이져, IPL, HIFU장비 등)",
              "일반 의료기 Air...",
            ]}
            img="/path/to/Mediflex-L-PU/image.jpg"
            title="Mediflex(L)-PU"
          />,
          <ProductComponent
            content={[
              "치의료기 석션용 호스",
              "의료장비 케이블 보호용 (레이져, IPL치료기 등)",
              "일...",
            ]}
            img="/path/to/MediflexVOR/image.jpg"
            title="Mediflex VOR"
          />,
          <ProductComponent
            content={[
              "산업용 케이블 보호용",
              "의료장비 케이블 보호용 (laser, IPL 등)",
              "마모...",
            ]}
            img="/path/to/MediflexST/image.jpg"
            title="Mediflex ST"
          />,
          <ProductComponent
            content={[
              "케이블 보호용",
              "의료 장비용",
              "레이져 장비용",
              "X-ray 장비용",
            ]}
            img="/path/to/MediflexSE/image.jpg"
            title="Mediflex SE"
          />,
          <ProductComponent
            content={[
              "산업용 케이블 보호용",
              "의료장비용 케이블 보호용 (X-ray 장비, 레이져장비 등)...",
            ]}
            img="/path/to/MediflexMI/image.jpg"
            title="Mediflex MI"
          />,
          <ProductComponent
            content={[
              "케이블 보호용 호스 (특히 X-ray 장비 전용호스 등)",
              "Air duct",
              "석...",
            ]}
            img="/path/to/MediflexMI2/image.jpg"
            title="Mediflex MI2"
          />,
          <ProductComponent
            content={[
              "기계장비 케이블 보호용 호스",
              "공학용 케이블 보호용 호스",
              "이송용 호스",
            ]}
            img="/path/to/MediflexVC/image.jpg"
            title="Mediflex VC"
          />,
        ],
      },
    ],
  },
  {
    name: "산업용 섬유",
    subcategories: [
      {
        name: "아라미드섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/para-aramid/image.jpg"
            title="아라미드섬유 (Para-aramid fiber)"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/meta-aramid/image.jpg"
            title="아라미드섬유 (Meta-aramid fiber)"
          />,
        ],
      },
      {
        name: "금속섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/metal-fiber/image.jpg"
            title="금속섬유 (Metal fiber)"
          />,
        ],
      },
      {
        name: "LCP 섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/lcp-fiber/image.jpg"
            title="LCP 섬유 (Vectran® fiber)"
          />,
        ],
      },
      {
        name: "탄소섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/carbon-fiber/image.jpg"
            title="탄소섬유 (Carbon fiber)"
          />,
        ],
      },
      {
        name: "PBO 섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/pbo-fiber/image.jpg"
            title="PBO 섬유 (Zylon® fiber)"
          />,
        ],
      },
      {
        name: "유리섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/glass-fiber/image.jpg"
            title="유리섬유 (Glass fiber)"
          />,
        ],
      },
      {
        name: "실리카섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/silica-fiber/image.jpg"
            title="실리카섬유 (Silica fiber)"
          />,
        ],
      },
      {
        name: "탄화섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/oxidized-pan-fiber/image.jpg"
            title="탄화섬유 (Oxidized PAN fiber)"
          />,
        ],
      },
      {
        name: "탄화/아라미드 혼방섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/opan+aramid-fiber/image.jpg"
            title="탄화/아라미드 혼방섬유 (OPAN+Aramid fiber)"
          />,
        ],
      },
      {
        name: "PTFE 섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/ptfe-fiber/image.jpg"
            title="PTFE 섬유 (PTFE fiber)"
          />,
        ],
      },
      {
        name: "탄화규소 섬유",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/sic-fiber/image.jpg"
            title="탄화규소 섬유 (SiC fiber)"
          />,
        ],
      },
      {
        name: "기타",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/fr-sewing-thread/image.jpg"
            title="고온용 재봉사 (FR or Nonflammable sewing thread)"
          />,
        ],
      },
    ],
  },
  {
    name: "산업용 벨트",
    subcategories: [
      {
        name: "Timing Belt",
        data: [
          <ProductComponent
            content={[]}
            img="/assets/product/hose/01/02/01.jpg"
            title="일반형/HTD형/HTPD형"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image2.jpg"
            title="Open-end belt"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image3.jpg"
            title="Gates power grip GT belt"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image4.jpg"
            title="Unitta power grip GT belt"
          />,
        ],
      },
      {
        name: "Urethane Timing Belt",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/your/image5.jpg"
            title="Endless type"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image6.jpg"
            title="Open type"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image7.jpg"
            title="NOK Iron rubber belt"
          />,
        ],
      },
      {
        name: "Mesh Belt",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/your/image8.jpg"
            title="PTFE coated glass fabrics"
          />,
          //... 추가 mesh 벨트 항목들
        ],
      },
      {
        name: "Flat Belt",
        data: [
          <ProductComponent
            content={[]}
            img="/path/to/your/image9.jpg"
            title="Megadyne MEGAFLAT"
          />,
          <ProductComponent
            content={[]}
            img="/path/to/your/image10.jpg"
            title="Nitta flat belt"
          />,
        ],
      },
      //... 기타 등의 카테고리를 추가적으로 넣을 수 있습니다.
    ],
  },
  {
    name: "무분진 케이블포드",
    data: [
      <ProductComponent
        content={[
          "적층구조로 심플한 사이즈로 제품 구성 가능",
          "ePTFE 재질의 자켓에 트랙구조 및 케이블을 내장하여 무분진 실현",
          "다양한 Application 으로 사용자의 장비 조건에 따라 제품 구성이 가능",
          "Clean room에서 사용하는 케이블 베어내 케이블을 포설하는 부분에 적용",
        ]}
        img="/assets/product/dust/01.png"
        title="무분진 케이블 포드"
      />,
    ],
  },
  {
    name: "제품소개복합소재 응용품",
    data: [
      <ProductComponent
        content={["방탄 NIJ-STD 0101.06 Level IIIA (.44 Mag, .357 Sig..)"]}
        img="/path/to/ballistic-material/image.jpg"
        title="방탄 방검용 보호복 소재"
      />,
      <ProductComponent
        content={["소방서", "병원", "사설 구조대", "산악 구조대 등"]}
        img="/path/to/stretcher-bag/image.jpg"
        title="구조용 스트레처 백(들것)"
      />,
    ],
  },
];
