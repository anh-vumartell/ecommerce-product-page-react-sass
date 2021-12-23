//import styles
import "../styles/components/_thumbnails.scss";
import thumbnails from "../dataImg";
const Thumbnails = () => {
  return (
    <section className="thumbnails-container">
      {thumbnails.map((thumbnail) => (
        // <div className="thumbnail">
        <button className="thumbnail">
          <img src={thumbnail.urlThumb} alt={`thumnnail-${thumbnail.name}`} />
        </button>
        // </div>
      ))}
    </section>
  );
};
export default Thumbnails;
