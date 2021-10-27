import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StoryContent from "../components/StoryContent";
import { motion } from "framer-motion";

const pageVariants = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
  },
  exitAnimation: {
    x: "-100vw",
  },
  transition: {
    duration: 0.2,
  },
};

const Story = () => {
  return (
    <motion.div
      variants={pageVariants}
      exit="exitAnimation"
      initial="startAnimation"
      animate="endAnimation"
    >
      <Header />
      <StoryContent />
    </motion.div>
  );
};

export default Story;
