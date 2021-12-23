import React, { useState, useContext } from "react";
import heroImgs from "../dataImg";
const ImgSlideContext = React.createContext();

export const useImgSlide = () => {
  return useContext(ImgSlideContext);
};

const ImgSlideContextProvider = (props) => {
  const [imgSlideIndex, setImgSlideIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState();

  const prevSlideHandler = () => {
    if (imgSlideIndex === 0) {
      setImgSlideIndex(heroImgs.length - 1);
    } else {
      setImgSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
    }
  };

  const nextSliderHandler = () => {
    if (imgSlideIndex === heroImgs.length - 1) {
      setImgSlideIndex(0);
    } else {
      setImgSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
  };

  const imgSlideCtxValue = {
    imgSlideIndex,
    selectedImg,
    setSelectedImg,
    prevSlideHandler,
    nextSliderHandler,
  };
  return (
    <ImgSlideContext.Provider value={imgSlideCtxValue}>
      {props.children}
    </ImgSlideContext.Provider>
  );
};
export default ImgSlideContextProvider;