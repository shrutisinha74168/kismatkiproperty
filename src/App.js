import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './landing_page/Navbar';
import HomePage from './HomePage';
import Footer from './landing_page/Footer';
import PostPropertyPage from './pages/PostPropertyPage';
import EventsPage from "./pages/EventsPage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post-property" element={<PostPropertyPage />} />
        <Route path="/events" element={<EventsPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
