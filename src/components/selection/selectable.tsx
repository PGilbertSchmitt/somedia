import React, { Component } from "react";

// ISelectFunction and ISelectableChild describe the item that can be passed into Selectable
// This functionality can be turned into a stand alone component for others.
export interface ISelectFunction {
  (): void;
}

export interface ISelectableChild extends React.Component {
  select: ISelectFunction;
}

interface ISelectableProps {
  child: ISelectableChild;
  select: boolean;
  setActive?: boolean;
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
  }

  componentWillReceiveProps(newProps: ISelectableProps) {
    if (newProps.select) {
      this.props.child.select();
    }

    if (newProps.setActive !== this.state.active) {
      this.setState({ active: newProps.setActive });
    }
  }

  render() {
    return (
      <div>
        {this.props.child.render()};
      </div>
    );
  }
}

export default Selectable;
