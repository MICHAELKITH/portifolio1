// eslint-disable-next-line
import Navbar from './components/Navbar/Navbar';
// eslint-disable-next-line
import Intro from './components/Intro/Intro';
// eslint-disable-next-line
import Services from './components/Services/Services';
// eslint-disable-next-line
import './App.css';
// eslint-disable-next-line
import Experience from './components/Experience/Experience';
// eslint-disable-next-line
import Works from './components/Works/Works';
// eslint-disable-next-line
import Portfolio from './components/Portfolio/Portfolio';
// eslint-disable-next-line
import Testimonial from './components/Testimonials/Testimonial';
// eslint-disable-next-line
import Contact from './components/Contact/Contact';
// eslint-disable-next-line
import Footer from './components/Footer/Footer';
// eslint-disable-next-line
import { useContext } from 'react';
// eslint-disable-next-line
import { themeContext } from './Context';

function App() {
  const theme = useContext(themeContext);
  const { darkMode } = theme.state;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
