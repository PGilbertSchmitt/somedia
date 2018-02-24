import React, { Component } from "react";

// ISelectableChild describes the item that can be passed into Selectable
// This functionality can be turned into a stand alone component for others.
export interface ISelectableChild extends Component {
  select(): void;
}

interface ISelectableProps {
  child: ISelectableChild;
  select: boolean;
  active: boolean;
}

interface ISelectableState {
  active: boolean;
}

class Selectable extends Component<ISelectableProps, ISelectableState> {
  constructor(props: ISelectableProps) {
    super(props);
    this.state = {
      active: false
    };

    this.className = this.className.bind(this);
  }

  componentWillReceiveProps(newProps: ISelectableProps) {
    if (newProps.select) {
      this.props.child.select();
    }

    if (newProps.active !== this.state.active) {
      this.setState({ active: newProps.active });
    }
  }

  className() {
    let classes = ["selectable"];
    if (this.state.active) {
      classes.push("active");
    }
    return classes.join(" ");
  }

  render() {
    return (
      <div className={this.className()}>
        {this.props.child.render()};
      </div>
    );
  }
}

export default Selectable;
