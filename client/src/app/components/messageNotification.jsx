export default function MessageNotification({ children }) {
  return (
    <div className="w-5 h-5 bg-red-700 text-white rounded-full flex justify-center items-center">
      {children}
    </div>
  );
}
