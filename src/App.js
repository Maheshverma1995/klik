import './Assect/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './component/Header';
import HeaderNavbar from './component/HeaderNavbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Career from './component/Career';
import Blog from './component/Blog';
import Contact from './component/Contact';
import Erroe from './component/Erroe';
import Footer from './component/Footer';
import Services from './component/Services';





function App() {
  return (
    <BrowserRouter>
      <Header />
      <HeaderNavbar />
      <Routes>
        <Route path="" element={<Home />}></Route>

        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='career' element={<Career />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<Erroe />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};

export default App;
