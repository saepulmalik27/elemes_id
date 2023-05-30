import Section from "@/components/atoms/section";
import Category from "@/components/templates/category";
import Footer from "@/components/templates/footer";
import Header from "@/components/templates/header";
import Hero from "@/components/templates/hero";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main className="flex-auto" >
          <Hero/>
          <Category/>
      </main>
      <Footer/>
    </React.Fragment>
  );
}
