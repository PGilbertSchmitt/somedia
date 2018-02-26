import React, { Component } from "react";

import MediaLinkItem, { IMediaInfo } from "components/link_item";

interface ISelectableProps {
  child: IMediaInfo;
  select: boolean;
  active: boolean;
}

interface ISelectableState {
  active: boolean;
}

// This class is merely for seperating the styling of the child element,
// it should pass on the selection prop to its child element
class Selectable extends Component<ISelectableProps, ISelectableState> {
  constructor(props: ISelectableProps) {
    super(props);
    this.state = {
      active: false
    };

    this.className = this.className.bind(this);
  }

  componentWillReceiveProps(newProps: ISelectableProps) {
    if (newProps.active !== this.state.active) {
      this.setState({ active: newProps.active });
    }
  }

  className() {
    let classes = ["selection-item"];
    if (this.state.active) {
      classes.push("active");
    }
    return classes.join(" ");
  }

  render() {
    return (
      <div className={this.className()}>
        <MediaLinkItem select={this.props.select} media_data={this.props.child} />
      </div>
    );
  }
}

export default Selectable;
