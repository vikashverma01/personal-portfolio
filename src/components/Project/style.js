import styled from "styled-components";

export const Container = styled.section`
  --card-bg: #1e293b;
  --accent: #38bdf8;

  padding: 10px 0 30px;
  background-color: #f5f5f5;
  text-align: center;

  .section-title {
    font-size: clamp(1.6rem, 3vw, 2.2rem);
    color: var(--green);
    margin-bottom: 35px;
    font-weight: 700;
  }

  /*  PERFECT CENTERING */
  .projects-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;

    overflow-x: auto;
    overflow-y: hidden;

    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;

    padding: 0 2rem 1rem;
  }

  .projects-container::-webkit-scrollbar {
    height: 5px;
  }

  .projects-container::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }

  /* SMALL PERFECT SQUARE */
  .project-card {
    width: 350px;
    height: 360px;
    flex-shrink: 0;

    background: var(--card-bg);
    color: #f1f5f9;

    padding: 20px;
    border-radius: 18px;

    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
    transition:
      transform 0.25s ease,
      box-shadow 0.25s ease;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
  }

  .project-card h3 {
    font-size: 0.9rem;
    line-height: 1.3;
    color: var(--accent);
    margin-bottom: 6px;
  }

  .project-card p {
    font-size: 0.72rem;
    line-height: 1.35;
    color: #cbd5f5;

    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 8px;
  }

  .tech-item {
    font-size: 0.65rem;
    padding: 3px 7px;
    border-radius: 10px;
    background: rgba(56, 189, 248, 0.15);
    color: var(--accent);
  }

  /* MOBILE BEHAVIOR */
  @media (max-width: 768px) {
    .projects-container {
      justify-content: flex-start;
      padding: 0 1rem 1rem;
    }

    .project-card {
      width: 180px;
      height: 180px;
      padding: 14px;
    }

    .project-card h3 {
      font-size: 0.85rem;
    }

    .project-card p {
      font-size: 0.7rem;
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
