import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Poppins } from "@next/font/google";

interface PageProps {
  children: any;
}

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Layout({ children }: PageProps) {
  return (
    <div className={poppins.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
