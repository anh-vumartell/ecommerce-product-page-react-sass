import React from "react";
import "../styles/components/_carousel.scss";
import ImageSlider from "./ImageSlider";
import heroImgs from "../dataImg";
import Arrow from "../UI/Arrow";
import nextIcon from "../images/icon-next.svg";
import prevIcon from "../images/icon-previous.svg";
// import productOne from "../images/image-product-1.jpg";
// import productTwo from "../images/image-product-2.jpg";
// import productThree from "../images/image-product-3.jpg";
// import productFour from "../images/image-product-4.jpg";
import { useImgSlide } from "../contexts/imgSlide-context";
import { useEffect } from "react";
const Carousel = () => {
  const {
    prevSlideHandler,
    nextSlideHandler,
    imgSlideIndex,
    selectedImg,
    setSelectedImg,
  } = useImgSlide();

  useEffect(() => {
    setSelectedImg({ src: heroImgs[imgSlideIndex].url });
  }, [imgSlideIndex, setSelectedImg]);
  return (
    <>
      <div className="product-carousel">
        <Arrow
          direction="left"
          clickFunction={prevSlideHandler}
          icon={prevIcon}
        />
        <ImageSlider img={selectedImg} url={heroImgs[imgSlideIndex].url} />
        <Arrow
          direction="right"
          clickFunction={nextSlideHandler}
          icon={nextIcon}
        />
      </div>
    </>
  );
};
export default Carousel;
