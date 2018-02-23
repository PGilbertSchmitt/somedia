import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./footer";
import Header from "./header";
import Main from "./main";

const Root: React.SFC = () => (
  <div className="page-spread">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Root;
