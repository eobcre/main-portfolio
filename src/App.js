import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Home />
      <section id="About">
        <About title="Hi, I'm Emmy." />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Contact">
        <Contact name="Send Message" title="Contact" />
      </section>
    </div>
  );
};

export default App;
