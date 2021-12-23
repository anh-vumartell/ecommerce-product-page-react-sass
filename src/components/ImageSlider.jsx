import "../styles/components/_imageSlider.scss";

const ImageSlider = (props) => {
  const slideStyle = {
    backgroundImage: `url(${props.url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  console.log(props.img);
  return <div className="image-slide" style={slideStyle}></div>;
};
export default ImageSlider;
