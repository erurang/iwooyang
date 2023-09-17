import Image from "next/image";
import { useState } from "react";

export default function LanguageComponent() {
  const [languageToggle, setLanguageToggle] = useState(false);

  return (
    <div className="relative">
      <Image
        onClick={() => setLanguageToggle((prev) => !prev)}
        className="mr-4 cursor-pointer"
        alt="language_icon"
        src="/assets/language.png"
        width={30}
        height={30}
      />
      <div
        className={`
      ${languageToggle ? "block" : "hidden"}  
      text-center absolute border-[1px] border-solid border-black bg-white p-3 w-24 rounded-md mt-3 -left-6 cursor-pointer
      `}
      >
        <p className="hover:bg-gray-200 py-1 rounded-md">한국어</p>
        <p className="hover:bg-gray-200 py-1 rounded-md">English</p>
        <p className="hover:bg-gray-200 py-1 rounded-md">日本語</p>
        <p className="hover:bg-gray-200 py-1 rounded-md">中文(简)</p>
        <p className="hover:bg-gray-200 py-1 rounded-md">中文(繁)</p>
      </div>
    </div>
  );
}
