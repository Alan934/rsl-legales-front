import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { Providers } from "./redux/provider";

export const metadata: Metadata = {
  title: "Red de Servicios Legales",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-ar">
      <body className="bg-[#E6E4E1]">
        <Providers>
          <Navbar />
          {children}
          <Footer id={1} />
        </Providers>
      </body>
    </html>
  );
}
