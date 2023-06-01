import FloatingBar from "@/components/molecules/floating-bar";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import SectionCategory from "@/components/templates/section-category";
import SectionContact from "@/components/templates/section-contact";
import SectionTrending from "@/components/templates/section-trending";
import React from "react";
import { FLOATINGBARLIST } from "@/utils/constant";
export default function Home() {
  return (
    <React.Fragment>
      <title>Elemes</title>
      <main className="flex-auto w-full max-w-[1440px] m-auto">
        <Header />
        <Hero />
        <SectionCategory />
        <SectionTrending />
        <SectionContact />
        <FloatingBar lists={FLOATINGBARLIST} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
