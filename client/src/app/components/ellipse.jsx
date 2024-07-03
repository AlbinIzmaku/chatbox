export default function Ellipse({ children }) {
  return (
    <div className="w-11 h-11 flex justify-center items-center border border-white rounded-full flex-shrink-0">
      {children}
    </div>
  );
}
