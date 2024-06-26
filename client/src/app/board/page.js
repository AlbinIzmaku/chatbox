import Image from "next/image";
import smallLogo from "/public/smallLogo.png";
import smallShadowLogo from "/public/smallShadowLogo.png";
import Apple from "@/svg/apple";
import Ellipse from "@/svg/ellipse";
import Google from "@/svg/google";
import Facebook from "@/svg/facebook";
import Link from "next/link";

export default function Board() {
  return (
    <main className="bg-gray-900 w-screen h-screen relative text-white grid p-2.5 overflow-hidden">
      <div
        style={{
          width: "100%",
          height: "30%",
          position: "absolute",
          background:
            "linear-gradient(271.23deg, #43116A 36.61%, #0A1832 106.23%)",
          opacity: "0.63",
          filter: "blur(74px)",
          transform: "rotate(134.23deg)",
        }}
      ></div>
      <div className="flex justify-center gap-2">
        <div className="relative">
          <Image src={smallLogo} alt="Small Logo" />
          <Image
            src={smallShadowLogo}
            alt="Small Logo"
            className="absolute top-0.5 -z-50"
          />
        </div>
        <h6 className="font-medium text-sm">Chatbox</h6>
      </div>
      <h1 className="text-6xl">Connect friends easily & quickly</h1>
      <p className="text-gray-500">
        Our chat app is the perfect way to stay connected with friends and
        family.
      </p>
      <div className="flex justify-center align-center gap-4">
        <div>
          <Ellipse>
            <Facebook />
          </Ellipse>
        </div>
        <div>
          <Ellipse>
            <Google />
          </Ellipse>
        </div>
        <div>
          <Ellipse>
            <Apple />
          </Ellipse>
        </div>
      </div>
      <div className="flex items-center justify-center my-4 w-[90%] m-auto">
        <div className="flex-grow border-t border-gray-500 "></div>
        <span className="mx-4">OR</span>
        <div className="flex-grow border-t border-gray-500"></div>
      </div>
      <div className="w-[90%] h-12 m-auto">
        <button
          type="submit"
          className="w-[100%] h-12 bg-white rounded-3xl  text-gray-900 font-medium text-lg cursor-pointer"
        >
          Sign up with mail
        </button>
      </div>
      <div className="flex justify-center align-center gap-2">
        <p className="text-gray-500">Existing account?</p>
        <Link href="/sign-in" className="cursor-pointer">
          Log in
        </Link>
      </div>
    </main>
  );
}
