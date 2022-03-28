import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const textVariants = {
  startAnimation: {
    y: 30,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
  },
};

const imgVariants = {
  startAnimation: {
    y: -50,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
  },
};

const CarouselMain = (props) => {
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
    <motion.div ref={ref} className="carousel" animate={animation}>
      <div className="carousel-container grid">
        <div className="case-left">
          <div className="case-left-container">
            <motion.div
              className="case-title"
              variants={textVariants}
              transition={{
                duration: 0.7,
              }}
            >
              {props.title}
            </motion.div>
            <motion.span
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="case-dix"
            >
              {props.description}
            </motion.span>
            <Link to="/CaseStudy" className="case-link">
              <motion.div
                variants={textVariants}
                transition={{
                  duration: 0.7,
                  delay: 1.3,
                }}
                className="case-link"
              >
                {props.text}
                <img src={props.img} alt="" />
              </motion.div>
            </Link>
          </div>
        </div>
        <div className="case-right">
          <div className="case-right-container">
            <motion.img
              variants={imgVariants}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
              src={props.img1}
              alt=""
              className={`sale-img1 ${props.className}`}
            />
            <motion.img
              variants={imgVariants}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              src={props.img2}
              alt=""
              className={`sale-img2 ${props.className}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarouselMain;
