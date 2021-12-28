import { useImgSlide } from "../contexts/imgSlide-context";
import "../styles/components/_imageSlider.scss";

const ImageSlider = (props) => {
  const { imgSlideIndex } = useImgSlide();
  // const slideStyle = {
  //   backgroundImage: `url(${props.url})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  // };

  // console.log(props.img);

  // return <div className="image-slide" style={slideStyle}></div>;
  return (
    <>
      <div className="image-slide">
        <img src={props.img.src} alt={`product ${imgSlideIndex}`} />
      </div>
    </>
  );
};
export default ImageSlider;
