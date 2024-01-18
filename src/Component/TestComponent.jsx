import React from "react";
import { useSelector } from "react-redux";

const TestComponent = () => {
  const count = useSelector((state) => state);
  console.log(count)

  return <div>TestComponent</div>;
};

export default TestComponent;
