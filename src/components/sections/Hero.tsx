import React, { useState, useEffect } from "react";
import { FaDownload, FaEnvelope, FaChevronDown } from "react-icons/fa";
import Button from "../ui/Button";
import "./hero.css";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Full Stack Developer",
    "Software Engineer",
    "React Specialist",
    "Problem Solver",
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id={id} className="hero section section--large">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="hero-name">John Doe</span>
            </h1>
            <div className="hero-subtitle">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              I create exceptional digital experiences through clean code and
              innovative solutions. Passionate about building scalable web
              applications that make a difference.
            </p>

            <div className="hero-actions">
              <Button onClick={scrollToContact} variant="primary">
                <FaEnvelope />
                Get In Touch
              </Button>
              <Button variant="secondary">
                <FaDownload />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="hero-image">
            <div className="profile-container">
              <img
                src="/profile-photo.jpg"
                alt="John Doe - Full Stack Developer"
                className="profile-photo"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/300x300/2563eb/ffffff?text=JD";
                }}
              />
              <div className="profile-decoration"></div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator" onClick={scrollToAbout}>
          <span className="scroll-text">Scroll to explore</span>
          <FaChevronDown className="scroll-arrow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
