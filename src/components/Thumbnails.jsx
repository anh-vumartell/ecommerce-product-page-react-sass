//import styles
import "../styles/components/_thumbnails.scss";
import thumbnails from "../dataImg";
import { useImgSlide } from "../contexts/imgSlide-context";
const Thumbnails = (props) => {
  // const [isSelected, setIsSelect] = useState();
  const { setSelectedImg } = useImgSlide();

  const handleActiveClass = (e) => {
    console.log(typeof e.target);
    setSelectedImg(e.target);
    let thumbnailBtns = document.querySelectorAll(".thumbnail");
    thumbnailBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    let currentSelected = e.target.closest(".thumbnail");

    currentSelected.classList.add("selected");
  };

  return (
    <section className="thumbnails-container">
      {thumbnails.map((thumbnail) => (
        <img
          key={thumbnail.name}
          className="thumbnail"
          onClick={(e) => {
            handleActiveClass(e);
            props.onOpenModal();
          }}
          src={thumbnail.urlThumb}
          alt={`thumnnail-${thumbnail.name}`}
        />
      ))}
    </section>
  );
};
export default Thumbnails;
