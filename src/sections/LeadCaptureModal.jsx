import React, { useState } from "react";

const LeadCaptureModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "" && mobile.trim().length === 10) {
      localStorage.setItem("leadUser", JSON.stringify({ name, mobile }));
      setSubmitted(true);

      // Auto-close after 3 seconds
      setTimeout(() => {
        onClose();
      }, 3000);
    } else {
      alert("Please enter a valid name and 10-digit mobile number.");
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {/* ❌ Close Button */}
        <button onClick={onClose} style={styles.closeButton}>
          ×
        </button>

        {!submitted ? (
          <>
            <h3 style={styles.heading}>Welcome! 👋 To Kismat Ki Property</h3>
            <p style={styles.subtext}>Please enter your details to continue</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={styles.input}
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Continue
              </button>
            </form>
          </>
        ) : (
          <p
            style={{
              ...styles.subtext,
              fontWeight: "bold",
              color: "green",
              fontSize: "16px",
            }}
          >
            Thank you! Our team will contact you shortly.
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modal: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
    width: "90%",
    maxWidth: "400px",
    textAlign: "center",
    position: "relative",
  },
  heading: {
    marginBottom: "10px",
    fontSize: "20px",
    fontWeight: "bold",
  },
  subtext: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "22px",
    border: "none",
    background: "none",
    cursor: "pointer",
    color: "#999",
  },
};

export default LeadCaptureModal;
