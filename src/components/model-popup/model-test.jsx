import { useState } from "react";
import { Model } from "./model";
import "./model.css";

export function ModelTest() {
  const [showModelPopup, setShowModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setShowModelPopup(!showModelPopup);
  }

  function onClose() {
    setShowModelPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModelPopup}>Open Model Popup</button>
      {showModelPopup && (
        <Model onClose={onClose} body={<div>Customize body</div>} />
      )}
    </div>
  );
}
