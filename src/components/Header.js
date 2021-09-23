import React from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const headerVariants = {
  startAnimation: {},
  endAnimation: {},
  exitAnimation: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const logoVariants = {
  startAnimation: {
    x: -80,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};

const NavLinkVariants = {
  startAnimation: {
    x: 50,
    opacity: 0,
  },
  endAnimation: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
};
const Header = (props) => {
  return (
    <div>
      <AnimatePresence>
        <motion.header
          className={`container black ${props.classNameContainerColor}`}
          variants={headerVariants}
          initial="startAnimation"
          animate="endAnimation"
          exit="exitAnimation"
        >
          <nav className="nav-bar container">
            <motion.div className="nav-logo" variants={logoVariants}>
              <NavLink to="/" className={`${props.className}`}>
                Adewale Ayomikun
              </NavLink>
            </motion.div>

            <motion.ul className="nav-links" variants={NavLinkVariants}>
              <li>
                <NavLink
                  exact
                  to="/"
                  className={`nav-link ${props.className}`}
                  activeClassName="nav-link-active"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/CaseStudy"
                  className={`nav-link ${props.className}`}
                  activeClassName="nav-link-active"
                >
                  Work
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Story"
                  className={`nav-link ${props.className}`}
                  activeClassName="nav-link-active"
                >
                  My story
                </NavLink>
              </li>
            </motion.ul>
          </nav>
        </motion.header>
      </AnimatePresence>
    </div>
  );
};

export default Header;
