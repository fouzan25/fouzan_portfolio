import React from "react";

interface NavigationProps {
  onLinkClick?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onLinkClick }) => {
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    // Smooth scroll to section
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerHeight = 80; // Account for fixed header
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Close mobile menu if callback provided
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li key={item.href} className="nav-item">
            <a
              href={item.href}
              className="nav-link"
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
