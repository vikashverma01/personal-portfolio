import styled from "styled-components";

export const Container = styled.section`
  padding: 6rem 5%;
  background-color: #f5f5f5;
  text-align: center;
  height: 80vh;

  .section-title {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--green);
    margin-bottom: 3rem;
    font-weight: 700;
  }

  /* ✅ Responsive Grid Layout (much better than horizontal scroll) */
  .projects-container {
    max-width: 1200px;
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.8rem;
  }

  .project-card {
    background: #1e293b;
    color: #f1f5f9;

    padding: 1.6rem;
    border-radius: 1.2rem;

    text-align: left;

    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.18);
    }

    h3 {
      font-size: 1.05rem;
      color: #38bdf8;
      line-height: 1.4;
    }

    p {
      font-size: 0.9rem;
      color: #cbd5f5;
      line-height: 1.5;
    }
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.4rem;
  }

  .tech-item {
    font-size: 0.75rem;
    padding: 0.35rem 0.7rem;
    border-radius: 999px;

    background: rgba(56, 189, 248, 0.15);
    color: #38bdf8;

    white-space: nowrap;
  }

  /* ✅ Tablet Refinement */
  @media (max-width: 900px) {
    padding: 4.5rem 6%;

    .projects-container {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  }

  /* ✅ Mobile Layout */
  @media (max-width: 600px) {
    padding: 3.5rem 6%;

    .project-card {
      padding: 1.3rem;

      h3 {
        font-size: 0.95rem;
      }

      p {
        font-size: 0.82rem;
      }
    }
  }
`;

// import styled from "styled-components";

// export const Container = styled.section`
//   //   --green: var(--green);
//   --dark-bg: #0f172a;
//   --card-bg: #1e293b;
//   --text-light: #1e293b;
//   --accent: #38bdf8;

//   // padding: 80px 20px;
//   padding-bottom: 30px;
//   //   background: #ffffff; /* White background */
//   background-color: #f5f5f5;
//   text-align: center;

//   .section-title {
//     font-size: 3rem;
//     color: var(--green);
//     margin-bottom: 50px;
//     font-weight: 700;
//     letter-spacing: 1px;
//     text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
//   }

//   .projects-container {
//     padding-left: 55px;

//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//     gap: 40px;
//     max-width: 1200px;
//     margin: 0 auto;
//   }

//   .project-card {
//     min-width: 320px;
//     flex-shrink: 0;
//     background: var(--card-bg);
//     color: #f1f5f9;
//     padding: 30px;
//     border-radius: 20px;
//     box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//     transition:
//       transform 0.3s ease,
//       box-shadow 0.3s ease;
//     position: relative;
//     overflow: hidden;

//     &::before {
//       content: "";
//       position: absolute;
//       top: -50%;
//       left: -50%;
//       width: 200%;
//       height: 200%;
//       background: radial-gradient(
//         circle,
//         rgba(0, 184, 148, 0.2),
//         transparent 70%
//       );
//       z-index: 0;
//       transform: rotate(25deg);
//     }

//     &:hover {
//       transform: translateY(-10px);
//       box-shadow: 0 12px 30px rgba(0, 184, 148, 0.3);
//     }

//     h3 {
//       font-size: 1.6rem;
//       margin-bottom: 15px;
//       color: var(--accent);
//       position: relative;
//       z-index: 1;
//     }

//     p {
//       font-size: 1rem;
//       color: #e2e8f0;
//       line-height: 1.6;
//       margin-bottom: 20px;
//       position: relative;
//       z-index: 1;
//     }

//     .tech-stack {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 10px;
//       z-index: 1;
//       position: relative;

//       .tech-item {
//         background-color: rgba(56, 189, 248, 0.15);
//         color: var(--accent);
//         padding: 6px 12px;
//         border-radius: 30px;
//         font-size: 0.85rem;
//         font-weight: 500;
//         border: 1px solid rgba(56, 189, 248, 0.4);
//         transition: all 0.2s ease;

//         &:hover {
//           background-color: var(--accent);
//           color: #0f172a;
//           cursor: default;
//         }
//       }
//     }
//   }
//   .projects-container {
//     display: flex;
//     flex-direction: row;
//     gap: 2rem;
//     overflow-x: auto;
//     overflow-y: hidden;
//     scroll-behavior: smooth;
//     padding-bottom: 1rem;
//   }

//   .projects-container::-webkit-scrollbar {
//     height: 6px;
//   }

//   .projects-container::-webkit-scrollbar-thumb {
//     background: rgba(255, 255, 255, 0.2);
//     border-radius: 10px;
//   }
//   .projects-container {
//     -webkit-overflow-scrolling: touch;
//   }
// `;
