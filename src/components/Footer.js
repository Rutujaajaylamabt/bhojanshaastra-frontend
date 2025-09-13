import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#2E7D32", // Dark green
        color: "#E8F5E9",           // Soft beige
        padding: "50px 20px",
        marginTop: "50px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Brand / Copyright */}
      <p style={{ marginBottom: "25px", fontSize: "1rem", fontWeight: "500" }}>
        &copy; 2025 <strong>BhojanShaastra</strong>. All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div style={{ marginBottom: "20px" }}>
        <SocialIcon icon={<FaFacebookF />} link="#" />
        <SocialIcon icon={<FaInstagram />} link="#" />
        <SocialIcon icon={<FaTwitter />} link="#" />
        <SocialIcon icon={<FaLinkedinIn />} link="#" />
      </div>

      {/* Footer Note */}
      <p style={{ fontSize: "0.85rem", color: "#C8E6C9", fontWeight: "400" }}>
        Follow us for updates on Ayurveda & healthy meals
      </p>

      {/* Decorative Wave at Footer Bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "60px",
          background: "url('https://www.transparenttextures.com/patterns/wave.png') repeat-x",
          opacity: 0.1,
          pointerEvents: "none",
        }}
      ></div>
    </footer>
  );
};

// Social icon component with hover animation
const SocialIcon = ({ icon, link }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        margin: "0 12px",
        color: hover ? "#A5D6A7" : "#E8F5E9", // Light green hover
        fontSize: "1.5rem",
        transition: "transform 0.3s, color 0.3s, text-shadow 0.3s",
        display: "inline-block",
        textShadow: hover ? "0 0 8px #A5D6A7" : "none",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {icon}
    </a>
  );
};

export default Footer;
