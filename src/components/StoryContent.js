import React, { useEffect } from "react";
import Blaq from "../img/blaq2.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const textVariants = {
  startAnimation: {
    x: 80,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
  },
};

const textVariants2 = {
  startAnimation: {
    y: 50,
    opacity: 0,
  },
  endAnimation: {
    y: 0,
    opacity: 1,
  },
  transition: {
    staggerChildren: 0.2,
  },
};

const imageVariants = {
  startAnimation: {
    x: -100,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
  },
};

const StoryContent = () => {
  const { ref, inView } = useInView();
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
    <motion.div initial="startAnimation" animate="endAnimation">
      <div className="story-container container black">
        <div className="story-content grid">
          <div className="story-left-grid">
            <motion.img
              variants={imageVariants}
              transition={{
                duration: 0.8,
                delay: 1,
              }}
              src={Blaq}
              alt=""
              className="story-img"
            />
          </div>
          <div className="story-right-grid">
            <motion.div
              variants={textVariants}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="story-title"
            >
              Hello, I’m
              <br />
              Adewale Ayomikun
            </motion.div>
            <motion.div
              className="story-details"
              variants={textVariants2}
              transition={{ delay: 2.2, duration: 0.5 }}
            >
              I am a product designer based in Nigeria.
            </motion.div>
          </div>
        </div>

        <motion.div animate={animation} ref={ref} className="more-story">
          <motion.div
            className="story-flex-container"
            animate={animation}
            ref={ref}
          >
            <motion.div
              variants={imageVariants}
              transition={{
                duration: 0.8,
              }}
              className="more-story-title"
            >
              Journey
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.3 }}
              className="more-story-details"
            >
              My journey through design as been quite an amazing one and I have
              been loving every minute of it. I developed a passion for
              designing during this past pandemic lockdown. I was restless like
              everyone and did not know what to do with a lot of my free time. I
              spent a lot of my time on YouTube and that’s when I came across a
              YouTube video on a UI design. <br />
              <br />
              Right there, I caught the spark for Designing. That spark ignited
              an unquenchable desire that led me to enroll in the UIlearn.com
              course online and also started reading books on design. I’m a self
              taught UI designer that enjoys solving people’s problem with my
              designs.
            </motion.div>
          </motion.div>

          {/* DRIVE */}

          <motion.div
            animate={animation}
            ref={ref}
            className="story-flex-container drive"
          >
            <motion.div
              variants={imageVariants}
              transition={{
                duration: 0.3,
                delay: 0.4,
              }}
              className="more-story-title"
            >
              Drive
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="more-story-details"
            >
              What drives me is the idea that I can use my beautiful interface
              design to improve the life of people and also make the world a
              better place. You will find me smiling almost every time while
              designing thoughtful products, and experiences that people love
              and businesses value.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StoryContent;
