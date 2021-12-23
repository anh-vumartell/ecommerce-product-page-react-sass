import React from "react";
import Carousel from "./Carousel";
import Thumbnails from "./Thumbnails";
import ImgSlideContextProvider from "../contexts/imgSlide-context";
import "../styles/components/_productImages.scss";

const ProductImages = () => {
  return (
    <ImgSlideContextProvider>
      <div className="product-images">
        <Carousel />
        <Thumbnails />
      </div>
    </ImgSlideContextProvider>
  );
};
export default ProductImages;
