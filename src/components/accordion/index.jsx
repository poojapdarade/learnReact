import { useState } from "react";
import data from "./data";
import "./style.css";

export function Accordion() {
  const [selected, setSelected] = useState([]);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    const copySelected = [...selected];
    const findIndexOfCurrentId = copySelected.indexOf(getCurrentId);
    if (findIndexOfCurrentId === -1) {
      copySelected.push(getCurrentId);
    } else {
      copySelected.splice(findIndexOfCurrentId, 1);
    }
    setSelected(copySelected);
  }

  function handleClick(dataItemId) {
    if (enableMultiSelection) {
      handleMultiSelection(dataItemId);
    } else {
      handleSingleSelection(dataItemId);
    }
  }

  function handleMultiSelectButtonClick() {
    if (enableMultiSelection) {
      setSelected([]);
    }
    setEnableMultiSelection(!enableMultiSelection);
  }

  return (
    <div className="wrapper">
      <h2>Accordion</h2>
      <button
        onClick={() => {
          handleMultiSelectButtonClick();
        }}
      >
        {enableMultiSelection ? "Disable" : "Enable"} Multi-Selection
      </button>
      <div className="accordion">
        {data.map((dataItem) => (
          <div className="item" key={dataItem.id}>
            <div onClick={() => handleClick(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>

            {selected.includes(dataItem.id) && (
              <div className="content">{dataItem.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
