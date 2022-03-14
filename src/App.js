import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Stickymain from './components/Stickymain';
import Experience from './components/Experience';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Experience />
      <Stickymain />
      <Project />
      <Contact/>
      <Footer />

    </div>
  );
}

export default App;
