import React from "react";

import SelectionGrid from "components/selection/selection_grid";
import mediaElements from "media_items";
import MediaLinkItem, { IMediaInfo } from "components/link_item";

const Main: React.SFC = () => (
  <div className="main">
    <SelectionGrid gridWidth={4} children={mediaElements} />
  </div>
);

export default Main;
