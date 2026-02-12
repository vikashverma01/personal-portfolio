import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  //   padding: 1px 20px;
  padding: 10% 5%;
  padding-top: 0;
  background-color: #f5f5f5;
  // gap: 40px;
  gap: 4rem;

  .about-image {
    flex: 1;
    min-width: 250px;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 3%;
  }

  .about-image .pic {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    border: 4px solid var(--green);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .about-text {
    flex: 2;
    min-width: 300px;
    max-width: 800px;
  }

  .about-text h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: var(--green);
  }

  .about-text p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #444;
    margin-bottom: 20px;
  }

  .about-text .education {
    margin-bottom: 20px;
  }

  .about-text .education h3 {
    font-size: 1.5rem;
    color: #007acc;
    margin-bottom: 8px;
  }

  .about-text .education p {
    color: #555;
    font-size: 1rem;
  }

  .about-text h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #007acc;
  }

  .hard-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .hability {
    width: 60px;
    height: 60px;
    border-radius: 12px;
    background-color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease-in-out;
  }

  .hability img {
    max-width: 36px;
    max-height: 36px;
  }

  .hability:hover {
    transform: scale(1.1);
  }

  //   //   margin-top: 12rem;
  //   display: flex;
  //   align-items: center;
  //   flex-wrap: wrap;
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  //   gap: 2rem;

  //   .hard-skills {
  //     margin-top: 1.6rem;
  //     display: flex;
  //     align-items: center;
  //     flex-wrap: wrap;
  //     gap: 1.8rem;
  //   }
  //   .hability {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;

  //     img {
  //       width: 3.4rem;
  //     }
  //   }

  //   h2 {
  //     display: inline-block;
  //     margin-bottom: 2rem;
  //     // border-bottom: 0.2rem solid var(--blue);
  //     font-size: 3rem;
  //     margin-top: 0rem;
  //     color: var(--green);
  //   }

  //   h3 {
  //     margin-top: 2rem;
  //     color: var(--green);
  //   }

  //   p {
  //     font-size: 1.8rem;
  //     letter-spacing: 0.1rem;
  //     font-weight: 500;
  //   }

  //   .pic {
  //     border-radius: 60%;
  //   }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 5%;

    .about-text {
      min-width: unset;
    }

    .about-text h2 {
      font-size: 1.8rem;
      text-align: center;
    }

    .about-text p {
      font-size: 0.95rem;
      text-align: center;
    }
  }
`;