import React from "react";
// Import Container
import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
// Import Components
import { Navbar } from "./components";
// Genral Styles
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
