import './App.css';
import Navbar from "./components/Navbar";
import ContactPage from './components/ContactPage.jsx';
import Footer from './components/Footer.jsx';
// import ErrorPage404 from './components/errors/ErrorPage404';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Navbar />
          <ContactPage />
          <Footer />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactPage />}>
          <Route index element={<ContactPage />} />
          <Route path="/components/Navbar" element={<Navbar />} />
          <Route path="*" element={<ErrorPage404 />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App