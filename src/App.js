import { useState } from 'react';
// Components
import { Header } from './components/Header';
// Sections
import { Home } from './sections/Home';
import { About } from './sections/About';
import { MyWork } from './sections/MyWork';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';

// Preloader
export const App = () => {
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
        <Header />
        <Home />
        <section id='About'>
          <About />
        </section>
        <section id='MyWork'>
          <MyWork />
        </section>
        <section id='Contact'>
          <Contact />
        </section>
        <Footer />
      </div>
    )
  );
};