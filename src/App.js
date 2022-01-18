import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      {/* <p>’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p> */}
      {/* 
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p>
      <p>this is me</p> */}
    </div>
  );
}

export default App;
