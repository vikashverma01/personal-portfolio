import styled from "styled-components";

export const Container = styled.footer`
  // disply: flex;
  // align-items: center;
  // justify-content: center;
  // background-color: #f5f5f5;
  // // padding: 40px 20px;
  // text-align: center;
  // // border-top: 1px solid #e2e8f0;
  // // box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  // color: #1e293b;

  // .logo {
  //   display: flex;
  //   font-size: 1.8rem;
  //   font-weight: 700;
  //   color: #00b894;
  //   text-decoration: none;
  //   // margin-top: 15px;
  //   line-height: 1.2;
  //   transition: color 0.3s ease;
  //   padding : 2%

  //   &:hover {
  //     color: #00997c;
  //   }

  //   span {
  //     display: block;
  //   }
  // }

  // p {
  //   font-size: 1rem;
  //   margin: 10px 0;
  //   color: #334155;
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   gap: 6px;

  //   img {
  //     width: 20px;
  //     height: 20px;
  //   }
  // }

  // .social-media {
  //   margin-top: 20px;
  //   display: flex;
  //   justify-content: center;
  //   gap: 20px;

  //   a {
  //     display: inline-block;
  //     transition: transform 0.3s ease;

  //     &:hover {
  //       transform: scale(1.1);
  //     }

  //     img {
  //       width: 30px;
  //       height: 30px;
  //       filter: grayscale(100%);
  //       transition: filter 0.3s ease;

  //       &:hover {
  //         filter: grayscale(0%);
  //       }
  //     }
  //   }
  // }

  // background-color: #2b2b2b;
  background-color: #f5f5f5;
  padding: 3rem ;
  // margin-top: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    font-size: 2.8rem;
  }

  p {
    letter-spacing: 0.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    img {
      width: 2.6rem;
      animation: spinning 5s infinite linear;
    }
  }
  .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    img,
    span {
      font-size: 3rem;
      width: 3rem;
    }

     a {
      display: inline-block;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }

      img {
        width: 30px;
        height: 30px;
        filter: grayscale(100%);
        transition: filter 0.3s ease;

        &:hover {
          filter: grayscale(0%);
        }
      }
  }
      footer {
  text-align: center;
  padding: 1.5rem 5%;
}

`;