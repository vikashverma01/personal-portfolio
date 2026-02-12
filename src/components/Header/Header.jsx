import { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import Resume from "../../assets/empty.pdf";
import { Container } from "./style";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container className="header-fixed" isOpen={isOpen}>
      {/* Logo */}
      <NavHashLink smooth className="logo" to="/#">
        <div className="logo-content">
          <span className="logo-start">{"<"}</span>
          <span className="logo-name">Vikash Verma</span>
          <span className="logo-end">{"/>"}</span>
        </div>
      </NavHashLink>

      {/* Hamburger Menu - On Right */}
      <div className="hamburger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </div>

      {/* Navigation Menu */}
      <nav className={isOpen ? "active" : ""}>
        <NavHashLink smooth to="/#home" onClick={() => setIsOpen(false)}>
          Home
        </NavHashLink>
        <NavHashLink smooth to="/#about" onClick={() => setIsOpen(false)}>
          About me
        </NavHashLink>
        <NavHashLink smooth to="/#projects" onClick={() => setIsOpen(false)}>
          Project
        </NavHashLink>
        <NavHashLink smooth to="/#contact" onClick={() => setIsOpen(false)}>
          Contact
        </NavHashLink>
        <a
          href={Resume}
          download
          className="button"
          onClick={() => setIsOpen(false)}
        >
          Resume
        </a>
      </nav>
    </Container>
  );
}

export default Header;
