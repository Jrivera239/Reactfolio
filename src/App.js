import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  
  const [currentPage, setCurrentPage] = useState('About')
  
  const selectedPage = () => {
    if (currentPage === 'About') {
      return <About />
    }
    if (currentPage === 'Contact') {
      return <Contact />
    }
    if (currentPage === 'Portfolio') {
      return <Project />
    }
  }
  
  const pageChange = (page) => setCurrentPage(page);
    return (
    <>
    <header>
    <Header currentPage={currentPage} pageChange={pageChange}/>
    </header>
  
    <main>
      {selectedPage()}
    </main>
   
    <footer>
    <Footer />
    </footer>
    </>
    );
  }
  

