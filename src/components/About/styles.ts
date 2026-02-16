import styled from "styled-components";

// import styled from "styled-components";

export const Container = styled.section`
  padding: 6rem 5%;
  background-color: #f5f5f5;
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;

  .about-image {
    flex: 1;
    min-width: 260px;
    display: flex;
    justify-content: center;
  }

  .pic {
    width: 280px;
    max-width: 100%;
    border-radius: 50%;
    border: 5px solid var(--green);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);

    margin: clamp(1rem, 2vw, 2rem); /* ✅ breathing space around image */
  }

  .about-text {
    flex: 1.3;
    max-width: 620px;
  }

  .about-me {
    font-size: clamp(2rem, 4vw, 2.6rem);
    color: var(--green);
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
    color: #444;
  }

  .education {
    margin: 1.4rem 0;

    h3 {
      font-size: 1.1rem;
      color: #007acc;
      margin-bottom: 0.3rem;
    }

    p {
      font-size: 0.95rem;
      color: #555;
    }
  }

  h3 {
    font-size: 1.15rem;
    margin: 1.6rem 0 0.8rem;
    color: #007acc;
  }

  .hard-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
  }

  .hability {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: white;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    img {
      width: 26px;
      height: 26px;
      object-fit: contain;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12);
    }
  }

  /* ---------- Tablet ---------- */

  @media (max-width: 900px) {
    gap: 3rem;

    .pic {
      width: 230px;
      margin: 1.2rem; /* slightly tighter */
    }
  }

  /* ---------- Mobile ---------- */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: auto;
    padding: 4rem 6%;

    .about-text {
      max-width: 100%;
    }

    .hard-skills {
      justify-content: center;
    }

    .pic {
      margin: 1rem; /* ✅ prevents oversized spacing */
    }

    p {
      font-size: 0.95rem;
    }
  }
`;

