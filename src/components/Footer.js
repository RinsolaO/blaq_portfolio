import React, { useEffect } from "react";
import Forward from "../img/Forward.svg";
import GmailRed from "../img/gmail-red.svg";
import Gmail from "../img/gmail.svg";
import Instagram from "../img/instagram.svg";
import Twitter from "../img/twitter.svg";
import Behance from "../img/behance.svg";
import Linkedin from "../img/linked-in.svg";
import Facebook from "../img/facebook.svg";
import HorizontalDots from "../img/horinzontal-dots.svg";
import VerticalDots from "../img/vertical-dots.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  startAnimation: {
    y: -30,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
  },
};

const socialmediaVariants = {
  startAnimation: {
    y: 30,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
  },
};
const Footer = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("endAnimation");
    }
    if (!inView) {
      animation.start("startAnimation");
    }
  }, [animation, inView]);
  return (
    <motion.div ref={ref} animate={animation} id="footer">
      <footer>
        <div className="container black footer-container">
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="footer-title"
          >
            Have an idea?
          </motion.div>
          <motion.div
            variants={textVariants}
            transition={{
              duration: 0.7,
              delay: 0.8,
            }}
            className="footer-content"
          >
            <div className="footer-data">
              <div className="footer-details">
                Tell me about it, I am able to dive into the chaos of your ideas
                with you and help find a pathway and solution to bringing your
                idea to life.
              </div>
            </div>

            <img src={Forward} alt="" />
            <img src={GmailRed} alt="" />
          </motion.div>

          <motion.div
            variants={socialmediaVariants}
            transition={{
              duration: 0.7,
              delay: 1.5,
            }}
            className="footer-social-media grid"
          >
            <a href="">
              <img src={Gmail} alt="" className="footer-img gmail" />
            </a>

            <a href="" target="_blank">
              <img src={Twitter} alt="" className="footer-img" />
            </a>
            <a href="" target="_blank">
              <img src={Behance} alt="" className="footer-img" />
            </a>
            <a href="" target="_blank">
              <img src={Linkedin} alt="" className="footer-img" />
            </a>
            <a href="https://www.instagram.com/lifeofay_/" target="_blank">
              <img src={Instagram} alt="" className="footer-img" />
            </a>
            <a href="" target="_blank">
              <img src={Facebook} alt="" className="footer-img" />
            </a>
          </motion.div>

          <img src={HorizontalDots} alt="" className="horizontal-dots-img" />
          <img src={VerticalDots} alt="" className="vertical-dots-img" />
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
