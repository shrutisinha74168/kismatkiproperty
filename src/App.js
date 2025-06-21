import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar";
import HomePage from "./HomePage";
import Footer from "./landing_page/Footer";
import EventsPage from "./pages/EventsPage";
import LeadCaptureModal from "./sections/LeadCaptureModal";
import WhatsappWidget from "./Components/WhatsappWidget";
import Contact from './pages/Contact'; 

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem("leadUser");
    if (!alreadySubmitted) {
      setShowModal(false); // Wait for user to click
    }
  }, []);

  const triggerLeadForm = () => {
    const alreadySubmitted = localStorage.getItem("leadUser");
    if (!alreadySubmitted) {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <LeadCaptureModal onClose={() => setShowModal(false)} />}
      <Navbar triggerLeadForm={triggerLeadForm} />
      <WhatsappWidget />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
