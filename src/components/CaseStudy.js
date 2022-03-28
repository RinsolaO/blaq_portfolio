import React, { useEffect } from "react";
import CarouselMain from "./CarouselMain";
import Arrow from "../img/right-arrow.svg";
import Img1 from "../img/sale-img.webp";
import Img2 from "../img/sale-img2.webp";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const CaseStudy = () => {
  // const { ref, inView } = useInView();
  // const animation = useAnimation();
  // useEffect(() => {
  //   if (inView) {
  //     animation.start({
  //       x: 0,
  //     });
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: -100,
  //     });
  //   }
  //   console.log("this is inview", inView);
  // }, [inView]);
  return (
    <div>
      <div className="carousel">
        <div className="sneaker-case">
          <CarouselMain
            title="Blaq"
            description="Your Ultimate online sneaker destination"
            text="OPEN CASE STUDY"
            img={Arrow}
            img1={Img1}
            img2={Img2}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
