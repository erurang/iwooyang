import Image from "next/image";

export default function Header() {
  return (
    <header className="h-14 p-2 bg-white md:pt-5 md:px-2 md:h-20">
      <div>
        <Image
          width={300}
          height={70}
          alt="logo.png"
          src="/assets/logo.jpg"
          className="hidden lg:inline-block"
        />
        <img className="lg:hidden h-11" src="assets/short_logo.png" />
      </div>
    </header>
  );
}
