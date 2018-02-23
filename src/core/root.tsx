import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Footer from "components/footer";
import Header from "components/header";
import Main from "core/main";

const Root: React.SFC = () => (
  <div className="page-spread">
    <Header />
    <Main />
    <Footer />
  </div>
);

export default Root;
