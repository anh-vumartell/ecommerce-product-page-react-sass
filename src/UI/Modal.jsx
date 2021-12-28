import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import LightBox from "../components/LightBox";
import Overlay from "./Overlay";
import "../styles/layouts/_overlay.scss";
import Thumbnails from "../components/Thumbnails";

const portalElement = document.getElementById("backdrop");
function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Overlay onCloseModal={props.onCloseModal} />,
        portalElement
      )}

      {ReactDOM.createPortal(<LightBox />, portalElement)}
    </Fragment>
  );
}

export default Modal;
