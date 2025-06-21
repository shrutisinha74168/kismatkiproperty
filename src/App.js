import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import HomePage from './HomePage';
import Footer from './landing_page/Footer';
import EventsPage from "./pages/EventsPage";
import LeadCaptureModal from './sections/LeadCaptureModal';
import WhatsappWidget from './Components/WhatsappWidget';

function App() {
  return (
    <>
      <LeadCaptureModal/>
      <Navbar />
      <WhatsappWidget/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
