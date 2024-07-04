export default function Ellipse({ children }) {
  return (
    <div className="w-11 h-11 flex justify-center items-center border border-yellow-500 rounded-full flex-shrink-0">
      {children}
    </div>
  );
}
