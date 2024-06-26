export default function Ellipse({ children }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // className="flex justify-center align-items"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <circle cx="24" cy="24" r="23.5" stroke="#A8B0AF" />
      <g transform="translate(12, 12)"> {children}</g>
    </svg>
  );
}
