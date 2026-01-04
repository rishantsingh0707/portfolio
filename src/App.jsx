import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-black">
      <Header />
      <Home />
      <About />
      <Projects />
      <Education />
      <Contact />
    </div >
  );
}

export default App;
