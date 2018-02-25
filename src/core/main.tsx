import React from "react";

import SelectionGrid from "components/selection/selection_grid";
import MediaLinkItem, { IMediaInfo } from "components/link_item";

const Main: React.SFC = () => (
  <div className="main">
    <SelectionGrid gridWidth={4} children={mediaElements()} />
  </div>
);

const mediaElements = () => {
  return [
    "Netflix",
    "Hulu",
    "Prime",
    "Youtube",
    "CrunchyRoll",
    "Wikipedia",
    "Socks",
    "Nugget",
    "Raspi",
    "Another one"
  ].map((title: string) => ({ title }));
};

export default Main;
