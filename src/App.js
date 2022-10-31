import React, { useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';


export default function App() {
  
  const [currentPage, setCurrentPage] = useState('About')
  
  const selectedPage = () => {

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
  

