import React, { useState } from 'react';
import CustomSnackbar from "../CustomSnackbar";

const types = ["error", "success", "information", "warning"];

const SnackbarExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("information");
  const [vertical, setVertical] = useState("top");
  const [horizontal, setHorizontal] = useState("center");

  const handleClick = (v, h) => {
    setType(types[types.indexOf(type) + 1]);
    setIsOpen(!isOpen);
    setVertical(v);
    setHorizontal(h);
  }

  return (
    <div className="d-flex">
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("top", "center")}>TOP-CENTER</button>
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("top", "right")}>TOP-RIGHT</button>
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("bottom", "right")}>BOTTOM-RIGHT</button>
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("bottom", "center")}>BOTTOM-CENTER</button>
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("bottom", "left")}>BOTTOM-LEFT</button>
      <button className="inline-flex items-center border border-transparent font-medium rounded bg-gray-300 p-2 m-2" onClick={() => handleClick("top", "left")}>TOP-LEFT</button>
      <CustomSnackbar
        anchorOrigin={{ vertical, horizontal }}
        isOpen={isOpen}
        type={type}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default SnackbarExample;
