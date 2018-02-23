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
  children?: React.SFC;
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
}

export default Selectable;
