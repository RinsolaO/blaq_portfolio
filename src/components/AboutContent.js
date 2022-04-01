import React, { useEffect } from "react";
import Blaq from "../img/Blaq.webp";
import DownArrowYellow from "../img/down-arrow-ylw.svg";
import LeftArrowYellow from "../img/left-arrow-ylw.svg";
import Btn from "./Btn";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
const titleVariants = {
  startAnimation: {
    x: -80,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 150,
    },
  },
};

const imageVariants = {
  startAnimation: {
    scale: 1,
    opacity: 0,
  },
  endAnimation: {
    scale: [1.3, 0.8, 1],
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
    },
  },
};

const gridRightVariants = {
  startAnimation: {
    x: 80,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.4,
      type: "spring",
      stiffness: 180,
    },
  },
};

const BtnVariants = {
  startAnimation: {
    y: 30,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
};

const AboutContent = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start("endAnimation");
    }
    if (!inView) {
      animation.start("startAnimation");
    }
  }, [inView]);
  return (
    <AnimatePresence>
      <motion.div
        className="about-container container black"
        initial="startAnimation"
        animate="endAnimation"
      >
        <div className="grid about-grid">
          <motion.div className=" grid-left" variants={titleVariants}>
            Adewale <br /> <span>Ayomikun</span>
          </motion.div>

          <motion.div className=" grid-center" variants={imageVariants}>
            <img src={Blaq} alt="Blaq" className="blaq-img" />
          </motion.div>

          <motion.div className=" grid-right" variants={gridRightVariants}>
            <img src={DownArrowYellow} alt="" />
            <span className="about-span">
              I help progressive business create websites and apps that help
              them bring their idea to life.
            </span>
            <motion.div className="about-btn" variants={BtnVariants}>
              <a href="#footer">
                <Btn text="Get in touch" className="touch-btn" />
              </a>
              <Link to="/Story">
                <Btn text="My story" className="story-btn" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="about-footer" ref={ref}>
          <motion.span variants={titleVariants} animate={animation}>
            Project
          </motion.span>
          <motion.img
            variants={gridRightVariants}
            animate={animation}
            src={LeftArrowYellow}
            alt=""
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AboutContent;
