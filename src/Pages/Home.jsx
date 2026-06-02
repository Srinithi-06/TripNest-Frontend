import React from "react";

import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About";
import PopularDestinations from "../Components/PopularDestinations";
import Categories from "../Components/Categories";
import Testimonials from "../Components/Testimonials";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <PopularDestinations />
      <Categories />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;