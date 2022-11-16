import "./App.css";
import React from 'react';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import Test2 from './components/Test2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

const App = ()=>{
  return (
    <Router>
      <div>
        {/* <h1>Contact Us.</h1> */}
        {/* <Nav /> */}
        <Routes>
          <Route path='/' element={<ContactPage />} />
          <Route path='/ContactPage' element={<ContactPage />} />
          {/* <Route path='/Footer' element={<Footer />} /> */}
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
