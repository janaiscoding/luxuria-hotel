import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";

import AuthProvider from "./context/AuthProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata: Metadata = {
  title: "Luxuria Hotels",
  description: "Book your luxurious accomodation room",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <AuthProvider>
        <body className={`${lora.variable} ${montserrat.variable} font-lora`}>
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
