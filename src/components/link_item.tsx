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
  imagePath: string;
  href: string;
}

class MediaLinkItem extends Component<IMediaLinkProps, {}> {
  constructor(props: IMediaLinkProps) {
    super(props);

    this.state = {
      selected: props.select
    };
    console.log(this.props.media_data.title + ": " + props.select);

    if (props.select) {
      this.select();
    }
  }

  componentWillReceiveProps(props: IMediaLinkProps) {
    if (props.select) {
      // Now leaving the page
      window.location.href = this.props.media_data.href;
    }
  }

  select() {
    // Selection happens here
    console.log(this.props.media_data.title);
  }

  render() {
    return (
      <div className="media-link-item">
        <img src={"./images/" + this.props.media_data.imagePath} />
      </div>
    );
  }
}

export default MediaLinkItem;
