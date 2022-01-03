import { useCartCtx } from "../contexts/cart-context";
import "../styles/components/_popup.scss";
import exclamationIcon from "../images/exclamation-mark-24.png";
import checkIcon from "../images/check-mark-24.png";
const Popup = () => {
  const { alert } = useCartCtx();

  return (
    <div className="popup">
      {alert.type === "alert" && (
        <img src={exclamationIcon} alt="exclamation icon" />
      )}
      {alert.type === "success" && <img src={checkIcon} alt="check icon" />}
      <p>{alert.message}</p>
    </div>
  );
};
export default Popup;
