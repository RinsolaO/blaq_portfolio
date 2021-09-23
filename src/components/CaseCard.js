import React from "react";
import { motion } from "framer-motion";
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
const CaseCard = (props) => {
  return (
    <motion.div
      initial="startAnimation"
      animate="endAnimation"
      className={`case-card-flex ${props.cardflexClassName}  ${props.alignClassName}`}
    >
      <motion.img
        // variants={imgVariants}
        // transition={{
        //   duration: 0.7,
        // }}
        src={props.img}
        alt=""
        className={`case-card-img ${props.imgClassName}`}
      />
      <motion.span
        className={`case-card-text ${props.textClassName}  ${props.alignTextClassName}`}
      >
        {props.text}
      </motion.span>
    </motion.div>
  );
};

export default CaseCard;
