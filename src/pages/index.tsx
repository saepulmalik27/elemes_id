
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import SectionCategory from "@/components/templates/section-category";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex-auto" >
          <Hero/>
          <SectionCategory/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
