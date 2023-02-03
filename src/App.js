import { About } from './About';
import './App.css';
import Blog from './components/Blog';
import Header from './components/Header';
import Hero from './components/Hero';
import { Project } from './components/Project';
import Footer from './Footer';

function App() {
  return (
  <>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Blog/>
    <Footer/>
  </>
  );
}

export default App;
