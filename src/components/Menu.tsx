import Image from "next/image";
import { useState } from "react";

export default function MenuComponent() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="relative">
      <Image
        onClick={() => setMenuToggle((prev) => !prev)}
        className="pt-1 cursor-pointer"
        alt="menu_icon"
        src="/assets/menu.png"
        width={30}
        height={30}
      />
    </div>
  );
}
