import Back from "@/svg/back";

export default function SignUp() {
  return (
    <main className="p-2.5 w-screen h-screen grid">
      <div>
        <Back />
      </div>
      <div>
        <div className="inline-flex flex-col relative">
          <h3 className="text-lg font-semibold z-50 ">Sign Up with Email</h3>
          <div
            style={{
              width: "2.7rem",
              height: "0.3rem",
              backgroundColor: "#10B981",
              position: "absolute",
              bottom: "2px",
              right: 0,
            }}
          ></div>
        </div>
      </div>

      <p className="font-medium text-sm text-gray-500">
        Get chatting with friends and family today by signing up for our chat
        app!
      </p>

      <form className="grid gap-1">
        <label htmlFor="name" className="text-sm text-green-500">
          Your name
        </label>
        <input
          type="text"
          className="p-1 border-b border-green-500 focus:outline-none"
        />
        <label htmlFor="email" className="text-sm text-green-500">
          Your email
        </label>
        <input
          type="email"
          className="p-1 border-b border-green-500 focus:outline-none"
        />
        <label htmlFor="password" className="text-sm text-green-500">
          Password
        </label>
        <input
          type="password"
          className="p-1 border-b border-green-500 focus:outline-none"
        />
        <label htmlFor="cPassword" className="text-sm text-green-500">
          Confirm Password
        </label>
        <input
          type="password"
          className="p-1 border-b border-green-500 focus:outline-none"
        />
      </form>

      <button
        href=""
        className="w-full h-12 bg-gray-200 rounded-3xl font-semibold text-gray-500 self-center"
      >
        Create an account
      </button>
    </main>
  );
}
