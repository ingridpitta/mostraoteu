import React from "react";
import { NavBar } from "../../components/molecules";

const GeneralTemplate = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default GeneralTemplate;
