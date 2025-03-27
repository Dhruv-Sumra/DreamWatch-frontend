import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '/src/Components/Navbar/Navbar.jsx';
import Main from '/src/Components/Main/Main.jsx';
import Gender from '/src/Components/gender/Gender.jsx';
import Popular from '/src/Components/Popular-watches/Popular-watches.jsx';
import Recent from '/src/Components/Recently/Recently.jsx';
import About from '/src/pages/About.jsx';
import Contact from '/src/pages/Contact.jsx';
import Home from './pages/Home.jsx';
import Login from '/src/pages/Login.jsx';
import Register from '/src/pages/Register.jsx';
import Men from '/src/pages/Men.jsx';
import Women from '/src/pages/Women.jsx';
import Kids from '/src/pages/Kids.jsx';
import Pop from '/src/pages/Popular.jsx';
import Recentt from '/src/pages/Recent.jsx';
import Brand from '/src/pages/Brand.jsx';
import Process from './pages/Process.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="popular" element={<Popular />} />
        <Route path="gender" element={<Gender />} />
        <Route path="recent" element={<Recent />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
        <Route path="brand" element={<Brand />} />
        <Route path="home/recentt" element={<Recentt />} />
        <Route path="home/popular" element={<Pop />} />
        <Route path="/cart" element={<Process />} />
      </Routes>
    </Router>
  );
}

export default App;
