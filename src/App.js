import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Home />
      <section id="About">
        <About />
      </section>
      <section id="Projects">
        <MyWork />
      </section>
      <section id="Contact">
        <Contact name="Send Message" />
      </section>
      <Footer />
    </div>
  );
};

export default App;
