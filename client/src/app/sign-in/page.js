import Back from "@/svg/back";

export default function SignIn() {
  return (
    <main>
      <div>
        <Back />
      </div>
      <div className="border inline-flex flex-col relative">
        <h3 className="text-lg font-semibold z-50">Log in to Chatbox</h3>
        <div
          style={{
            width: "3rem",
            height: "0.3rem",
            backgroundColor: "#58C4B6",
            position: "absolute",
            bottom: "2px",
          }}
        ></div>
      </div>
      <p>
        Welcome back! Sign in using your social account or email to continue us
      </p>
    </main>
  );
}
