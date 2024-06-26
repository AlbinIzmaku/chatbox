import { Inter, Lato } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

const lato = Lato({
  subsets: ["latin"],
  weight: ['400', '700'],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Chatbox",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
