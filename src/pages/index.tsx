
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import SectionCategory from "@/components/templates/section-category";
import SectionTrending from "@/components/templates/section-trending";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex-auto" >
          <Hero/>
          <SectionCategory/>
          <SectionTrending/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
