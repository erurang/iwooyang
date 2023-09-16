"use client";
import { useState } from "react";

export default function Credentials() {
  const [activeCategory, setActiveCategory] = useState("인증서");

  return (
    <div className="container mx-auto p-8 space-y-12">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        지적재산권 및 인증서
      </h1>
      <div className="mb-8 space-x-4">
        <button
          className={`py-2 px-4 font-semibold focus:outline-none ${
            activeCategory === "인증서" ? "text-lg font-bold" : "text-gray-400"
          }`}
          onClick={() => setActiveCategory("인증서")}
        >
          인증서
        </button>
        <button
          className={`py-2 px-4 font-semibold focus:outline-none ${
            activeCategory === "특허등록증"
              ? "text-lg font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveCategory("특허등록증")}
        >
          특허등록증
        </button>
        <button
          className={`py-2 px-4 font-semibold focus:outline-none ${
            activeCategory === "상표등록증"
              ? "text-lg font-bold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveCategory("상표등록증")}
        >
          상표등록증
        </button>
      </div>
      {activeCategory === "인증서" && (
        <section>
          {/* <h2 className="text-2xl font-semibold mb-6 text-gray-700">인증서</h2> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div className="group" key={item}>
                <img
                  className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg mx-auto border border-gray-300 shadow-md p-2"
                  src={`/assets/credentials/certificate/${item}.jpg`}
                  alt="유망중소기업 확인서"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {activeCategory === "특허등록증" && (
        <section>
          {/* <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            특허등록증
          </h2> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <div className="group" key={item}>
                <img
                  className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg mx-auto border border-gray-300 shadow-md p-2"
                  src={`/assets/credentials/patent/${item}.jpg`}
                  alt="유망중소기업 확인서"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {activeCategory === "상표등록증" && (
        <section>
          {/* <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            상표등록증
          </h2> */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <div className="group" key={item}>
                <img
                  className="transition-transform transform group-hover:scale-105 group-hover:shadow-lg mx-auto border border-gray-300 shadow-md p-2"
                  src={`/assets/credentials/trademark/${item}.jpg`}
                  alt="유망중소기업 확인서"
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
