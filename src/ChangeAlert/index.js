import React from "react";
import { WithStorageListener } from "./withStorageListener";

const ChangeAlert = ({ show, toggleShow }) => {
  if (show) {
    return (
      <div>
        <p>Hubo cambios</p>
        <button onClick={toggleShow}> Actualizar </button>
      </div>
    );
  } else {
    return null;
  }
};

const ChangeAlertWithStorageListener = WithStorageListener(ChangeAlert);
export { ChangeAlertWithStorageListener };
