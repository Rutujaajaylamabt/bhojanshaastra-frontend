import React from "react";

const Contact = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative floating leaf pattern */}
      <div
        style={{
          position: "absolute",
          top: "-40px",
          left: "-40px",
          width: "200px",
          height: "200px",
          background: "url('https://www.transparenttextures.com/patterns/leaf.png') repeat",
          opacity: 0.06,
          animation: "float 10s ease-in-out infinite",
          zIndex: 0,
        }}
      ></div>

      {/* Contact Card */}
      <div
        style={{
          background: "#fff",
          padding: "50px 40px",
          borderRadius: "20px",
          boxShadow: "0 15px 40px rgba(0,0,0,0.12)",
          maxWidth: "550px",
          width: "100%",
          zIndex: 1,
          textAlign: "center",
          animation: "fadeIn 1s ease-out",
        }}
      >
        <h2
          style={{
            color: "#2E7D32",
            marginBottom: "25px",
            fontWeight: "700",
            fontSize: "2rem",
          }}
        >
          📬 Contact Us
        </h2>

        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "20px",
            color: "#388E3C",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#1B5E20";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#388E3C";
            e.target.style.transform = "scale(1)";
          }}
        >
          📧 Email:{" "}
          <a
            href="mailto:support@bhojanshaastra.com"
            style={{
              color: "inherit",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            support@bhojanshaastra.com
          </a>
        </p>

        <p
          style={{
            fontSize: "1.1rem",
            color: "#388E3C",
            transition: "all 0.3s ease",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = "#1B5E20";
            e.target.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#388E3C";
            e.target.style.transform = "scale(1)";
          }}
        >
          📞 Phone: +91 12345 67890
        </p>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
