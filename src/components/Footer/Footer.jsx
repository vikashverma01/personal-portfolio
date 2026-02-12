import { Container } from "./style";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import telegram from "../../assets/telegram.svg";
import instagramIcon from "../../assets/instagram.svg";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        {/* <a href="" className="logo">
        <span>www.vikash</span>
        <span>verma.in</span>
      </a> */}
      </div>

      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/vikash-verma-52ba6724b/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=9329953852"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <img src={whatsapp} alt="watsapp" />
        </a>
      </div>
    </Container>
  );
}
