import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 90vh;
  flex-wrap: wrap;
  align-items: center;

  justify-content: flex-start; /* ✅ shifts layout slightly right */
  gap: clamp(2rem, 4vw, 5rem);

  padding: clamp(2rem, 5vw, 6rem) 8%; /* ✅ increased horizontal padding */
  box-sizing: border-box;

  .hero-text {
    flex: 1 1 420px;
    max-width: 620px;

    p {
      font-size: clamp(1rem, 1.5vw, 1.4rem);
      margin: 0.4rem 0;
    }

    h1 {
      font-size: clamp(2.5rem, 5vw, 5rem);
      margin: 0.8rem 0;
      line-height: 1.1;
    }

    h3 {
      font-size: clamp(1.2rem, 2vw, 2.2rem);
      color: var(--green);
      margin: 0.6rem 0;
    }

    p.small-resume {
      font-size: clamp(0.95rem, 1.2vw, 1.2rem);
      margin-bottom: 1.5rem;
      color: #666;
    }

    .button {
      display: inline-block;
      margin-top: 1.5rem;
      padding: 0.9rem 2.2rem;
      background-color: var(--green);
      color: white;
      font-size: clamp(0.9rem, 1vw, 1.1rem);
      border-radius: 8px;
      text-decoration: none;
      transition:
        transform 0.2s ease,
        background 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        background-color: darkgreen;
      }
    }

    .social-media {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      margin-top: 2rem;

      img {
        width: clamp(28px, 3vw, 36px);
        height: clamp(28px, 3vw, 36px);
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .hero-image {
    flex: 1 1 320px;
    display: flex;
    justify-content: center;

    img {
      width: 100%;
      max-width: clamp(260px, 30vw, 420px);
      height: auto;
      object-fit: contain;
    }
  }

  /* ---------- Tablet ---------- */

  @media (max-width: 1024px) {
    gap: 3rem;
  }

  /* ---------- Mobile ---------- */

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center; /* ✅ prevents right shift on phones */

    .hero-text {
      .social-media {
        justify-content: center;
      }
    }

    .hero-image img {
      max-width: 320px;
    }
  }

  /* ---------- Small Phones ---------- */

  @media (max-width: 480px) {
    padding: 2.5rem 5%;

    .hero-image img {
      max-width: 280px;
    }
  }
`;

// import styled from "styled-components";

// export const Container = styled.section`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   gap: 3rem;
//   padding: 6% 5% 2rem;
//   background: rgba(0, 0, 0, 0);
//   min-height: 100vh;

//   .hero-text {
//     flex: 1 1 400px;

//     p {
//       font-size: 1.8rem;
//       margin: 0.5rem 0;
//     }

//     h1 {
//       font-size: 5rem;
//       margin: 1rem 0;
//     }

//     h3 {
//       font-size: 2.5rem;
//       color: var(--green);
//       margin: 1rem 0;
//     }

//     p.small-resume {
//       font-size: 1.4rem;
//       margin-bottom: 2rem;
//     }

//     .button {
//       display: inline-block;
//       margin-top: 2rem;
//       padding: 1rem 2.5rem;
//       background-color: var(--green);
//       color: white;
//       font-size: 1.2rem;
//       border-radius: 8px;
//       text-decoration: none;
//       transition: background 0.3s ease;

//       &:hover {
//         background-color: darkgreen;
//       }
//     }

//     .social-media {
//       display: flex;
//       align-items: center;
//       gap: 1rem;
//       margin-top: 3rem;

//       img {
//         width: 35px;
//         height: 35px;
//         transition: transform 0.3s ease;

//         &:hover {
//           transform: scale(1.1);
//         }
//       }
//     }
//   }

//   .hero-image {
//     flex: 1 1 300px;
//     display: flex;
//     justify-content: center;
//     padding-left: 10px;

//     img {
//       max-width: 100%;
//       height: auto;
//       object-fit: contain;
//     }
//   }

//   /* 🔽 Responsive Design Below */

//   @media (max-width: 1024px) {
//     gap: 4rem;

//     .hero-text {
//       h1 {
//         font-size: 4rem;
//       }

//       h3 {
//         font-size: 2rem;
//       }

//       p {
//         font-size: 1.4rem;
//       }

//       p.small-resume {
//         font-size: 1.2rem;
//       }
//     }
//   }

//   @media (max-width: 768px) {
//     flex-direction: column-reverse;
//     text-align: center;
//     padding: 8% 5%;

//     .hero-text {
//       align-items: center;

//       h1 {
//         font-size: 3rem;
//       }

//       h3 {
//         font-size: 1.8rem;
//       }

//       p {
//         font-size: 1.2rem;
//       }

//       p.small-resume {
//         font-size: 1.1rem;
//       }

//       .social-media {
//         justify-content: center;
//       }
//     }

//     .hero-image {
//       padding-left: 0;
//     }
//   }

//   @media (max-width: 480px) {
//     padding: 5% 4%;

//     .hero-text {
//       h1 {
//         font-size: 2.5rem;
//       }

//       h3 {
//         font-size: 1.5rem;
//       }

//       p {
//         font-size: 1.1rem;
//       }

//       .button {
//         font-size: 1rem;
//         padding: 0.8rem 2rem;
//       }

//       .social-media img {
//         width: 30px;
//         height: 30px;
//       }
//     }

//     .hero-image img {
//       width: 100%;
//       max-width: 320px;
//     }
//   }
// `;
