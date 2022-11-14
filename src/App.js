import { useState } from 'react';
// Components
import Home from './components/Home';
import About from './components/About';
import MyWork from './components/MyWork';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Preloader
const App = () => {
  const [loading, setLoading] = useState(true);
  const zoomer = document.getElementById('zoomer');
  if (zoomer) {
    setTimeout(() => {
      zoomer.style.display = 'none';
      setLoading(false);
    }, 4000);
  }
  // JSX
  return (
    !loading && (
      <div>
        <Home />
        <section id='About'>
          <About />
        </section>
        <section id='Projects'>
          <MyWork />
        </section>
        <section id='Contact'>
          <Contact name='Send Message' />
        </section>
        <Footer />
      </div>
    )
  );
};

export default App;
