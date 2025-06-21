import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

function WhatsappWidget() {
  const whatsappNumber = "918595076589"; 
  const callNumber = "+918595076589";    

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=Hi%20Kismat%20Ki%20Property%2C%20I%20am%20interested%20in%20your%20properties`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          padding: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          animation: "pulse 2s infinite",
          color: "#fff",
          fontSize: "24px",
        }}
      >
        <FaWhatsapp />
      </a>

      {/* Call Now Button */}
      <a
        href={`tel:${callNumber}`}
        title="Call us now"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          backgroundColor: "#007bff",
          borderRadius: "50%",
          padding: "14px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "60px",
          height: "60px",
          animation: "pulse 2s infinite",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        <FaPhoneAlt />
      </a>
    </>
  );
}

export default WhatsappWidget;
