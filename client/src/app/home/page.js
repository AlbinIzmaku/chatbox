import Search from "@/svg/search";
import Ellipse from "../components/ellipse";
import Rectangle from "../components/rectangle";

export default function Home() {
  const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <main
      className="bg-gray-900 w-screen h-screen text-white"
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
        className="bg-white w-screen  "
        style={{ borderRadius: "40px 40px 0 0" }}
      >
        <Rectangle />
      </section>
    </main>
  );
}
