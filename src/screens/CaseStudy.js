import React, { useEffect } from "react";
import Homepage from "../img/homepage.webp";
import PdtDetail from "../img/pdt-detail.webp";
import Offers from "../img/Offers.webp";
import Categories from "../img/Categories.webp";
import Cart from "../img/Cart.webp";
import OverviewCategories from "../img/overview-categories.webp";
import Payment from "../img/Payment.webp";
import Summary from "../img/Summary.webp";
import Delivery from "../img/Delivery.webp";
import CaseStudy1 from "../img/case-study1.webp";
import CaseStudy2 from "../img/case-study2.webp";
import CaseStudy3 from "../img/case-study3.webp";
import CaseStudy4 from "../img/case-study4.webp";
import CaseStudy5 from "../img/case-study5.webp";
import Header from "../components/Header";
import CaseCard from "../components/CaseCard";
import CaseCardText from "../components/CaseCardText";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const pageVariants = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
  },
  exitAnimation: {
    x: "100vw",
  },
  transition: {
    duration: 0.2,
  },
};

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
const CaseStudy = () => {
  return (
    <motion.div
      variants={pageVariants}
      exit="exitAnimation"
      initial="startAnimation"
      animate="endAnimation"
    >
      <Header
        className="case-nav-color"
        classNameContainerColor="light-green"
      />
      <main className="container light-green">
        <section className="case-container">
          <div className="case-header">
            <motion.span
              className="case-study-title"
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
            >
              Blaq
            </motion.span>
            <motion.span
              variants={textVariants}
              transition={{
                duration: 0.7,
                delay: 1.8,
              }}
              className="case-subtitle"
            >
              Your ultimate online sneaker destination
            </motion.span>
          </div>
        </section>

        <section className="case-container case-study-img-container">
          <CaseCard
            img={CaseStudy1}
            text="Blaq is an online home to all sneakers, and the sole purpose of this app is to be the ultimate source for sneakers drop ranging from nike, adidas, puma, converse, jordan and many more brands, and getting them at great deals. This platform provides a service that allows mobile users to get their favourite sneakers all in one place."
            textClassName="case-text-min-width"
          />
        </section>

        <section className="case-container case-study-img-container">
          <CaseCard img={CaseStudy2} />
        </section>

        <section className="case-container">
          <CaseCardText
            title="The challenge"
            description=" The key challange to solve was to provide an online platform that serves as a getway to mobile users to get their favorites sneakers in one place at great deals and discount without having to move through different app or leave the comfort of their home in order to search for this sneakers."
          />
        </section>

        <section className="case-container">
          <div className="case-container-mini-flex">
            <CaseCard
              img={CaseStudy3}
              cardflexClassName="case-card-min-width"
            />
            <CaseCard
              img={CaseStudy4}
              text="login interface"
              cardflexClassName="case-card-min-width"
            />
          </div>
        </section>

        <section className="case-container">
          <CaseCardText
            title="Easy Sign up"
            description="To achieve a straightforward sign up experience, it was important that I came up with a page that is easy but also collects the required data of the user."
          />
        </section>

        <section className="case-container">
          <div className="case-container-mini-flex feature-flex">
            <div className="case-feature-flex">
              <CaseCard
                img={Homepage}
                text="Overview of the home page"
                cardflexClassName="case-card-max-width"
              />
              <CaseCard
                img={Offers}
                text="A look at the offer page"
                cardflexClassName="case-card-max-width"
              />
              <CaseCard
                img={Categories}
                text="Categories page"
                cardflexClassName="case-card-max-width"
              />
            </div>

            <div className="case-feature-flex right-feature-flex">
              <CaseCard
                img={PdtDetail}
                text="Product detail"
                cardflexClassName="case-card-max-width"
              />
              <CaseCard
                img={Cart}
                text="Interactive cart page"
                cardflexClassName="case-card-max-width"
              />
              <CaseCard
                img={OverviewCategories}
                text="Overview of the home page"
                cardflexClassName="case-card-max-width"
              />
            </div>
          </div>
        </section>

        <section className="case-container">
          <CaseCardText
            title="Seamless 
           "
            title2="Payment process"
            description="To achieve a seamless payment processsing, I came up with a flow that is easy to understand by the user. I streamlined the entire flow into successive steps as the user progress through the application. I also added short sentence that will enable the user to understand what they are doing at each particular stage."
          />
        </section>

        <section className="case-container">
          <div className="case-container-mini-flex delivery-flex">
            <CaseCard
              img={Payment}
              text="Blaq mobile app has the
              scan card function"
              cardflexClassName="case-card-max-width"
              alignTextClassName="align-text"
            />
            <CaseCard
              img={Delivery}
              text="Delivery method"
              cardflexClassName="case-card-max-width"
              alignClassName="align-padding"
              alignTextClassName="align-text"
            />
            <CaseCard
              img={Summary}
              text="Overview of summary page"
              cardflexClassName="case-card-max-width"
              alignTextClassName="align-text"
            />
          </div>
        </section>

        <section className="case-container">
          <CaseCardText
            title="Detailed
            "
            title2="Confirmation page"
            description="In order to have a order completion page that is detailed and also not congested but easy to understand. I made use of a confirmation page that captures what the user ordered, the number of days to delivery, a track order link and also a button that takes the user to the home page to continue shopping. This page ensures the user gets the important information about their order."
          />
        </section>

        <section className="case-container case-study-img-container main-footer">
          <CaseCard img={CaseStudy5} />
        </section>
      </main>
    </motion.div>
  );
};

export default CaseStudy;
