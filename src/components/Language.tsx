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
      text-center absolute border-[1px] border-solid border-black bg-white p-3 w-20 rounded-md -left-6 cursor-pointer mt-3
      `}
      >
        <p>한국어</p>
        <p>English</p>
        <p>中国語</p>
        <p>日本語</p>
      </div>
    </div>
  );
}
