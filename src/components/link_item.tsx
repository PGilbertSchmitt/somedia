import React, { Component } from "react";

import { ISelectableChild } from "components/selection/selectable";

class MediaLinkItem extends Component<{}, {}> implements ISelectableChild {
  constructor(props: {}) {
    super(props);
  }

  select() {
    // Selection happens here
    console.log("I've been selected!");
  }

  render() {
    return (
      <div className="media-link-item">
        I'm a happy media item!
      </div>
    );
  }
}