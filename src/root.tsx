import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./header";

const Root: React.SFC = () => (
  <div className="page-spread">
    <Header />
    <p>My friends</p>
  </div>
);

export default Root;
