import React from "react";
import "../styles/layouts/_overlay.scss";
import "../styles/components/_modal.scss";

import iconClose from "../images/icon-close.svg";
import { useImgSlide } from "../contexts/imgSlide-context";
import nextIcon from "../images/icon-next.svg";
import prevIcon from "../images/icon-previous.svg";

function Modal(props) {
  const { heroImgs, imgSlideIndex } = useImgSlide();
  console.log(heroImgs);
  return (
    <>
      <div className="overlay"></div>
      <div className="modal-lightbox">
        <button className="btn-close" onClick={props.onCloseModal}>
          <img src={iconClose} alt="icon close" />
        </button>
        <div className="modal-content">
          <div className="modal-slides">
            <img
              className="slide-img"
              src={heroImgs[imgSlideIndex].url}
              alt="product"
            />
          </div>
          {/* Next/Prev controls */}

          <button className="prev">
            <img src={prevIcon} alt="prev icon" />
          </button>
          <button className="next">
            <img src={nextIcon} alt="next icon" />
          </button>
          {/* Thumbnail image controls */}
          <div className="thumbnails">
            {heroImgs.map((img) => (
              <img className="thumbnail-img" src={img.url} alt={img.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
