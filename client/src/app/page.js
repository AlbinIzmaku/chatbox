import Image from "next/image";
import logo from "/public/logo.png";
import shadowLogo from "/public/shadowLogo.png";

export default function Intro() {
  return (
    <main className="bg-white w-screen h-screen flex justify-center items-center ">
      <div className="transform -transfrom-x-1/2 -translate-y-1/2 flex flex-col items-center ">
        <div className="relative">
          <Image src={logo} alt="Logo" quality={100} priority />
          <Image
            src={shadowLogo}
            alt="Shadow of Logo"
            className="absolute top-0.5 left-0.5 -z-50"
          />
        </div>
        <h1 className="italic font-bold text-4xl">Chatbox</h1>
      </div>
    </main>
  );
}
