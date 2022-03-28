import React from "react";
import AboutContent from "../components/AboutContent";
import CaseStudy from "../components/CaseStudy";
import Header from "../components/Header";
import { motion } from "framer-motion";

const pageVariants = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
  },
  exitAnimation: {
    y: "100vh",
  },
  transition: {
    duration: 0.2,
  },
};
const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="startAnimation"
      animate="endAnimation"
      exit="exitAnimation"
    >
      <Header />
      <AboutContent />
      <CaseStudy />
    </motion.div>
  );
};

export default Home;
