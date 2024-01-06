import React from 'react';
import { Link } from "react-router-dom";
import '../styles/About.css';
import Mando from '../assets/mando.PNG';

function BookNote() {
  return (
    <div className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${Mando})` }}></div>
      <div className='aboutBottom'>
        <h2>Notes I took from books I've read in the last few years.</h2>
        
        <Link to="/writings/booknotes/Set for Li">Set for Life: Dominate Life, Money, and The American Dream</Link>
        <br></br>
<Link to="/writings/booknotes/Start it U">Start it Up: The Complete Teen Business Guide To Turn Your Passions Into Pay</Link>
        <br></br>
<Link to="/writings/booknotes/Better Tha">Better Than Before: Mastering the Habits of Our Everyday Lives</Link>        
        <br></br>
<Link to="/writings/booknotes/The Theory">The Theory of Everything: The Origin and Fate of The Universe</Link>
        <br></br>
<Link to="/writings/booknotes/Atomic Hab">Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones</Link>
        <br></br>
<Link to="/writings/booknotes/On the Gen">On the Genealogy of Morals</Link>
        <br></br>
<Link to="/writings/booknotes/Our Final ">Our Final Invention: Artificial Intelligence and the End of the Human Era</Link>
        <br></br>
<Link to="/writings/booknotes/Infinity, ">Infinity, Causation, & Paradox</Link>
        <br></br>
<Link to="/writings/booknotes/Free Will">Free Will</Link>
        <br></br>
<Link to="/writings/booknotes/Infinite P">Infinite Powers: How CALCULUS Reveals the Secrets of the Universe</Link>     
        <br></br>
<Link to="/writings/booknotes/12 Rules f">12 Rules for Life: An Antidote to Chaos</Link>
        <br></br>
<Link to="/writings/booknotes/Fifty Inve">Fifty Inventions That Shaped The Modern Economy</Link>
        <br></br>
<Link to="/writings/booknotes/The Fault ">The Fault In Our Stars</Link>
        <br></br>
<Link to="/writings/booknotes/The Laws o">The Laws of Human Nature</Link>
        <br></br>
<Link to="/writings/booknotes/The Evolut">The Evolution of Desire: Strategies of Human Mating</Link>
        <br></br>
<Link to="/writings/booknotes/Think and ">Think and Grow Rich</Link>
        <br></br>
<Link to="/writings/booknotes/Rich Dad P">Rich Dad Poor Dad</Link>
        <br></br>
<Link to="/writings/booknotes/Limitless ">Limitless: Upgrade Your Brain, Learn Anything Faster, And Unlock Your Exceptional Life</Link>
        <br></br>
<Link to="/writings/booknotes/Skeptics’ ">Skeptics’ Guide to the Universe: How to Know What’s Really Real in a World Increasingly Full of Fake</Link>
        <br></br>
<Link to="/writings/booknotes/How to Not">How to Not Die Alone: The Surprising Science That Will Help You Find Love</Link>
        <br></br>
<Link to="/writings/booknotes/The Subtle">The Subtle Art of Not Giving a Fuck: A Counterintuitive Approach to Living a Good Life</Link>
        <br></br>
<Link to="/writings/booknotes/Change Is ">Change Is The Only Constant: The Wisdom of Calculus in a Madcap World</Link> 
        <br></br>
<Link to="/writings/booknotes/Fifth Busi">Fifth Business</Link>
        <br></br>
<Link to="/writings/booknotes/Looking fo">Looking for Alaska</Link>
        <br></br>
<Link to="/writings/booknotes/The Math O">The Math Olympian</Link>
        <br></br>
<Link to="/writings/booknotes/Algorithms">Algorithms to Live By</Link>
        <br></br>
<Link to="/writings/booknotes/Calculus">Calculus</Link>
        <br></br>
<Link to="/writings/booknotes/1984">1984</Link>
        <br></br>
<Link to="/writings/booknotes/Deep Work ">Deep Work: Rules for Focused Success in a Distracted World</Link>
        <br></br>
<Link to="/writings/booknotes/How to Rea">How to Read and Do Proofs: An Introduction to Mathematical Thought Processes</Link>
        <br></br>
<Link to="/writings/booknotes/The Founde">The Founders: The Story of PayPal and the Entrepreneurs who Shaped Silicon Valley</Link>
        <br></br>
<Link to="/writings/booknotes/Meditation">Meditations</Link>
        <br></br>
<Link to="/writings/booknotes/Sapiens A ">Sapiens: A Brief History of Humankind</Link>
        <br></br></div>
    </div>
  )
}

export default BookNote
