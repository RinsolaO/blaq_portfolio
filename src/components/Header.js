import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "../utils/useMediaQuery";

const Header = (props) => {
  const isTablet = useMediaQuery("(max-width: 768px)");

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

  const logoVariants = isTablet
    ? {
        startAnimation: {
          x: 0,
          opacity: 1,
        },
        endAnimation: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.2,
          },
        },
      }
    : {
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

  const NavLinkVariants = isTablet
    ? {
        startAnimation: {
          x: "100vw",
          opacity: 0,
        },
        endAnimation: {
          x: 0,
          opacity: 1,

          transition: {
            duration: 0.5,
          },
        },
      }
    : {
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

  const [open, setOpen] = useState(false);
  return (
    <div>
      <AnimatePresence>
        <motion.header
          className={`container black ${props.classNameContainerColor}`}
          variants={headerVariants}
          initial={!isTablet && !open && "startAnimation"}
          animate={
            (!isTablet && "endAnimation") ||
            (isTablet && open ? "endAnimation" : "startAnimation")
          }
          exit="exitAnimation"
        >
          <nav className="nav-bar container">
            <motion.div className="nav-logo" variants={logoVariants}>
              <NavLink to="/" className={`${props.className}`}>
                Adewale Ayomikun
              </NavLink>
            </motion.div>

            <motion.ul className={`nav-links`} variants={NavLinkVariants}>
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
            <div
              onClick={() => {
                setOpen(!open);
              }}
              className={`${open ? "burger active" : "burger"}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </motion.header>
      </AnimatePresence>
    </div>
  );
};

export default Header;
