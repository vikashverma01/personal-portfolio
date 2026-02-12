import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 6vw;
  background: rgba(44, 62, 80, 0.9);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  .logo-content {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 1.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, #00d2ff, #3a47d5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Poppins", sans-serif;
  }

  .logo-start,
  .logo-end {
    color: #aaa;
    font-size: 1.5rem;
  }

  .logo-name {
    color: white;
    font-weight: 600;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 26px;
    height: 18px;
    cursor: pointer;
    z-index: 1100;

    span {
      height: 3px;
      width: 100%;
      background-color: #fff;
      border-radius: 2px;
      transition: all 0.3s ease;
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: 2rem;

    a {
      color: #f1f1f1;
      font-size: 1rem;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 500;
      font-family: "Red Hat Display", sans-serif;
      position: relative;
      transition: color 0.3s ease;
    }

    a:hover {
      color: #2ecc71;
    }

    a.button {
      padding: 0.5rem 1.5rem;
      background-color: #2ecc71;
      color: #fff;
      border-radius: 25px;
      font-weight: bold;
      text-align: center;
      transition: all 0.3s ease;
    }

    a.button:hover {
      filter: brightness(1.2);
      transform: translateY(-2px);
    }
  }

  /* ====== Responsive styles ====== */
  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    nav {
      position: absolute;
      top: 100%;
      right: 0;
      flex-direction: column;
      background: rgba(44, 62, 80, 0.97);
      width: 100%;
      padding: 1rem 2rem;
      align-items: flex-start;
      gap: 1rem;
      transform: translateY(-200%);
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
    }

    nav.active {
      transform: translateY(0);
      opacity: 1;
      pointer-events: auto;
    }
  }
  @media (max-width: 768px) {
    padding: 1rem 4vw;

    nav {
      padding: 1rem;
    }
  }
`;
