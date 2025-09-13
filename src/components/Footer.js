import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: "#4CAF50",  // Vibrant green matching your buttons and highlights
      color: "#FFF8E1",            // Soft beige text for contrast
      padding: "40px 20px",
      marginTop: "50px"
    }}>
      <div className="container text-center">

        {/* Brand / Copyright */}
        <p style={{ marginBottom: "15px", fontSize: "1rem", fontWeight: "500" }}>
          &copy; 2025 <strong>BhojanShaastra</strong>. All Rights Reserved.
        </p>

        {/* Social Media Icons */}
        <div style={{ marginBottom: "15px" }}>
  <button onClick={() => {}} style={iconStyle}><FaFacebookF /></button>
  <button onClick={() => {}} style={iconStyle}><FaInstagram /></button>
  <button onClick={() => {}} style={iconStyle}><FaTwitter /></button>
  <button onClick={() => {}} style={iconStyle}><FaLinkedinIn /></button>
</div>


        {/* Footer Note */}
        <p style={{ fontSize: "0.85rem", color: "#C8E6C9", fontWeight: "400" }}>
          Follow us for updates on Ayurveda & healthy meals
        </p>
      </div>
    </footer>
  );
};

// Social icon styling with hover effect
const iconStyle = {
  margin: "0 12px",
  color: "#FFF8E1",
  fontSize: "1.3rem",
  transition: "transform 0.3s, color 0.3s",
  textDecoration: "none",
  cursor: "pointer"
};

export default Footer;
