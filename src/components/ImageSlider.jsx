import "../styles/components/_imageSlider.scss";
const ImageSlider = ({ url }) => {
  const slideStyle = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return <div className="image-slide" style={slideStyle}></div>;
};
export default ImageSlider;
