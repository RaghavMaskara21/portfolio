import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Experience from './Pages/Experience/Experience';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
