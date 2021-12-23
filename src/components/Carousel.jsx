import React, { useState } from "react";
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
const Carousel = () => {
  // const images = [
  //   `${productOne}`,
  //   `${productTwo}`,
  //   `${productThree}`,
  //   `${productFour}`,
  // ];
  // const [imgSlideIndex, setImgSlideIndex] = useState(0);

  // const prevSlideHandler = () => {
  //   if (imgSlideIndex === 0) {
  //     setImgSlideIndex(heroImgs.length - 1);
  //   } else {
  //     setImgSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
  //   }
  // };

  // const nextSliderHandler = () => {
  //   if (imgSlideIndex === heroImgs.length - 1) {
  //     setImgSlideIndex(0);
  //   } else {
  //     setImgSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
  //   }
  // };
  const { prevSlideHandler, nextSliderHandler, imgSlideIndex, selectedImg } =
    useImgSlide();
  console.log(selectedImg);
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
          clickFunction={nextSliderHandler}
          icon={nextIcon}
        />
      </div>
    </>
  );
};
export default Carousel;
