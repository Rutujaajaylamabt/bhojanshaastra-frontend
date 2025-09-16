import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Brand / Copyright */}
      <p className="footer-text">
        &copy; 2025 <strong>BhojanShaastra</strong>. All Rights Reserved.
      </p>

      {/* Social Media Icons */}
      <div className="social-icons">
        <SocialIcon icon={<FaFacebookF />} link="#" />
        <SocialIcon icon={<FaInstagram />} link="#" />
        <SocialIcon icon={<FaTwitter />} link="#" />
        <SocialIcon icon={<FaLinkedinIn />} link="#" />
      </div>

      {/* Footer Note */}
      <p className="footer-note">
        Follow us for updates on Ayurveda & healthy meals
      </p>

      {/* Decorative Animated Wave */}
      <div className="footer-wave">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1B5E20"
            fillOpacity="1"
            d="M0,256L60,245.3C120,235,240,213,360,197.3C480,181,600,171,720,176C840,181,960,203,1080,213.3C1200,224,1320,224,1380,224L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <style>
        {`
          .footer {
            background: linear-gradient(135deg, #2E7D32, #1B5E20);
            color: #E8F5E9;
            padding: 50px 20px 80px;
            text-align: center;
            position: relative;
            overflow: hidden;
          }

          .footer-text {
            margin-bottom: 20px;
            font-size: 1rem;
            font-weight: 500;
          }

          .social-icons {
            margin-bottom: 20px;
          }

          .footer-note {
            font-size: 0.85rem;
            color: #C8E6C9;
            font-weight: 400;
          }

          /* Social icon styling */
          .social-icon {
            margin: 0 10px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            color: #E8F5E9;
            transition: all 0.3s ease;
          }

          .social-icon:hover {
            background: #A5D6A7;
            color: #1B5E20;
            transform: translateY(-5px) scale(1.1);
            box-shadow: 0 8px 20px rgba(165, 214, 167, 0.4);
          }

          /* Wave styling */
          .footer-wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 70px;
            overflow: hidden;
            line-height: 0;
          }

          .footer-wave svg {
            display: block;
            width: 100%;
            height: 100%;
          }

          /* Responsive */
          @media (max-width: 576px) {
            .social-icon {
              width: 40px;
              height: 40px;
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </footer>
  );
};

// Social icon component
const SocialIcon = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="social-icon">
      {icon}
    </a>
  );
};

export default Footer;
