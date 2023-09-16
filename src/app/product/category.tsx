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
            ],
          },
          {
            name: "집진기용 PU 호스",
            data: [
              <ProductComponent
                content={[
                  "먼지, 파우더, 목분 이송용",
                  "종이와 섬유원료 흡배출용",
                  "용접흄 이송용",
                ]}
                img="/assets/product/hose/01/02/01.jpg"
                title="C-Flamex"
              />,
            ],
          },
          { name: "식품의약품용 PU 호스", data: [] },
          { name: "대전방지 및 도전성 PU 호스", data: [] },
          { name: "내열성 TPV 호스", data: [] },
          { name: "꺾임(눌림) 방지용 호스", data: [] },
          { name: "PVC/EVA 호스", data: [] },
        ],
      },
      {
        name: "흡입 및 송풍용 호스",
        subsubcategories: [
          { name: "공조/통풍/용접흄용 호스", data: [] },
          { name: "배기가스용 호스", data: [] },
          { name: "고온용 호스 (최고1100℃)", data: [] },
          { name: "가황처리된 내열 호스", data: [] },
          { name: "내화학용 호스", data: [] },
          { name: "대전방지 및 도전성 클립호스", data: [] },
          { name: "주문제작호스", data: [] },
        ],
      },
      {
        name: "호스연결제품",
        subsubcategories: [
          { name: "커프", data: [] },
          { name: "플랜지", data: [] },
          { name: "소켓", data: [] },
          { name: "클램프", data: [] },
          { name: "기타연결장치", data: [] },
        ],
      },
      {
        name: "벨로우즈",
        subsubcategories: [{ name: "제품1", data: [] }],
      },
    ],
  },
  {
    name: "메디칼 호스",
    subcategories: [
      { name: "치과 석션용 호스", data: [] },
      { name: "케이블 보호용 호스", data: [] },
    ],
  },
  { name: "산업용 섬유", data: [] },
  { name: "산업용 벨트", data: [] },
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
  { name: "복합소재 응용품", data: [] },
];
