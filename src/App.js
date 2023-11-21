import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';
import ProjectPage from './components/ProjectPage';
import Resume from './pages/Resume';
import Writings from './pages/Writings';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portfolio" exact element={<Portfolio/>} />
          <Route path="/portfolio/:id" exact element={ <ProjectPage/> } />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/resume" exact element={<Resume/>} />
          <Route path="/writings" exact element={<Writings/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
