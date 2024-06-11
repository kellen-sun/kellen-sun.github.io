import './App.css';
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
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
import SchoolNotes from './pages/SchoolNotes';
import ClassNotes from './components/ClassNotes';
import BookNotes from './components/BookNotes';
import BookNote from './pages/BookNote'

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0,
      behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <div><Navbar /></div>
        <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/portfolio" exact element={<Portfolio/>} />
          <Route path="/portfolio/:id" exact element={ <ProjectPage/> } />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/resume" exact element={<Resume/>} />
          <Route path="/writings" exact element={<Writings/>} />
          <Route path="/writings/schoolnotes" exact element={<SchoolNotes/>}/>
          <Route path="/writings/schoolnotes/:id" exact element={ <ClassNotes/> } />
          <Route path="/writings/booknotes" exact element={<BookNote/>}/>
          <Route path="/writings/booknotes/:id" exact element={ <BookNotes/> } />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <div><Footer /></div>
      </Router>
    </div>
  );
}

export default App;
