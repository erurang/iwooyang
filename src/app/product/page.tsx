"use client";

import { useState } from "react";
import { categories } from "./category";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategory, setSelectedSubCategory] = useState(0);
  const [selectedSubSubCategory, setSelectedSubSubCategory] = useState(0);

  const currentCategory = categories[selectedCategory];
  const currentSubCategory =
    currentCategory?.subcategories?.[selectedSubCategory];
  const currentSubSubCategory =
    currentSubCategory?.subsubcategories?.[selectedSubSubCategory];

  return (
    <section className="bg-white text-black">
      <div className="px-4 md:hidden">
        <p className="text-[40px] font-bold md:text-base md:font-normal">
          제품소개
        </p>
      </div>
      <div className="pb-10 md:py-20 px-4 md:text-5xl">
        <div className="md:text-5xl md:font-bold text-[#666666] md:text-black pt-2 flex md:items-center flex-col">
          <p className="mb-2 md:animate-slideUp">
            혁신적인 기술과 품질로 고객의 다양한 요구에 부응하며,
          </p>
          <p className="md:animate-slideUp">
            지속적인 연구와 개발로 최고의 제품을 제공합니다.
          </p>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-4 border-b border-gray-200 pb-2 text-center">
          {categories.map((category, idx) => (
            <button
              key={idx}
              className={`p-2 m-1 transition-colors duration-300 inline-block ${
                idx === selectedCategory
                  ? "font-bold text-black"
                  : "text-gray-400"
              }`}
              onClick={() => {
                setSelectedCategory(idx);
                setSelectedSubCategory(0);
                setSelectedSubSubCategory(0);
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        {currentCategory.subcategories && (
          <div className="mb-4 border-b border-gray-200 pb-2 text-center">
            {currentCategory.subcategories.map((subCat, idx) => (
              <button
                key={idx}
                className={`p-2 m-1 transition-colors duration-300 inline-block ${
                  idx === selectedSubCategory
                    ? "font-bold text-black"
                    : "text-gray-400"
                }`}
                onClick={() => {
                  setSelectedSubCategory(idx);
                  setSelectedSubSubCategory(0);
                }}
              >
                {subCat.name}
              </button>
            ))}
          </div>
        )}
        {currentSubCategory?.subsubcategories && (
          <div className="mb-4 border-b border-gray-200 pb-2 text-center">
            {currentSubCategory.subsubcategories.map((subSubCat, idx) => (
              <button
                key={idx}
                className={`p-2 m-1 transition-colors duration-300 inline-block ${
                  idx === selectedSubSubCategory
                    ? "font-bold text-black"
                    : "text-gray-400"
                }`}
                onClick={() => setSelectedSubSubCategory(idx)}
              >
                {subSubCat.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="mt-4 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {(
            currentSubSubCategory?.data ||
            currentSubCategory?.data ||
            currentCategory?.data ||
            []
          ).map((item) => item)}
        </div>
      </div>
    </section>
  );
}
