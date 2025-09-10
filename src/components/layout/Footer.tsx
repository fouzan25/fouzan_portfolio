import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import "./footer-new.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/username", label: "GitHub" },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/username",
      label: "LinkedIn",
    },
    { icon: FaTwitter, href: "https://twitter.com/username", label: "Twitter" },
    { icon: FaEnvelope, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer className="footer section section--small">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Let's Connect</h3>
            <p className="footer-description">
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className="social-links">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.label}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <nav className="footer-nav">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#skills" className="footer-link">
                Skills
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#experience" className="footer-link">
                Experience
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Portfolio. Made with{" "}
            <FaHeart className="heart-icon" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
