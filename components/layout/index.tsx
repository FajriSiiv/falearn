import React from "react";
import Footer from "./footer";
import Header from "./header";

interface PageProps {
  children: any;
}

export default function Layout({ children }: PageProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
