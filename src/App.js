import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Blogs from './components/Blogs';
import Stickymain from './components/Stickymain';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />
      <About />
      <Experience />
      {/* <Blogs /> */}
      <div className="tnt">
        <div className="social__box">
          <i class="fa-solid fa-user"></i>
        </div>
        <Stickymain />
      </div>


    </div>
  );
}

export default App;
