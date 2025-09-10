import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Navigation from "./Navigation";
import "./header.css";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="#home" onClick={closeMobileMenu}>
              <span className="logo-text">Portfolio</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <Navigation onLinkClick={closeMobileMenu} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Mobile Navigation */}
          <div
            className={`mobile-nav ${
              isMobileMenuOpen ? "mobile-nav-open" : ""
            }`}
          >
            <Navigation onLinkClick={closeMobileMenu} />
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu} />
      )}
    </header>
  );
};

export default Header;
