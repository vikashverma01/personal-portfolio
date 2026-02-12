// import { BrowserRouter } from "react-router-dom";
import { Container } from "./style";
import "animate.css/animate.min.css";

import ScrollAnimation from "react-animate-on-scroll";
// import Illustration from "../../assets/illustration.svg";
import Illustration from "../../assets/d1.png";

// import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";

import githubIcon from "../../assets/github.svg";
import whatsapp from "../../assets/whatsapp.svg";
import Hello from "../../assets/Hello.gif";
import gmail from "../../assets/gmail.svg";
import Resume from "../../assets/empty.pdf";
import { motion } from "framer-motion";



function Main() {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };
    console.log("Main component loaded");
  return (
  
    <Container id="home">
      <div className="hero-text">
        <motion.p
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Hello <img src={Hello} alt="Hello" width="20px" />, I'm
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Vikash Verma
        </motion.h1>

        <motion.h3
          custom={2}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Software Developer
        </motion.h3>

        <motion.p
          className="small-resume"
          custom={3}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          I’m a software developer with a passion for building web applications.
        </motion.p>

        <motion.div
          className="social-media"
          custom={4}
          initial="hidden"
          whileInView="visible"
          variants={textVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/vikash-verma-52ba6724b/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="Linkedin" />
          </a>
          <a target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="mailto:vickyvikashv78@@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <img src={gmail} alt="Gmail" />
          </a>
        </motion.div>
      </div>

      <div className="hero-image">
        <motion.img
          src={Illustration}
          alt="Illustration"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>
    </Container>
  );
}

export default Main;
