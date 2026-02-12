import { Container } from "./styles";
import mypic from "../../assets/my_pic.png";
import python from "../../assets/python.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import nextjs from "../../assets/icons8-nextjs.svg";
import git from "../../assets/icons8-git.svg";
import github from "../../assets/icons8-github.svg";
import redis from "../../assets/icons8-redis.svg";
import postgresql from "../../assets/icons8-postgresql.svg";
import mysql from "../../assets/icons8-mysql.svg";
import mongodb from "../../assets/icons8-mongodb.svg";
import postman from "../../assets/icons8-postman-api.svg";
import tailwindcss from "../../assets/icons8-tailwindcss.svg";
import vscode from "../../assets/icons8-visual-studio.svg";
import docker from "../../assets/icons8-docker.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { motion } from "framer-motion";

function About() {
  const textVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  

  return (
    // <Container id="about">
    //   <div className="about-image">
    //     {/* <ScrollAnimation animateIn="fadeInRight" delay={0.21 * 1000}> */}
    //     <img src={mypic} className="pic" alt="vikash" />
    //     {/* </ScrollAnimation> */}
    //   </div>

    //   <div className="about-text">
    //     {/* <ScrollAnimation animateIn="fadeInLeft"> */}
    //     <h2 className = "about-me">About me</h2>
    //     {/* </ScrollAnimation> */}
    //     {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}> */}
    //     <p>
    //       Hi there! I'm Vikash, an enthusiastic Software Engineer skilled in web
    //       development, Frontend & Backend Technologies, and scalable software
    //       solutions
    //     </p>
    //     {/* </ScrollAnimation> */}

    //     {/* <ScrollAnimation animateIn="fadeInLeft" delay={400}> */}
    //     <div className="education">
    //       <h3>Education:</h3>
    //       <p>
    //         Rungta College OF Engineering And Technology, Bhilai | July 2022 -
    //         Aug 2026
    //       </p>
    //     </div>
    //     {/* </ScrollAnimation> */}

    //     {/* <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}> */}
    //     <h3>Here are my main skills:</h3>
    //     {/* </ScrollAnimation> */}
    //     <div className="hard-skills">
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}> */}
    //         <img src={jsIcon} alt="JavaScript" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}> */}
    //         <img src={python} alt="python" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.11 * 1000}> */}
    //         <img src={nodeIcon} alt="nodejs" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}> */}
    //         <img src={reactIcon} alt="React" />
    //         {/* </ScrollAnimation> */}
    //       </div>

    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}> */}
    //         <img src={nextjs} alt="nextjs" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}> */}
    //         <img src={mongodb} alt="mongodb" />
    //         {/* </ScrollAnimation> */}
    //       </div>

    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}> */}
    //         <img src={htmlIcon} alt="Html" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}> */}
    //         <img src={cssIcon} alt="Css" />
    //         {/* </ScrollAnimation> */}
    //       </div>

    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={git} alt="git" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={github} alt="github" />
    //         {/* </ScrollAnimation> */}
    //       </div>

    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={mysql} alt="mysql" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={docker} alt="docker" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={vscode} alt="vscode" />
    //         {/* </ScrollAnimation> */}
    //       </div>
    //       <div className="hability">
    //         {/* <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}> */}
    //         <img src={tailwindcss} alt="tailwindcss" />
    //         {/* </ScrollAnimation> */}
    //       </div>

    //     </div>
    //   </div>
    // </Container>
    <Container id="about">
      <div className="about-image">
        <motion.img
          src={mypic}
          className="pic"
          alt="vikash"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        />
      </div>

      <div className="about-text">
        <motion.h2
          className="about-me"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          About me
        </motion.h2>

        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Hi there! I'm Vikash, an enthusiastic Software Engineer skilled in web
          development, Frontend & Backend Technologies, and scalable software
          solutions.
        </motion.p>

        <motion.div
          className="education"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3>Education:</h3>
          <p>
            Rungta College OF Engineering And Technology, Bhilai | July 2022 -
            Aug 2026
          </p>
        </motion.div>

        <motion.h3
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          Here are my main skills:
        </motion.h3>

        <div className="hard-skills">
          {[
            jsIcon,
            python,
            nodeIcon,
            reactIcon,
            nextjs,
            mongodb,
            htmlIcon,
            cssIcon,
            git,
            github,
            mysql,
            docker,
            vscode,
            tailwindcss,
          ].map((icon, index) => (
            <motion.div
              className="hability"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={icon} alt={`skill-${index}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
}
export default About;
