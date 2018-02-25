import React, { Component } from "react";

// import { ISelectableChild } from "components/selection/selectable";
interface IMediaLinkProps {
  select: boolean;
  media_data: IMediaInfo;
}

interface IMediaLinkState {
  selected: boolean;
}

export interface IMediaInfo {
  title: string;
}

class MediaLinkItem extends Component<IMediaLinkProps, {}> {
  constructor(props: IMediaLinkProps) {
    super(props);

    this.state = {
      selected: props.select
    };
  }

  select() {
    // Selection happens here
    console.log("I've been selected!");
  }

  render() {
    return (
      <div className="media-link-item">
        <h4>{this.props.media_data.title}</h4>
      </div>
    );
  }
}

export default MediaLinkItem;
