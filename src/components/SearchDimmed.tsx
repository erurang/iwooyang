"use client";

import Image from "next/image";
import { useState } from "react";

export default function SearchDimmed() {
  const [isDimmed, setIsDimmed] = useState(false);

  return (
    <div className="relative">
      <Image
        onClick={() => setIsDimmed(!isDimmed)}
        className="mr-4 cursor-pointer"
        alt="search_icon"
        src="/assets/search.png"
        width={30}
        height={30}
      />

      {isDimmed && (
        <>
          <div
            className={`fixed top-0 z-30 bg-white h-14 md:h-20 w-full left-0 px-4 `}
          >
            <div className="relative">
              <input
                autoFocus
                placeholder="아라미드, 우레탄, 케이블포드..."
                // border-black border-b-2
                className="w-full p-4 focus:outline-none"
              />
              <Image
                className="absolute right-0 top-4"
                alt="search_icon"
                src="/assets/search.png"
                width={30}
                height={30}
              />
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-20 flex items-center justify-center"
            onClick={() => setIsDimmed(false)}
          ></div>
        </>
      )}
    </div>
  );
}
