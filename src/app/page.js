import React from "react";

import Advertize from "../components/Advertize";
import Banner from "../components/Banner";
import Fleet from "../components/Fleet";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import News from "../components/News";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Fleet />
      <Advertize />
      <News />
      <Footer />
    </>
  );
}
