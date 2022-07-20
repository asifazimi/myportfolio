import React from "react";
// Import Container
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
// Import Components
import { Navbar } from "./components";
// General Styles
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
