import "../styles/components/_arrow.scss";
const Arrow = ({ direction, clickFunction, icon }) => {
  return (
    <div className={`slide-arrow__${direction}`} onClick={clickFunction}>
      <img className="arrow-icon" src={icon} alt="arrow icon"/>
    </div>
  );
};
export default Arrow;
