import React from "react"
// Sections
import Home from "../components/sections/Home";
import About from "../components/sections/About";
import Music from "../components/sections/Music";
import Shows from "../components/sections/Shows";
import Contact from "../components/sections/Contact";
import Seo from "../components/Seo";


export default function HomePage() {

  return (
    <>
      <Seo title="DITG" />
      <Home />
      <About />
      <Music />
      <Shows />
      <Contact />
    </>
  );
}
