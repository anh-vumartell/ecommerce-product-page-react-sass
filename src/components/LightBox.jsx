import "../styles/components/_lightbox.scss";
import { useImgSlide } from "../contexts/imgSlide-context";
import iconClose from "../images/icon-close.svg";

const LightBox = () => {
  const { selectedImg } = useImgSlide();
  console.log(selectedImg);
  return (
    <>
      <div className="lightbox-container">
        <span>
          <img src={iconClose} />
        </span>
        <img
          className="lightbox-img"
          src={selectedImg.src}
          alt="lightbox img"
        />
      </div>
    </>
  );
};
export default LightBox;
