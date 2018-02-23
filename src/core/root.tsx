import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "components/header";
import Header from "components/footer";
import Main from "core/main";

const Root: React.SFC = () => (
  <div className="page-spread">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Root;
