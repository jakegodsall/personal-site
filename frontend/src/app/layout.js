import { Inter } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], weights: ["400, 600, 700"] });

export const metadata = {
  title: "Jake Godsall",
  description: "Personal website of Jake Godsall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
