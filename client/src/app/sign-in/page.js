import Back from "@/svg/back";
import Ellipse from "@/svg/ellipse";
import Facebook from "@/svg/facebook";
import Google from "@/svg/google";
import BlackApple from "@/svg/blackApple";
import Link from "next/link";

export default function SignIn() {
  return (
    <main className="p-2.5 w-screen h-screen grid grid-rows-[75%,25%] border">
      <section className="border ">
        <div>
          <Back />
        </div>
        <div className="inline-flex flex-col relative">
          <h3 className="text-lg font-semibold z-50">Log in to Chatbox</h3>
          <div
            style={{
              width: "3rem",
              height: "0.3rem",
              backgroundColor: "#10B981",
              position: "absolute",
              bottom: "2px",
            }}
          ></div>
        </div>
        <p className="font-medium text-sm text-gray-500">
          Welcome back! Sign in using your social account or email to continue
          us
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
              <BlackApple />
            </Ellipse>
          </div>
        </div>
        <div className="flex items-center justify-center my-4 w-[90%] m-auto">
          <div className="flex-grow border-t border-gray-500 "></div>
          <span className="mx-4">OR</span>
          <div className="flex-grow border-t border-gray-500"></div>
        </div>

        <form className="grid border gap-2">
          <label htmlFor="email" className="text-sm text-green-500">
            Your email
          </label>
          <input
            type="text"
            className="p-1 border-b border-green-500 focus:outline-none"
          />
          <label htmlFor="password" className="text-sm text-green-500">
            Password
          </label>
          <input
            type="password"
            className="p-1 border-b border-green-500 focus:outline-none"
          />
        </form>
      </section>

      <div className="border " style={{ height: "100px" }}>
        <button
          href=""
          className="w-full h-12 bg-gray-200 rounded-3xl font-semibold text-gray-500"
        >
          Log in
        </button>
        <p className="text-sm text-green-500">Forgot password?</p>
      </div>
    </main>
  );
}
