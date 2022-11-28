import Head from "next/head";
import Image from "next/image";
import About from "../components/about";
import OurClient from "../components/Clients";
import Feature from "../components/feature";
import Jumbotron from "../components/Jumbotron";
import Testimonial from "../components/Testimonial";

export default function Home() {
  return (
    <div>
      <Jumbotron />
      <About />
      <Feature />
      <Testimonial />
      <OurClient />
    </div>
  );
}
