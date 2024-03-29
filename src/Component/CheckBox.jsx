import React, { useState } from "react";

const CheckBox = () => {
  const [checkedState, setCheckedState] = useState({
    small: false,
    medium: false,
    big: false,
    original: false,
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckedState((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = key === checkboxName;
        return acc;
      }, {}),
    }));
  };

  return (
    <div className="flex flex-col lg:align-middle">
      <label
        style={{
          display: "inline-flex",
          padding: "3.554px 17.771px 3.554px 14.217px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px" }}>Small</span>
        <span style={{ marginRight: "8px" }}>640x960 </span>
        <input
          type="checkbox"
          checked={checkedState.small}
          onChange={() => handleCheckboxChange("small")}
        />
      </label>
      <label
        style={{
          display: "inline-flex",
          padding: "3.554px 17.771px 3.554px 14.217px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px" }}>Medium</span>
        <span style={{ marginRight: "8px" }}>1920x2660 </span>
        <input
          type="checkbox"
          checked={checkedState.medium}
          onChange={() => handleCheckboxChange("medium")}
        />
      </label>
      <label
        style={{
          display: "inline-flex",
          padding: "3.554px 17.771px 3.554px 14.217px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px" }}>Big</span>
        <span style={{ marginRight: "8px" }}>2400x3600 </span>
        <input
          type="checkbox"
          checked={checkedState.big}
          onChange={() => handleCheckboxChange("big")}
        />
      </label>
      <label
        style={{
          display: "inline-flex",
          padding: "3.554px 17.771px 3.554px 14.217px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ marginRight: "8px" }}>Original</span>
        <span style={{ marginRight: "8px" }}>3850x5640 </span>
        <input
          type="checkbox"
          checked={checkedState.original}
          onChange={() => handleCheckboxChange("original")}
        />
      </label>
    </div>
  );
};

export default CheckBox;
