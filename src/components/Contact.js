import React from "react";

const Contact = () => {
  return (
    <div 
      style={{ 
        minHeight: "80vh", 
        padding: "50px 20px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center",
        background: "#E8F5E9", 
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Background floating leaves */}
      <div
        style={{
          position: "absolute",
          top: "-20px",
          left: "-20px",
          width: "150px",
          height: "150px",
          background: "url('https://www.transparenttextures.com/patterns/leaf.png') repeat",
          opacity: 0.05,
          animation: "float 8s ease-in-out infinite",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          width: "100%",
          zIndex: 1,
          textAlign: "center"
        }}
      >
        <h2 style={{ color: "#2E7D32", marginBottom: "25px" }}>📬 Contact Us</h2>
        <p 
          style={{
            fontSize: "1.1rem",
            marginBottom: "15px",
            transition: "color 0.3s, transform 0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={e => { e.target.style.color = "#43A047"; e.target.style.transform = "scale(1.05)" }}
          onMouseLeave={e => { e.target.style.color = "#388E3C"; e.target.style.transform = "scale(1)" }}
        >
          📧 Email: <a href="mailto:support@bhojanshaastra.com" style={{ color: "inherit", textDecoration: "none" }}>support@bhojanshaastra.com</a>
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            transition: "color 0.3s, transform 0.3s",
            cursor: "pointer"
          }}
          onMouseEnter={e => { e.target.style.color = "#43A047"; e.target.style.transform = "scale(1.05)" }}
          onMouseLeave={e => { e.target.style.color = "#388E3C"; e.target.style.transform = "scale(1)" }}
        >
          📞 Phone: +91 12345 67890
        </p>
      </div>

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
