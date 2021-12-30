import React, { useState, useContext } from "react";

import heroImgs from "../dataImg";
const ImgSlideContext = React.createContext();

export const useImgSlide = () => {
  return useContext(ImgSlideContext);
};

const ImgSlideContextProvider = (props) => {
  const [imgSlideIndex, setImgSlideIndex] = useState(0);
  const [selectedImg, setSelectedImg] = useState({
    src: heroImgs[imgSlideIndex].url,
  });

  const prevSlideHandler = () => {
    if (imgSlideIndex === 0) {
      setImgSlideIndex(heroImgs.length - 1);
    } else {
      setImgSlideIndex((prevSlideIndex) => prevSlideIndex - 1);
    }
    // setSelectedImg({ src: heroImgs[imgSlideIndex].url });
  };

  console.log(selectedImg);

  const nextSlideHandler = () => {
    if (imgSlideIndex === heroImgs.length - 1) {
      setImgSlideIndex(0);
    } else {
      setImgSlideIndex((prevSlideIndex) => prevSlideIndex + 1);
    }
    // setSelectedImg({ src: heroImgs[imgSlideIndex].url });
  };

  const imgSlideCtxValue = {
    heroImgs,
    imgSlideIndex,
    selectedImg,
    setSelectedImg,
    prevSlideHandler,
    nextSlideHandler,
  };
  return (
    <ImgSlideContext.Provider value={imgSlideCtxValue}>
      {props.children}
    </ImgSlideContext.Provider>
  );
};
export default ImgSlideContextProvider;
