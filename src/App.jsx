import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutMarco from './pages/About-Marco/AboutMarco';
import Footer from './components/Footer/Footer';
import GetInvolvedCampaign from './pages/Get-Involved-Campaign/GetInvolvedCampaign';
import Home from './pages/Home/Home';
import PlatformPoints from './pages/Platform-Points/PlatformPoints';
import Navbar from './components/Navigation/Navigation';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main className='App d-flex flex-column justify-content-center align-items-center'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-marco' element={<AboutMarco />} />
            <Route path='/platform-points' element={<PlatformPoints />} />
            <Route path='/get-involved' element={<GetInvolvedCampaign />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;