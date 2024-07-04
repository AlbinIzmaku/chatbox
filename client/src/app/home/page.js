import Search from "@/svg/search";
import Ellipse from "../components/ellipse";
import Rectangle from "../components/rectangle";
import Online from "../components/online";
import MessageNotification from "../components/messageNotification";

export default function Home() {
  const users = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
  ];
  return (
    <main
      className="bg-gray-900 w-screen h-screen text-white pt-2 overflow-hidden"
      style={{
        display: "grid",
        gridTemplateRows: "44px 82px auto",
        gap: "30px",
      }}
    >
      <div className="flex justify-between items-center">
        <Ellipse>
          <Search />
        </Ellipse>
        <h3 className="text-xl">Home</h3>
        <Ellipse>A</Ellipse>
      </div>
      <div className="overflow-x-scroll flex gap-1 h-12">
        {users.map((user) => {
          return <Ellipse key={user.id}>A</Ellipse>;
        })}
      </div>
      <section
        className="bg-white w-screen relative overflow-y-auto"
        style={{ borderRadius: "40px 40px 0 0" }}
      >
        <Rectangle />
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="grid justify-between items-center mx-4 my-6"
              style={{gridTemplateColumns: '15% 50% 30%'}}
            >
              <div className="relative inline-flex text-black">
                <Ellipse>A</Ellipse>
                <Online />
              </div>
              <div>
                <h3 className="text-xl text-gray-900">Albin Izmaku</h3>
                <p className="text-xs text-gray-600">How are you today?</p>
              </div>
              <div className="flex flex-col gap-1 items-center">
                <p className="text-xs text-gray-600">2 min ago</p>
                <MessageNotification>
                  <span className="text-xs flex justify-center items-center pb-0.5">
                    3
                  </span>
                </MessageNotification>
              </div>
            </div>
          );
        })}
        {/* <div className="border border-green-800 flex justify-between items-center mx-4">
          <div className="border relative inline-flex">
            <Ellipse>A</Ellipse>
            <Online />
          </div>
          <div>
            <h3 className="text-xl text-gray-900">Albin Izmaku</h3>
            <p className="text-xs text-gray-600">How are you today?</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xs text-gray-600">2 min ago</p>
            <MessageNotification>
              <span className="text-xs flex justify-center items-center pb-0.5">
                3
              </span>
            </MessageNotification>
          </div>
        </div> */}
      </section>
    </main>
  );
}
