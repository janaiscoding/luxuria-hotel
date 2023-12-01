import { Montserrat, Lora } from "next/font/google";
import AuthProvider from "./context/AuthProvider";
import type { Metadata } from "next";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luxuria Hotel",
  description:
    "Book your luxurious accomodation room on Luxuria Hotel website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lora.variable} ${montserrat.variable} font-lora`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
