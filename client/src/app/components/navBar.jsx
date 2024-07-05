import Calls from "@/svg/calls";
import Message from "@/svg/message";
import Settings from "@/svg/settings";
import User from "@/svg/user";

export default function NavBar() {
  return (
    <footer className="bg-white text-gray-500 w-screen h-20 px-4 flex justify-between items-center absolute bottom-0">
      <div className="flex flex-col items-center">
        <Message />
        <h6>Message</h6>
      </div>
      <div className="flex flex-col items-center">
        <Calls />
        <h6>Calls</h6>
      </div>
      <div className="flex flex-col items-center">
        <User />
        <h6>Contacts</h6>
      </div>
      <div className="flex flex-col items-center">
        <Settings />
        <h6>Settings</h6>
      </div>
    </footer>
  );
}
