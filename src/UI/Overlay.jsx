import "../styles/layouts/_overlay.scss";
const Overlay = ({ onCloseSideNav, children }) => {
  return (
    <div className="overlay" onClick={onCloseSideNav}>
      {children}
    </div>
  );
};

export default Overlay;
