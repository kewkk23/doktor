import About from "@/components/custom/About";
import Contact from "@/components/custom/Contact";
import Film from "@/components/custom/Film";
import Hero from "@/components/custom/Hero";
import Packages from "@/components/custom/Packages";
import Quote from "@/components/custom/Quote";
import React from "react";

const page = () => {
  return (
    <main>
      <Hero />
      <Quote />
      <Film />
      <About />
      <Packages />
      <Contact />
    </main>
  );
};

export default page;
