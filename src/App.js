import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import PageNotFound from './pages/PageNotFound';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portfolio" exact element={<Portfolio/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
