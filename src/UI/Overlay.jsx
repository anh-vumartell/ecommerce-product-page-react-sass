import "../styles/layouts/_overlay.scss";
const Overlay = (props) => {
  return (
    <div
      className="overlay"
      onClick={() => {
        props.onCloseSideNav();
      }}
    >
      {props.children}
    </div>
  );
};

export default Overlay;
