import styled from "styled-components";

export const Container = styled.section`
  padding: 6rem 5%;

  header {
    text-align: center;
    margin-bottom: 3.5rem;

    h2 {
      font-size: clamp(2.2rem, 4vw, 3.5rem);
      margin-bottom: 0.6rem;
    }

    p {
      color: var(--green);
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.6;
    }
  }

  .contacts {
    display: flex;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap; /* prevents overflow */
  }

  .contacts div {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    background-color: var(--green);
    border-radius: 1.2rem;
    padding: 1.4rem 2rem;

    min-width: 260px;
    max-width: 340px;
    width: 100%;

    transition:
      transform 0.2s ease,
      background-color 0.25s ease;

    img {
      width: 2.8rem;
      height: 2.8rem;
      object-fit: contain;
    }

    a {
      color: var(--black);
      font-weight: 500;
      text-decoration: none;
      word-break: break-word;
    }

    &:hover {
      background-color: var(--pink);
      transform: translateY(-3px);

      a {
        color: white;
      }
    }
  }

  /* Mobile Layout */
  @media (max-width: 768px) {
    padding: 4rem 6%;

    .contacts {
      flex-direction: column;
      align-items: center;
    }

    .contacts div {
      max-width: 420px;
    }
  }
`;
